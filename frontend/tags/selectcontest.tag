<selectcontest>
	<div class="input-field">
		<select ref="contest">
			<option each={ contests } value={ id } selected="{ id == opts.chosen ? 'selected' : '' }">{ name }</option>
		</select>
		<label if={opts.label}>{ opts.label }</label>
	</div>

    <script>
		var self = this;
		
		changeContest(e) {
			if (this.opts.change) {
				this.opts.change(e.target.value);
			}
		}

    	loadContests() {
			var r = new this.R.ListContestRequest();
            r.setPublic(true);
            r.setJoined(true);
            r.setLimit(100);

			this.backend.listContest(r, this.auth.jwt(), (error, result) => {
				if (error) { M.toast({html: error.message}); return; }

				this.contests = result.toObject().contestsList;
				this.update();
				$('select').formSelect();
			});
		}

        this.on('mount', function() {
            this.loadContests();

            $(document).ready(function() {
				$(self.refs.contest).on('change', (e) => {
					self.changeContest(e);
				});
            });
        });
    </script>
</selectcontest>