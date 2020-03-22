<result>
	<actions title="result"></actions>

	<div class="row">
		<div class="input-field col s6">
		    <select ref="contest">
		      <option each={ contests } value={ id }>{ name }</option>
		    </select>
		    <label>Contest</label>
		</div>

	  	<div class="input-field col s6">
		    <select ref="period">
		      <option value={this.R.ListResultRequest.Period.THISYEAR} selected={this.period == this.R.ListResultRequest.Period.THISYEAR}>this year</option>
		      <option value={this.R.ListResultRequest.Period.THISMONTH} selected={this.period == this.R.ListResultRequest.Period.THISMONTH}>this month</option>
		      <option value={this.R.ListResultRequest.Period.THISWEEK} selected={this.period == this.R.ListResultRequest.Period.THISWEEK}>this week</option>
		      <option value={this.R.ListResultRequest.Period.LASTWEEK} selected={this.period == this.R.ListResultRequest.Period.LASTWEEK}>previous week</option>
		      <option value={this.R.ListResultRequest.Period.LASTMONTH} selected={this.period == this.R.ListResultRequest.Period.LASTMONTH}>last month</option>
		      <option value={this.R.ListResultRequest.Period.LASTYEAR} selected={this.period == this.R.ListResultRequest.Period.LASTYEAR}>last year</option>
		    </select>
		    <label>Period of time</label>
	  	</div>
  	</div>
  </div>

  <div class="row">
	<table class="striped">
		<thead>
		  <tr>
		      <th data-field="position">#</th>
		      <th data-field="user.name">Name</th>
		      <th data-field="minutes" class="right-align">Minutes</th>
		  </tr>
		</thead>

		<tbody>
		  <tr each={ results }>
		    <td>{ position }</td>
		    <td><a href="#/profile/{ userid }">{ user.name }</a></td>
		    <td class="right-align">{ minutes }</td>
		  </tr>
		</tbody>
	</table>

	<script>
		var period = this.R.ListResultRequest.Period.THISYEAR;

		changePeriod(e) {
			console.log("PERIOD CHANGED", e.target.value);
			this.period = e.target.value;
			// set this.period
			this.loadResults();
		}

		changeContest(e) {
			console.log("CHANGE CONTEST", e.target.value);
			this.loadResults();
		}

		loadResults() {
			var request = new this.R.ListResultRequest();
			request.setContestid(this.refs.contest.value);
			request.setPeriod(this.period);

			this.backend.listResult(request, null, (error, result) => {
				if (error) { M.toast({html: error.message}); return; }

				this.results = result.toObject().resultsList;
				this.update();
			});
		}

		loadContests() {
			var request = new this.R.ListContestRequest();
			request.setPublic(true);
			request.setJoined(true);
			request.setLimit(100);

			this.backend.listContest(request, this.auth.jwt(), (error, result) => {
		        if (error) { M.toast({html: error.message}); return; }

				this.contests = result.toObject().contestsList;
				this.update();
				$('select').formSelect();
			});
		}

		this.on('mount', function() {
			var self = this;

			this.loadResults();
			this.loadContests();

			$(document).ready(function() {
				$(self.refs.period).on('change', (e) => {
					self.changePeriod(e);
				});
				$(self.refs.contest).on('change', (e) => {
					self.changeContest(e);
				});

				$('select').formSelect();
			});
		});

    </script>
</result>
