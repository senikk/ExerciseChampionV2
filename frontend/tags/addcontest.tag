<addcontest>
  <div class="row">
    <form class="col s12">
      <div class="row">
          <div class="input-field col s12">
            <input id="name" type="text">
            <label for="name">Contest name</label>
          </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="rules" class="materialize-textarea"></textarea>
          <label for="rules">Contest rules</label>
        </div>
      </div>
      <button onclick={ add } class="btn waves-effect waves-light">
        <i class="material-icons right">send</i> Add
      </button>
    </form>
  </div>

  <script>
  	add(e) {
  		console.log(e);
  		console.log("public: " + this.public.checked);
  	}

  </script>
</addcontest>
