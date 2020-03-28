<addcontest>
  <actions title="add contest"></actions>

  <div class="row">
    <form class="col s12">
      <div class="row">
          <div class="input-field col s12">
            <input ref="name" id="name" type="text">
            <label for="name">Contest name</label>
          </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea ref="rules" id="rules" class="materialize-textarea"></textarea>
          <label for="rules">Contest rules</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <label>
            <input ref="public" type="checkbox" class="filled-in" />
            <span>Public contest availabe for everyone</span>
          </label>
        </div>
      </div>
      <button onclick={ add } class="btn waves-effect waves-light">
        <i class="material-icons right">send</i> Add
      </button>
    </form>
  </div>

  <script>
    var self = this;

    add(e) {
      let r = new this.R.AddContestRequest();
      r.setName(this.refs.name.value);
      r.setRules(this.refs.rules.value);
      r.setPublic(this.refs.public.checked);

      this.backend.addContest(r, this.auth.jwt(), (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        self.event.trigger("contest:added", result.toObject());
      });
    }
  </script>
</addcontest>
