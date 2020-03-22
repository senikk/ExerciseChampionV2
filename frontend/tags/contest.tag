<contest>
  <actions title="contest"></actions>

  <addcontest></addcontest>

  <ul class="collection">
    <li class="collection-header"><h5>Available contests</h5></li>
    <li each={ contests } class="collection-item avatar">
	    <i if={!joined} onclick={ joinModal } data-message={id} class="material-icons circle">add</i>
      <i if={joined} class="material-icons circle green">remove</i>
      <span class="title">{ name }</span><br>
      <small>{ hDate(createdAt) }</small>
    </li>
  </ul>

  <!-- Modal Structure -->
  <div ref="addContestModal" id="addContestModal" class="modal">
    <div class="modal-content">
      <h4>Join contest</h4>
      <p>{contest.rules}</p>
    </div>
    <div class="modal-footer">
      <a href="#!" onclick={ joinContest } class="modal-close waves-effect waves-green btn-flat">Agree</a>
      <a href="#!" class="modal-close waves-effect btn-flat">Cancel</a>
    </div>
  </div>

  <script>
    var self = this;
    this.contest = {};

    joinContest() {
      var request = new this.R.JoinContestRequest();
      request.setContestid(this.contest.id);

      this.backend.joinContest(request, this.auth.jwt(), (error, result) => {
        if (error) console.log(error);

        console.log("ADDED CONTEST", result);
      });
    }

    joinModal(e) {
      this.contest = this.contests.find(c => c.id == e.target.dataset.message)

      var element = document.querySelector('#addContestModal');
      var instance = M.Modal.getInstance(element);
      instance.open();
    }

    this.event.on("contest:added", function (item) {
      self.contests.unshift(item);
      self.update();
    });

  	this.on("mount", function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);

      var request = new this.R.ListContestRequest();
      request.setFilter("");
      request.setJoined(true);

      this.backend.listContest(request, this.auth.jwt(), (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        this.contests = result.toObject().contestsList;
        this.update();
      });
    });
  </script>

</contest>
