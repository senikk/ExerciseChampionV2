<addrehearsal>
  <form>
    <div class="input-field">
      <selectcontest ref="contest" label="Contest" chosen={ contest } onchange={ changeContest }></selectcontest>
    </div>
  	<div class="input-field">
  	  <textarea ref="description" class="materialize-textarea" placeholder="What exercises did you do (required)"></textarea>
    </div>
  	<input ref="minutes" placeholder="How many minutes? (required)">
    <!--
    <button onclick={ toggletimer } class="btn waves-effect waves-light { timer.color }">
      <i class="material-icons right">{ timer.icon }</i> { timer.text }
    </button>
    -->
  	<button onclick={ add } class="btn waves-effect waves-light">
  		<i class="material-icons right">send</i> Log it
  	</button>
  </form>

  <script>
    var self = this;
    this.timer = { icon: "play_circle_outline", text: "START" };
    this.contest = localStorage.getItem("addrehearsal-contestid") || 1;

    changeContest(contest) {
      this.contest = contest;
      localStorage.setItem("addrehearsal-contestid", this.contest);
    }

    toggletimer(e) {
      this.timer = { icon: "pause_circle_outline", text: "PAUSE", color: "orange" };
      this.refs.minutes.value = "1";
    }

    add(e) {
      let r = new this.R.AddRehearsalRequest();
      r.setContestid(this.refs.contest.refs.contestId.value);
      r.setMinutes(parseInt(this.refs.minutes.value));
      r.setDescription(this.refs.description.value);

      this.backend.addRehearsal(r, this.auth.jwt(), (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        self.event.trigger("rehearsal:added", result.toObject());
      });
    }
   </script>
</addrehearsal>
