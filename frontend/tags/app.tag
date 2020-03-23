<app>
	<router>
		<route path="signup"><signup></signup></route>
		<route path="login"><login></login></route>
    	<route path="log"><log></log></route>
		<route path="search"><search></search></route>
		<route path="contest"><contest></contest></route>
		<route path="result"><result></result></route>
		<route path="metronome"><metronome></metronome></route>
		<route path="profile/*"><profile></profile></route>
  	</router>

	<script>	
		this.auth.on('login', function (user) {
			route('log','Excerise Champion');
		});

		this.auth.on('logout', function () {
			route('login');
		});

		this.on('mount', function() {
			route.start(true);
		  	route(this.auth.user ? 'log' : 'login');
		});
	</script>
</app>
