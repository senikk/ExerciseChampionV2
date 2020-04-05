<login>
  <actions></actions>

  <form onsubmit={ login }>
	 <input ref="email" placeholder={ i18n.t('email') }>
   <input ref="password" type="password" placeholder={ i18n.t('password') }>
	 <button class="btn waves-effect waves-light">
		<i class="material-icons right">send</i> { i18n.t('login.login') }
	 </button>
   <button onclick={ signup } class="btn waves-effect waves-light orange">
    <i class="material-icons right">sign</i> { i18n.t('login.signup') }
   </button>
  </form>

  <script>
    signup(e) {
      route('signup');
    }

    login(e) {
      e.preventDefault();

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
