<result>
	<actions title="result"></actions>

	<div class="row">
		<div class="input-field col s6">
		    <select>
		      <option value="1" data-icon="images/tenorhorn.jpg" class="circle">Master class</option>
		      <option value="2" data-icon="images/tenorhorn.jpg" class="circle">Cofee & tea band</option>
		      <option value="3" selected data-icon="images/tenorhorn.jpg" class="circle">School bands</option>
		      <option value="4">NM 2016 Heimdal</option>
		    </select>
		    <label>Contest</label>
		</div>

	  	<div class="input-field col s6">
		    <select ref="period">
		      <option value="year" selected={this.period == 'year'}>this year</option>
		      <option value="month" selected={this.period == 'month'}>this month</option>
		      <option value="week" selected={this.period == 'week'}>this week (53)</option>
		      <option value="lastweek" selected={this.period == 'lastweek'}>last week</option>
		      <option value="lastmonth" selected={this.period == 'lastmonth'}>last month</option>
		      <option value="lastyear" selected={this.period == 'lastyear'}>last year</option>
		    </select>
		    <label>Period of time</label>
	  	</div>
  	</div>
  </div>

  <div class="row">
	<table class="striped">
		<thead>
		  <tr>
		      <th data-field="id">#</th>
		      <th data-field="name">Name</th>
		      <th data-field="price" class="right-align">Minutes</th>
		  </tr>
		</thead>

		<tbody>
		  <tr each={ results }>
		    <td>{ no }</td>
		    <td><a href="#/profile/{ id }">{ name }</a></td>
		    <td class="right-align">{ minutes }</td>
		  </tr>
		</tbody>
	</table>

	<script>
//        	{contest: {id: "cj7xsdirerrmz0129ojwu7dtu"}},
		var period = 'week';
		console.log("TEST2");


		changePeriod(e) {
			console.log("PERIOD CHANGED", e.target.value);
			this.period = e.target.value;
			// set this.period
			this.loadResults();

			/*
			switch (this.period) {
				case 'week':
					//this.startdate = moment().firstDayInWeek
					//this.enddate = this.startdate + 7 days
					break;
				case 'month':
					//this.startdate = moment().firstDayInMonth
					//this.enddate = moment().lastDayInMonth
					break;
				case 'year':
					//this.startdate = moment().firstDayInYear
					//this.enddate = moment().lastDayInYear
					break;
				case 'lastweek':
					break;
				case 'lastmonth':
					break;
				case 'lastyear':
					break;
			}
			*/
		}

		sumAndSort(results) {
			results.allUsers.map(user => {
					user.minutes = user.logs.map(log => log.minutes).reduce((prev, next) => prev + next);
					delete user.logs;
			});

			results.allUsers.sort((a,b) => b.minutes - a.minutes)
			results.allUsers.map((user, i) => user.no = i + 1);

			return results.allUsers;
		}

//			{contest: { id: $contest}},

		loadResults() {
			this.query(`{
				allUsers {
					id
					name
					logs(filter: {AND: [
						{createdAt_gte: "2017-10-01"},
						{createdAt_lte: "2017-10-30"}
					]}) {
						minutes
					}
				}
			}`, {
				contest: '',
				fromdate: '2017-10-01',
				todate: '2017-10-30'
			}).then(results => {
				console.log(this.results);
				this.results = this.sumAndSort(results);
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
