<login>
  <form>
	 <input name="username" placeholder="username">
   <input name="password" placeholder="password">
	 <button click={ login } class="btn waves-effect waves-light">
		<i class="material-icons right">send</i> Log in
	 </button>
  </form>

  <script>
  	var self = this;
    this.mixin('Helper');

    //this.username.value = 'terje@senikk.com';
    //this.password.value = '1234';

    login(e) {
      console.log("login");
      //console.log("username", this.username.value);
      //console.log("password", this.password.value);

      /*
   		self.api.post('/auth/local', {
        "identifier": self.username.value,
        "password": self.password.value
      }).then(function (response) {
          var jwt = response.data.jwt;

          if (jwt) {
            self.api.interceptors.request.use(function (config) {
              config.headers['authorization'] = 'Bearer ' + jwt;
              return config;
            });

            self.parent.trigger("login:after");
          }
	    });
      */

      this.event.trigger("login:after");

      //route('log');
    	//this.password.value = '';
    }
   </script>
</login>
