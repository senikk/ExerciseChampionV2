<addrehearsal>
  <form>
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

    toggletimer(e) {
      this.timer = { icon: "pause_circle_outline", text: "PAUSE", color: "orange" };
      this.refs.minutes.value = "1";
    }

    logout(e) {
      this.auth.logout();
    }

    add(e) {
      var request = new this.R.AddRehearsalRequest();
      request.setContestid(1);
      request.setMinutes(parseInt(this.refs.minutes.value));
      request.setDescription(this.refs.description.value);

      this.backend.addRehearsal(request, null, (error, result) => {
        if (error) console.log("ERROR", error);

        self.event.trigger("rehearsal:added", result.toObject());
      });
    }
   </script>
</addrehearsal>
