<actions>
	 <div class="row">
      	<div class="col s4">
			<blockquote>
				Exercise { opts.title }<br>{ this.auth.user.name } you are <i>{profile.positionthisweek}th this week<br>{profile.minutesthisweek}minutes</i>
    		</blockquote>
      	</div>
      	<div class="col s8 right-align" style="padding-top: 10px;">
 	 		<a class="btn-floating btn-large grey" href="#/search" title="Contest search"><i class="material-icons">search</i></a>
	      	<a class="btn-floating btn-large green" href="#/contest" title="Add new contest"><i class="material-icons">games</i></a>
	      	<a class="btn-floating btn-large green" href="#/result" title="Results"><i class="material-icons">insert_chart</i></a>
	      	<a class="btn-floating btn-large green" onclick={ logout } href="#/login" title="Log out"><i class="material-icons">close</i></a>
			<!--
	      	<a class="btn-floating btn-large green" href="#/metronome" title="Metronome"><i class="material-icons">av_timer</i></a>
			-->
      	</div>
    </div>

	<div class="fixed-action-btn" style="bottom: 10px; right: 10px;">
		<!--
		<a class="btn-floating btn-large orange ">
			<i class="material-icons">pause_circle_outline</i>
		</a>
		-->
		<a class="btn-floating btn-large" href="#/log">
	  		<i class="large material-icons">mode_edit</i>
		</a>
	</div>

	<script>
		var self = this;
		this.profile = {};

		logout(e) {
			console.log("LOOGGGER UT");
			this.auth.logout();
		}

		function loadProfile() {
			var request = new self.R.ProfileRequest();
      		request.setUserid(self.auth.user.userid);
			console.log("NW", self.auth.user.userid);

		    self.backend.getProfile(request, self.auth.jwt(), (error, result) => {
        		if (error) { M.toast({html: error.message}); return; }

				console.log("FROM ACTIONS");
        		console.log(result.toObject());
				self.profile = result.toObject();
				self.update();
      		});
		}

		this.on("mount", function() {
			//loadProfile();
		});

		this.event.on("rehearsal:added", () => {
			console.log("ADDED REHEARSAL GET NEW UPDATED PROFILE");
			loadProfile();
		});

	</script>
</actions>