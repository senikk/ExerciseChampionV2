<contests>
  <actions title="title.contests"></actions>

  <ul class="collection with-header">
    <li each={ contests } class="collection-item avatar">
      <i if={!joined} onclick={ joinModal } data-message={id} class="material-icons circle">add</i>
      <i if={joined} class="material-icons circle green">remove</i>
      <p>
        <span class="title">{ name }</span><br>
        <small>{ i18n.t('contests.participants', { participants: participants}) }</small><br>
        <small>{ hDate(createdat) } { i18n.t('by') } { user.name }</small>
      </p>

      <i onclick={ inviteContest } data-message={id} class="material-icons secondary-content waves-effect waves-light">share</i>
    </li>
  </ul>

  <!-- Add contest modal -->
  <div ref="addContestModal" class="modal">
    <div class="modal-content">
      <h4>{ i18n.t('modal.addcontest.question', {name: contest.name}) }</h4>
      <p if={ contest.rules }>{ i18n.t('modal.addcontest.rules') }<br>{contest.rules}</p>
    </div>
    <div class="modal-footer">
      <a href="#!" onclick={ joinContest } class="modal-close waves-effect waves-green btn-flat">{ i18n.t('modal.yes') }</a>
      <a href="#!" class="modal-close waves-effect btn-flat">{ i18n.t('modal.no') }</a>
    </div>
  </div>

  <!-- Invite modal -->
  <div ref="inviteContestModal" class="modal">
    <div class="modal-content">
      <h4>{ i18n.t('modal.invitecontest.question', {name: contest.name}) }</h4>
      <p if={ contest.rules }>{ i18n.t('modal.addcontest.rules') }<br>{contest.rules}</p>
      <input readonly ref="inviteurl" value={ contest.inviteurl } />
      <p>
        { i18n.t('modal.invitecontest.description')}
      </p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-open waved-effect btn-flat" onclick={ copyToClipboard }>{ i18n.t('modal.invitecontest.copybutton')}</a>
      <a href="#!" class="modal-close waves-effect btn-flat">{ i18n.t('modal.close') }</a>
    </div>
  </div>

  <script>
    var self = this;
    this.contest = {};

    copyToClipboard() {
      this.refs.inviteurl.select();
      this.refs.inviteurl.setSelectionRange(0,200);
      document.execCommand("copy");

      M.toast({html: this.i18n.t('modal.invitecontest.copied')});
    }

    inviteContest(e) {
      var r = new this.R.InviteRequest();
      r.setEntitytype(this.R.EntityType.CONTEST);
      r.setEntityid(e.target.dataset.message)

      this.contest = this.contests.find(c => c.id == e.target.dataset.message);

      this.backend.getInvite(r, this.auth.jwt(), (error, result) => {
        self.contest.inviteurl = `${this.env.APPURL}/?#/invite/${btoa(result.getHash())}`;
        self.update();

        var instance = M.Modal.getInstance(self.refs.inviteContestModal);
        instance.open();
      });
    }

    joinContest() {
      var r = new this.R.JoinContestRequest();
      r.setContestid(this.contest.id);

      this.backend.joinContest(r, this.auth.jwt(), (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        M.toast({html: this.i18n.t('contests.joined', {name: this.contest.name})});
        this.contest.joined = true;
        this.update();
      });
    }

    joinModal(e) {
      this.contest = this.contests.find(c => c.id == e.target.dataset.message)

      var instance = M.Modal.getInstance(this.refs.addContestModal);
      instance.open();
    }

    this.event.on("contest:added", function (item) {
      self.contests.unshift(item);
      self.update();
    });

  	this.on("mount", function () {
      M.Modal.init(this.refs.addContestModal);
      M.Modal.init(this.refs.inviteContestModal);

      var r = new this.R.ListContestRequest();
      r.setPublic(true);

      this.backend.listContest(r, this.auth.jwt(), (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        this.contests = result.toObject().contestsList;
        this.update();
      });
    });
  </script>

</contests>
