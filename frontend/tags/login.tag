<login>
  <form onsubmit={ login }>
	 <input ref="email" placeholder="email">
   <input ref="password" type="password" placeholder="password">
	 <button onclick={ login }  class="btn waves-effect waves-light">
		<i class="material-icons right">send</i> Log in
	 </button>
   <button onclick={ signup } class="btn waves-effect waves-light">
    <i class="material-icons right">sign</i> Sign up
   </button>
  </form>

  <script>
    signup(e) {
      route('signup');
    }

    login(e) {
      var r = new this.R.LoginRequest();
      r.setEmail(this.refs.email.value);
      r.setPassword(this.refs.password.value);

      this.backend.login(r, null, (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        this.auth.login(result.toObject());
      });
    }
   </script>
</login>
