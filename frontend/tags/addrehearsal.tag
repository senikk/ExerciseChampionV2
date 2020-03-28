<addrehearsal>
  <form>
    <div class="input-field">
      <selectcontest ref="contest" label="Contest" joined="true" chosen={ contestId } change={ changeContestId }></selectcontest>
    </div>
  	<div class="input-field">
  	  <textarea ref="description" onkeyup={ edit } class="materialize-textarea" placeholder="What exercises did you do (required)"></textarea>
    </div>
  	<input ref="minutes" onkeyup={ edit } placeholder="How many minutes? (required)">
    <button onclick={ toggletimer } class="btn waves-effect waves-light { stopwatch.timer.color } { stopwatch.status == 'STARTED' ? 'pulse':'' }">
      <i class="material-icons right">{ stopwatch.timer.icon }</i> { stopwatch.seconds == 0 ? stopwatch.timer.text : '' } { stopwatch.seconds > 0 ? moment.utc(stopwatch.seconds*1000).format('HH:mm:ss'):'' }
    </button>
    <button onclick={ cleartimer } if={ stopwatch.seconds > 0 && stopwatch.status == 'STOPPED' } class="btn waves-effect waves-light red">
      <i class="material-icons right">hourglass_empty</i> CLEAR
    </button>
  	<button disabled={ !description || minutes <= 0 } onclick={ add } class="btn waves-effect waves-light">
  		<i class="material-icons right">send</i> Log it
  	</button>
  </form>

  <script>
    var self = this;
    this.contestId = localStorage.getItem("addrehearsal-contestid") || 1;

    edit() {
      this.description = this.refs.description.value;
      this.minutes = parseInt(this.refs.minutes.value) || 0;
    }

    changeContestId(contestId) {
      this.contestId = contestId;
      localStorage.setItem("addrehearsal-contestid", contestId);
    }

    cleartimer(e) {
      self.stopwatch.trigger('clear');
    }

    toggletimer(e) {
      self.stopwatch.trigger('toggle');      
    }

    self.stopwatch.on('seconds', (seconds) => {
      this.update();
    });

    self.stopwatch.on('minutes', (minutes) => {
      console.log("== GOT MIN", minutes);
      self.minutes = minutes;
      self.refs.minutes.value = minutes;
    });

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
        self.stopwatch.trigger('clear');
        self.update();
      });
    }
   </script>
</addrehearsal>
