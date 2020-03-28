<actions>
	 <div class="row">
      	<div class="col s4">
			<blockquote if={profile.minutesthisweek > 0}>
				Exercise { opts.title }<br>{ this.auth.user.name } you are <i>{profile.positionthisweek}th this week<br>{profile.minutesthisweek}minutes</i>
    		</blockquote>
			<blockquote if={profile.minutesthisweek == 0}>
				Exercise { opts.title }<br>{ this.auth.user.name }<br>no registration this week</i>
			</blockquote>
      	</div>
      	<div class="col s8 right-align" style="padding-top: 10px;">
		  	<!--
 	 		<a class="btn-floating btn-large grey" href="#/search" title="Contest search"><i class="material-icons">search</i></a>
			-->
			<a class="btn-floating btn-large green" href="#/timeline" title="Timeline"><i class="material-icons">chat</i></a>
	      	<a class="btn-floating btn-large green" href="#/contest" title="Add new contest"><i class="material-icons">games</i></a>
	      	<a class="btn-floating btn-large green" href="#/result" title="Results"><i class="material-icons">insert_chart</i></a>
			<a class="btn-floating btn-large grey dropdown-trigger" ref="dropdown" data-target="dropdown" href="#!" title="More.."><i class="material-icons">arrow_drop_down</i></a>
      	</div>
    </div>

	<!-- Dropdown for more actions -->
	<ul id='dropdown' class='dropdown-content'>
		<li><a href="#/profile/{auth.user.userid}">Profile</a></li>
		<li><a href="#/contest/add">Add contest</a></li>
		<li class="divider" tabindex="-1"></li>
		<!-- <li><a href="#/metronome" title="Metronome">Metronome</a> -->
		<li><a onclick={ logoutModal } href="#!" title="Log out">Log out</i></a></li>
  	</ul>

	<div class="fixed-action-btn" style="bottom: 10px; right: 10px;">
		<a class="btn-floating btn-large { stopwatch.status == 'STOPPED' ? 'green':'pulse orange'}" href="#/log">
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

		this.stopwatch.on('timer', () => {
			this.update();
		});

		this.on('mount', () => {
			M.Dropdown.init(this.refs.dropdown);
			M.Modal.init(this.refs.logoutModal);
		});
	</script>
</actions>