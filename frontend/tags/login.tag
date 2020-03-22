<login>
  <form>
	 <input ref="email" placeholder="email">
   <input ref="password" type="password" placeholder="password">
	 <button onclick={ login }  class="btn waves-effect waves-light">
		<i class="material-icons right">send</i> Log in
	 </button>
  </form>

  <script>
    login(e) {
      var request = new this.R.LoginRequest();
      request.setEmail(this.refs.email.value);
      request.setPassword(this.refs.password.value);

      this.backend.login(request, null, (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        console.log(result.toObject());
        this.auth.login(result.toObject());
      });
    }
   </script>
</login>
