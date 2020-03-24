<actions>
	 <div class="row">
      	<div class="col s4">
			<blockquote>
				Exercise { opts.title }<br>{ this.auth.user.name } you are <i>{profile.positionthisweek}th this week<br>{profile.minutesthisweek}minutes</i>
    		</blockquote>
      	</div>
      	<div class="col s8 right-align" style="padding-top: 10px;">
		  	<!--
 	 		<a class="btn-floating btn-large grey" href="#/search" title="Contest search"><i class="material-icons">search</i></a>
			-->
	      	<a class="btn-floating btn-large green" href="#/contest" title="Add new contest"><i class="material-icons">games</i></a>
	      	<a class="btn-floating btn-large green" href="#/result" title="Results"><i class="material-icons">insert_chart</i></a>
	      	<a class="btn-floating btn-large orange" onclick={ logoutModal } href="#!" title="Log out"><i class="material-icons">close</i></a>
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

	<!-- Add contest modal -->
	<div ref="logoutModal" class="modal">
		<div class="modal-content">
			<h4>Really log out?</h4>
		</div>
		<div class="modal-footer">
			<a href="#!" onclick={ logout } class="modal-close waves-effect waves-green btn-flat">Yes</a>
			<a href="#!" class="modal-close waves-effect btn-flat">Cancel</a>
		</div>
	</div>

	<script>
		var self = this;
		this.profile = {};

		logoutModal(e) {
			var instance = M.Modal.getInstance(this.refs.logoutModal);
			console.log("REF", this.refs.logoutModal);
			console.log("INS", instance);
			instance.open();
		}

		logout(e) {
			this.auth.logout();
		}

		function loadProfile() {
			var r = new self.R.ProfileRequest();
      		r.setUserid(self.auth.user.userid);

		    self.backend.getProfile(r, self.auth.jwt(), (error, result) => {
        		if (error) { M.toast({html: error.message}); return; }

				self.profile = result.toObject();
				self.update();
      		});
		}

		this.on("mount", function() {
			loadProfile();
		});

		this.event.on("rehearsal:added", () => {
			loadProfile();
		});

	</script>
</actions>