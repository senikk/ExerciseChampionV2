<addrehearsal>
  <form>
    <div class="input-field">
      <selectcontest ref="contest" label="Contest" joined="true" chosen={ contestId } change={ changeContestId }></selectcontest>
    </div>
  	<div class="input-field">
  	  <textarea ref="description" onkeyup={ edit } class="materialize-textarea" placeholder="What exercises did you do (required)"></textarea>
    </div>
  	<input ref="minutes" onkeyup={ edit } placeholder="How many minutes? (required)">
    <!--
    <button onclick={ toggletimer } class="btn waves-effect waves-light { timer.color }">
      <i class="material-icons right">{ timer.icon }</i> { timer.text }
    </button>
    -->
  	<button disabled={ !description || minutes <= 0 } onclick={ add } class="btn waves-effect waves-light">
  		<i class="material-icons right">send</i> Log it
  	</button>
  </form>

  <script>
    var self = this;
    //this.timer = { icon: "play_circle_outline", text: "START" };
    this.contestId = localStorage.getItem("addrehearsal-contestid") || 1;

    edit() {
      this.description = this.refs.description.value;
      this.minutes = parseInt(this.refs.minutes.value) || 0;
    }

    isDisabled() {
      console.log("DISABLED");
      return !this.refs.description.value //&& !!this.refs.minutes.value && parseInt(this.refs.minutes.value) == NaN && parseInt(this.refs.minutes.value) <= 0
    }

    changeContestId(contestId) {
      this.contestId = contestId;
      localStorage.setItem("addrehearsal-contestid", contestId);
    }

    toggletimer(e) {
      this.timer = { icon: "pause_circle_outline", text: "PAUSE", color: "orange" };
      this.refs.minutes.value = "1";
    }

    add(e) {
      let r = new this.R.AddRehearsalRequest();
      r.setContestid(this.contestId);
      r.setMinutes(parseInt(this.refs.minutes.value));
      r.setDescription(this.refs.description.value);

      this.backend.addRehearsal(r, this.auth.jwt(), (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        self.event.trigger("rehearsal:added", result.toObject());
        this.refs.minutes.value = '';
        this.refs.description.value = '';
      });
    }
   </script>
</addrehearsal>
