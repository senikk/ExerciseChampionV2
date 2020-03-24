<timeline>
    <actions title="timeline"></actions>

    <ul class="collection">
        <li each={ rehearsals } class="collection-item">
            <span class="title">{ user.name } - { contest.name }</span>
            <p>
                <span>{ description }</span><br>
                <small>{ hDate(createdAt) }</small>
            </p>
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
    </script>
</timeline>