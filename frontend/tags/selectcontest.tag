<selectcontest>
	<div class="row">
		<div class="input-field col s6">
		    <select ref="contest">
		      <option each={ contests } value={ id }>{ name }</option>
		    </select>
		    <label>Contest</label>
		</div>
    </div>

    <script>
		var self = this;

		changeContest(e) {
			console.log("CHANGE CONTEST INSIDE", e.target.value);
			this.contest = e.target.value;
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
            this.loadContests();

            $(document).ready(function() {
				$(self.refs.contest).on('change', (e) => {
					self.changeContest(e);
				});
            });
        });
    </script>
</selectcontest>