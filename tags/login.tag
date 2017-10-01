<login>
  <form>
	 <input ref="email" placeholder="email">
   <input ref="password" placeholder="password">
	 <button click={ login } class="btn waves-effect waves-light">
		<i class="material-icons right">send</i> Log in
	 </button>
  </form>

  <script>
    this.on("mount", () => {
      this.refs.email.value = "terje@senikk.com";
      this.refs.password.value = "1234";
    });

    login(e) {
      var variables = {
        email: this.refs.email.value,
        password: this.refs.password.value
      };

      this.query(`mutation($email: String!, $password: String!) {
        signinUser(email: {email: $email, password: $password}) {
          user {
            id
          }
        }
      }`, variables).then(result => {
        this.auth.login(result.signinUser.user.id);
      });
    }
   </script>
</login>
