<timeline>
    <actions title="title.timeline"></actions>

    <ul class="collection">
        <li each={ rehearsals } class="collection-item">
            <span class="title">{ user.name } - { contest.name }</span>
            <div class="secondary-content">
                <span class="badge">{ i18n.t('minutes', {minutes: minutes}) }</span>
            </div>
            <div>
                <span>{ description }</span><br>
                <small>{ hDate(createdAt) }</small>
            </div>
        </li>
    </ul>

    <script>
        this.event.on('rehearsal:entry', (rehearsal) => {
            console.log("==== GOT NOTIFIED");
            this.rehearsals.splice(0, 1, rehearsal);
            this.update();
        });

        var r = new this.R.ListRehearsalRequest();
        r.setLimit(50);
        this.backend.listRehearsal(r, this.auth.jwt(), (error, result) => {
            if (error) { M.toast({html: error.message}); return; }

            this.rehearsals = result.toObject().rehearsalsList;
            this.update();
        });
    </script>
</timeline>