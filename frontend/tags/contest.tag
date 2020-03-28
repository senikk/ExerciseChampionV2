<contest>
  <actions title="contests"></actions>

  <ul class="collection">
    <li class="collection-header"><h5>Available contests</h5></li>
    <li each={ contests } class="collection-item avatar">
	    <i if={!joined} onclick={ joinModal } data-message={id} class="material-icons circle">add</i>
      <i if={joined} class="material-icons circle green">remove</i>
      <span class="title">{ name }</span><br>
      <small>{ hDate(createdAt) }</small>
    </li>
  </ul>

  <!-- Add contest modal -->
  <div ref="addContestModal" class="modal">
    <div class="modal-content">
      <h4>Join contest "{contest.name}"</h4>
      <p if={ contest.rules }>Rules:<br>{contest.rules}</p>
    </div>
    <div class="modal-footer">
      <a href="#!" onclick={ joinContest } class="modal-close waves-effect waves-green btn-flat">Ok</a>
      <a href="#!" class="modal-close waves-effect btn-flat">Cancel</a>
    </div>
  </div>

  <script>
    var self = this;
    this.contest = {};

    joinContest() {
      var r = new this.R.JoinContestRequest();
      r.setContestid(this.contest.id);

      this.backend.joinContest(r, this.auth.jwt(), (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        M.toast({html: 'Joined contest ' + this.contest.name});
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

      var r = new this.R.ListContestRequest();
      r.setPublic(true);

      this.backend.listContest(r, this.auth.jwt(), (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        this.contests = result.toObject().contestsList;
        this.update();
      });
    });
  </script>

</contest>
