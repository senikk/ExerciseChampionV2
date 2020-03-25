<timeline>
    <actions title="timeline"></actions>

    <ul class="collection">
        <li each={ rehearsals } class="collection-item">
            <span class="title">{ user.name } - { contest.name }</span>
            <div class="secondary-content">
                <span class="badge">{ minutes } minutes</span>
            </div>
            <div>
                <span>{ description }</span><br>
                <small>{ hDate(createdAt) }</small>
            </div>
        </li>
    </ul>

    <script>
        var r = new this.R.ListRehearsalRequest();
        r.setLimit(50);

        this.backend.listRehearsal(r, this.auth.jwt(), (error, result) => {
            if (error) { M.toast({html: error.message}); return; }

            this.rehearsals = result.toObject().rehearsalsList;
            this.update();
        });

        let channel = this.backend.rehearsalStream(r, this.auth.jwt());
        channel.on("data", (rehearsal) => {
            console.log("DATA FROM SERVER", rehearsal.toObject());
            this.rehearsals.push(rehearsal.toObject());
            this.update();
        });
        channel.on("error", (error) => {
            console.log(error);
        });

    </script>
</timeline>