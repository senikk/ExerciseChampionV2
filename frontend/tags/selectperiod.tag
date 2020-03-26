<selectperiod>
    <div class="input-field">
        <select ref="period">
            <option value={this.R.ListResultRequest.Period.THISYEAR} selected={opts.chosen == this.R.ListResultRequest.Period.THISYEAR}>this year</option>
            <option value={this.R.ListResultRequest.Period.THISMONTH} selected={opts.chosen == this.R.ListResultRequest.Period.THISMONTH}>this month</option>
            <option value={this.R.ListResultRequest.Period.THISWEEK} selected={opts.chosen == this.R.ListResultRequest.Period.THISWEEK}>this week</option>
            <option value={this.R.ListResultRequest.Period.LASTWEEK} selected={opts.chosen == this.R.ListResultRequest.Period.LASTWEEK}>previous week</option>
            <option value={this.R.ListResultRequest.Period.LASTMONTH} selected={opts.chosen == this.R.ListResultRequest.Period.LASTMONTH}>last month</option>
            <option value={this.R.ListResultRequest.Period.LASTYEAR} selected={opts.chosen == this.R.ListResultRequest.Period.LASTYEAR}>last year</option>
        </select>
        <label if={opts.label}>{ opts.label }</label>
    </div>

    <script>
        var self = this;

		changePeriod(e) {
			if (this.opts.change) {
				this.opts.change(e.target.value);
			}
		}

        this.on('mount', function() {
            M.FormSelect.init(this.refs.period);

            $(document).ready(function() {
				$(self.refs.period).on('change', (e) => {
					self.changePeriod(e);
				});
            });
        });
    </script>
</selectperiod>