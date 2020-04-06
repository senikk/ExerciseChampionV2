<selectperiod>
    <div class="input-field">
        <select ref="period">
            <option value={this.R.ListResultRequest.Period.THISYEAR} selected={opts.chosen == this.R.ListResultRequest.Period.THISYEAR}>{ i18n.t('period.thisyear', {year: moment().year()}) }</option>
            <option value={this.R.ListResultRequest.Period.THISMONTH} selected={opts.chosen == this.R.ListResultRequest.Period.THISMONTH}>{ i18n.t('period.thismonth', {month: moment().month()+1}) }</option>
            <option value={this.R.ListResultRequest.Period.THISWEEK} selected={opts.chosen == this.R.ListResultRequest.Period.THISWEEK}>{ i18n.t('period.thisweek', {week: moment().week()}) }</option>
            <option value={this.R.ListResultRequest.Period.LASTWEEK} selected={opts.chosen == this.R.ListResultRequest.Period.LASTWEEK}>{ i18n.t('period.lastweek', {week: moment().add(-1,'week').week()}) }</option>
            <option value={this.R.ListResultRequest.Period.LASTMONTH} selected={opts.chosen == this.R.ListResultRequest.Period.LASTMONTH}>{ i18n.t('period.lastmonth', {month: moment().month()}) }</option>
            <option value={this.R.ListResultRequest.Period.LASTYEAR} selected={opts.chosen == this.R.ListResultRequest.Period.LASTYEAR}>{ i18n.t('period.lastyear', {year: moment().add(-1, 'year').year()}) }</option>
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