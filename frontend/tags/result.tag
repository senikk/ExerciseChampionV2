<result>
	<actions title="result"></actions>

	<div class="row">
		<div class="col s6">
			<selectcontest ref="contest" chosen={ contestId } change={ changeContestId }></selectcontest>
		</div>

	  	<div class="col s6">
			<selectperiod ref="period" chosen={ period } change={ changePeriod }></selectperiod>
	  	</div>
  	</div>
  </div>

  <div class="row">
	<table class="striped">
		<thead>
		  <tr>
		      <th data-field="position">Pos</th>
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
		this.period = localStorage.getItem("result-period") || this.R.ListResultRequest.Period.THISYEAR;
		this.contestId = localStorage.getItem("result-contestid") || 1;

		changePeriod(period) {
			this.period = period;
			localStorage.setItem("result-period", this.period);
			this.loadResults();
		}

		changeContestId(contestId) {
			this.contestId = contestId;
			localStorage.setItem("result-contestid", contestId);
			this.loadResults();
		}

		loadResults() {
			var r = new this.R.ListResultRequest();
			r.setContestid(this.contestId);
			r.setPeriod(this.period);

			this.backend.listResult(r, this.auth.jwt(), (error, result) => {
				if (error) { M.toast({html: error.message}); return; }

				this.results = result.toObject().resultsList;
				this.update();
			});
		}

		this.on('mount', function() {
			var self = this;

			this.loadResults();

			$(document).ready(function() {
				$(self.refs.period).on('change', (e) => {
					self.changePeriod(e);
				});

				$('select').formSelect();
			});
		});

    </script>
</result>
