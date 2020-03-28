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
            r.setPublic(this.opts.public);
            r.setJoined(this.opts.joined);
            r.setLimit(20);

			console.log("== LoadContests", r);

			this.backend.listContest(r, this.auth.jwt(), (error, result) => {
				if (error) { M.toast({html: error.message}); return; }

				this.contests = result.toObject().contestsList;
				this.update();

//				let select = M.Modal.getInstance(this.refs.contest);
//				select.formSelect();
				$('select').formSelect();
			});
		}

        this.on('mount', function() {
        	M.FormSelect.init(this.refs.contest);

			this.loadContests();

            $(document).ready(function() {
				$(self.refs.contest).on('change', (e) => {
					self.changeContest(e);
				});
            });
        });
    </script>
</selectcontest>