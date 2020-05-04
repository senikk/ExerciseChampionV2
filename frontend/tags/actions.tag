<actions>
	<style>
		.dropdown-content {
			top: -40px;
			width: 200px !important;
		}
		.dropdown-content li.version {
			font-size: 7pt;
			padding-top: 10px;
			padding-left: 14px;
		}
		.actionbuttons {
			padding-top: 10px;
		}
	</style>

	<!-- logged in users -->
	<virtual if={ auth.user }>
		<div class="row actionbuttons">
			<div class="col s2">
				<button if={ !installed } class="waves-effect waves-light btn-small grey" onclick={ install }><i class="material-icons middle">home</i></button>
			</div>
			<div class="col s10 right-align" >
				<!--
				<a class="btn-floating btn-large grey" href="#/search" title="Contest search"><i class="material-icons">search</i></a>
				-->
				<a class="btn-floating btn-large green" href="#/timeline" title={ i18n.t('menu.timeline') }><i class="material-icons">chat</i></a>
				<a class="btn-floating btn-large green" href="#/result" title={ i18n.t('menu.results') }><i class="material-icons">insert_chart</i></a>
				<a class="btn-floating btn-large grey dropdown-trigger" ref="dropdown" data-target="dropdown" href="#!" title={ i18n.t('menu.more') }><i class="material-icons">arrow_drop_down</i></a>
			</div>
		</div>
		<div class="row">
			<div class="col s12">
				<blockquote if={profile.minutesthisweek > 0}>
					{ this.auth.user.name }<br><i>{i18n.t('position',{position: profile.positionthisweek})} { i18n.t('thisweek', {week: moment().isoWeek()}) } {i18n.t('minutes', {minutes: profile.minutesthisweek})}</i>
				</blockquote>
				<blockquote if={profile.minutesthisweek == 0}>
					{ this.auth.user.name }<br>{ i18n.t('no registration this week') }</i>
				</blockquote>
			</div>
		</div>
		<!-- Dropdown for more actions -->
		<ul id='dropdown' class='dropdown-content'>
			<li each={ l in i18n.languages } data><a data-language={ l.code } onclick={ changeLanguage }>
				<b if={ i18n.current.code == l.code }>{ l.text }</b>
				<virtual if={ i18n.current.code != l.code}>{ l.text }</virtual>
			</a></li>
			<li class="divider"></li>
			<li><a href="#/profile/{auth.user.userid}">{ i18n.t('dropdown.profile') }</a></li>
			<li><a href="#/contests">{ i18n.t('dropdown.contests') }</a></li>
			<li><a href="#/contest/add">{ i18n.t('dropdown.addcontest') }</a></li>
			<li class="divider"></li>
			<!-- <li><a href="#/metronome" title="Metronome">{ i18n.t('dropdown.metronome') }</a> -->
			<li><a onclick={ logoutModal } href="#!" title="Log out">{ i18n.t('dropdown.logout') }</i></a></li>
			<li class="divider"></li>
			<li class="version">ec: v0.11 / v0.11 26.04.2020</li>
		</ul>

		<!-- Button at bottom -->
		<div class="fixed-action-btn" style="bottom: 10px; right: 10px;">
			<a class="btn-floating btn-large { stopwatch.status == 'STOPPED' ? 'green':'pulse orange'}" href="#/log">
				<i class="large material-icons">mode_edit</i>
			</a>
		</div>

		<!-- Add contest modal -->
		<div ref="logoutModal" class="modal">
		<div class="modal-content">
			<h4>{ i18n.t('modal.logout.question') }</h4>
		</div>
		<div class="modal-footer">
			<a href="#!" onclick={ logout } class="modal-close waves-effect waves-green btn-flat">{ i18n.t('modal.yes') }</a>
			<a href="#!" class="modal-close waves-effect btn-flat">{ i18n.t('modal.no') }</a>
		</div>
	</div>
	</virtual>

	<!-- not logged in users -->
	<virtual if={ !auth.user }>
		<div class="row">
			<div class="col s4">
				<blockquote>
					Exercise Champion 2
				</blockquote>
			</div>
			<div class="col s8 right-align" style="padding-top: 10px;">
				<a class="btn-small grey dropdown-trigger" ref="dropdown" data-target="dropdown" href="#!" title={ i18n.t('menu.more') }>{ i18n.current.text } <i class="material-icons">arrow_drop_down</i></a>
			</div>
		</div>
		<ul id='dropdown' class='dropdown-content'>
			<li each={ l in i18n.languages } data><a data-language={ l.code } onclick={ changeLanguage }>{ l.text }</a></li>
		</ul>
	</virtual>

	<script>
		var self = this;
		this.profile = {};
		this.installed = true;
		
		logoutModal(e) {
			var instance = M.Modal.getInstance(this.refs.logoutModal);	
			instance.open();
		}

		logout(e) {
			this.auth.logout();
		}

		changeLanguage(e) {
			this.i18n.language(e.target.dataset.language);
			this.i18n.trigger('language');
			riot.update();
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

		this.event.on("rehearsal:added", () => {
			loadProfile();
		});

		this.stopwatch.on('timer', () => {
			this.update();
		});

		this.on('mount', () => {
			M.Dropdown.init(this.refs.dropdown);
			M.Modal.init(this.refs.logoutModal);
			if (this.auth.user) loadProfile();
		});

		window.addEventListener('beforeinstallprompt', (event) => {
			console.log("= INSTALL APP?");
			self.installed = false;
			event.preventDefault();
			self.installPromptEvent = event;
		});

		install() {
			console.log("== INSTALL");
			self.installPromptEvent.prompt();
			self.installPromptEvent.userChoice.then((result) => {
				if (result.outcome === 'accepted') {
					self.installed = true;
					self.update();
				}
			});
		}
	</script>
</actions>