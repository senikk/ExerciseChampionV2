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
		<route path="invite/*"><login></login></route>
  	</router>

	<script>
		let self = this;

		this.auth.on('login', function (user) {
			// normal flow
			if (!self.auth.getInvite()) 
			{
				route('log','Excerise Champion');
			}
			// invitation
			else
			{
				var r = new self.R.InviteAcceptRequest();
				r.setHash(atob(self.auth.getInvite()));

				self.backend.acceptInvite(r, self.auth.jwt(), (error, result) => {
					self.auth.clearInvite();
					route('result','Excerise Champion');

					M.toast({html: self.i18n.t('invitation.accepted')});
				});
			}
		});

		this.auth.on('logout', function () {
			route('login');
		});

		this.on('mount', function() {
			route.start(true);
		  	route(this.auth.user ? 'log' : 'login');
		});

		// Mange invite
		route(function (target, hash) {
			if (target == 'invite' && hash != null) {
				self.auth.setInvite(hash);

				if (self.auth.user) {
					self.auth.login(self.auth.user);
				}
			}
		});

		// Live stream
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
			console.log(`==== USER ${this.auth.userid} ====`);
		})
	</script>
</app>
