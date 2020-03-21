<result>
	<actions title="result"></actions>

	<div class="row">
		<div class="input-field col s6">
		    <select>
		      <option value="1" data-icon="images/tenorhorn.jpg" class="circle">Master class</option>
		      <option value="2" data-icon="images/tenorhorn.jpg" class="circle">Cofee & tea band</option>
		      <option value="3" selected data-icon="images/tenorhorn.jpg" class="circle">School bands</option>
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

		loadResults() {
			var request = new this.R.ListResultRequest();
			request.setPeriod(this.period);

			this.backend.listResult(request, null, (error, result) => {
				console.log("RES", result.toObject().resultsList);
				this.results = result.toObject().resultsList;
				this.update();
			});
		}

		this.on('mount', function() {
			var self = this;
			this.contest = 'cj7xsdirerrmz0129ojwu7dtu';
			this.loadResults();

			$(document).ready(function() {
				$(self.refs.period).on('change', (e) => {
					self.changePeriod(e);
				});

				$('select').material_select();
			});
		});

    </script>
</result>
