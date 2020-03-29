<app>
	<router>
		<route path="signup"><signup></signup></route>
		<route path="login"><login></login></route>
    	<route path="log"><log></log></route>
		<route path="search"><search></search></route>
		<route path="contests"><contests></contests></route>
		<route path="result"><result></result></route>
		<route path="metronome"><metronome></metronome></route>
		<route path="profile/*"><profile></profile></route>
		<route path="timeline"><timeline></timeline></route>
		<route path="contest/add"><addcontest></addcontest></route>
  	</router>

	<script>
		let self = this;
		this.i18n.language('no');

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

        var r = new this.R.ListRehearsalRequest();
		let channel = this.backend.rehearsalStream(r, this.auth.jwt());
        channel.on("data", (data) => {
			let rehearsal = data.toObject();
			self.event.trigger("rehearsal:entry", rehearsal);

			if (self.auth.userid != rehearsal.userid) {
				M.toast({html: rehearsal.user.name + ' registered ' + rehearsal.minutes + ' minutes in contest "' + rehearsal.contest.name + '"'});
			}
        });
        channel.on("error", (error) => {
            console.log(error);
        });

		this.on('mount', () => {
			console.log(`==== USER ${this.auth.userid}====`);
		})
	</script>
</app>
