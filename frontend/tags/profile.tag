<profile>
	<actions title="title.profile"></actions>

	<ul class="collection with-header">
    	<li class="collection-header">
    		<h4>{ profile.name } {this.opts.userid}</h4>
    		<i>Joined { hDate(profile.joined) }</i>
    	</li>
    	<li class="collection-item" if={profile.positionthisweek > 0}>This week <span class="right">({ i18n.t('position', {position: profile.positionthisweek}) }) { i18n.t('minutes', {minutes: profile.minutesthisweek}) }</span></li>
    	<li class="collection-item" if={profile.positionthisweek == 0}>This week <span class="right">{ i18n.t('minutes', {minutes: 0}) }</span></li>
    	<li class="collection-item">This month <span class="right">{ i18n.t('minutes', {minutes: profile.minutesthismonth}) }</span></li>
    	<li class="collection-item">This year <span class="right">{ i18n.t('minutes', {minutes: profile.minutesthisyear}) }</span></li>
 	</ul>

	<script>
		this.profile = {};

		this.on("route", userid => {
			var r = new this.R.ProfileRequest();
      		r.setUserid(userid);

		    this.backend.getProfile(r, this.auth.jwt(), (error, result) => {
        		if (error) { M.toast({html: error.message}); return; }

				this.profile = result.toObject();
				this.update();
      		});
		});
 	</script>
</profile>
