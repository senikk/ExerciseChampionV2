<addexercise>
  <form>
  	<div class="input-field">
		  <textarea name="description" class="materialize-textarea" placeholder="What exercises did you do (required)"></textarea>
	  </div>
  	<input name="mins" placeholder="How many minutes? (required)">
    <button onclick={ toggletimer } class="btn waves-effect waves-light { timer.color }">
      <i class="material-icons right">{ timer.icon }</i> { timer.text }
    </button>
  	<button onclick={ add } class="btn waves-effect waves-light">
  		<i class="material-icons right">send</i> Log it
  	</button>
  </form>

  <script>
  	var self = this;
    this.timer = { icon: "play_circle_outline", text: "START" };
  	this.mixin('Helper');

    toggletimer(e) {
      this.timer = { icon: "pause_circle_outline", text: "PAUSE", color: "orange" };
      this.mins.value = "1";
    }

    add(e) {
   		self.api.post('/exercise', {
        	description: this.description.value,
        	mins: this.mins.value
   		}).then(function (response) {
      		self.parent.trigger("exercise:added", response.data);
	    });
	
    	this.description.value = '';
      this.mins.value = '';
    }
   </script>
</addexercise>