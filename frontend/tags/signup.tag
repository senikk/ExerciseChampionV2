<signup>
  <form>
	 <input ref="name" placeholder="name">
	 <input ref="email" placeholder="email">
     <input ref="password" type="password" placeholder="password (minimum 6 character)">
     <input ref="password2" type="password" placeholder="retype password">
	 <button onclick={ signup }  class="btn waves-effect waves-light">
		<i class="material-icons right">send</i> Register
	 </button>
  </form>

  <script>
    signup() {
      if (!this.refs.password.value || !this.refs.password2.value || 
          this.refs.password.value != this.refs.password2.value) {
          M.toast({html: 'Retyped password is not equal to password'});
          return;
      }

      var request = new this.R.SignupRequest();
      request.setName(this.refs.name.value);
      request.setEmail(this.refs.email.value);
      request.setPassword(this.refs.password.value);

      this.backend.signup(request, null, (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        this.auth.login(result.toObject());
      });
    }
   </script>
</signup>
