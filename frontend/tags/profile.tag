<profile>
	<actions title="profile"></actions>

	<ul class="collection with-header">
    	<li class="collection-header">
    		<h4>{ profile.name } {this.opts.userid}</h4>
    		<i>Joined { hDate(profile.joined) }</i>
    	</li>
    	<li class="collection-item">This week <span class="right">({ profile.positionthisweek }th) { profile.minutesthisweek } minutes</span></li>
    	<li class="collection-item">This month <span class="right">{ profile.minutesthismonth } minutes</span></li>
    	<li class="collection-item">This year <span class="right">{ profile.minutesthisyear } minutes</span></li>
 	</ul>

	<!--
 	<ul class="collection with-header">
 		<li class="collection-header green darken-1">Contests</li>
    	<li class="collection-item">
    		<div class="chip">Master class</div>
    		<div class="chip">Heimdal NM 2016</div>
    	</li>
 	</ul>

 	<ul class="collection with-header">
 		<li class="collection-header green darken-1">Instruments</li>
    	<li class="collection-item">
			<div class="chip">Bb Cornet</div>
    	</li>
 	</ul>
	-->

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

	    this.on("mount", function () {			
		    
		});
 	</script>
</profile>
