<addexercise>
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
      var variables = {
          description: this.refs.description.value,
          minutes: parseInt(this.refs.minutes.value),
          user: self.auth.user
      };

      this.query(`
        mutation($description: String!, $minutes: Int!, $user: ID) {
          createLog(description: $description, minutes: $minutes, userId: $user) {
            id
            minutes
            description
            user {
              name
            }
          }
        }
      `, variables).then(response => {
        	self.event.trigger("exercise:added", response.createLog);
      });
    }
   </script>
</addexercise>
