<signup>
  <form onsubmit={ signup }>
	 <input ref="name" placeholder={ i18n.t('name') }>
	 <input ref="email" placeholder={ i18n.t('email') }>
     <input ref="password" type="password" placeholder={ i18n.t('password') }>
	 <button class="btn waves-effect waves-light">
		<i class="material-icons right">send</i> { i18n.t('signup.signup') }
	 </button>
   <button onclick={ login } class="btn waves-effect waves-light orange">
    <i class="material-icons right">login</i> { i18n.t('login.login') }
   </button>
  </form>

  <script>
    login() {
      route('login')
    }

    signup(e) {
      e.preventDefault();

      if (!this.refs.password.value) {
          M.toast({html: i18n.t('signup.missingpassword') });
          return;
      }

      var r = new this.R.SignupRequest();
      r.setName(this.refs.name.value);
      r.setEmail(this.refs.email.value);
      r.setPassword(this.refs.password.value);

      this.backend.signup(r, null, (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        this.auth.login(result.toObject());
      });
    }
   </script>
</signup>
