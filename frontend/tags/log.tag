<log>
  <actions title="title.log"></actions>
  <addrehearsal></addrehearsal>

  <ul class="collection">
    <li each={ logs } class="collection-item">
      <span class="title">{ user.name } - { i18n.t('minutes', {minutes}) }</span>
      <p>{ description }</p>
      <small>{ hDate(createdAt) }</small>
    </li>
  </ul>

  <script>
    var self = this;

    // listen for self added item
    this.event.on("rehearsal:added", function (item) {
      if (!self.logs) self.logs = [];
      self.logs.unshift(item);
      self.update();
    });

    this.on("mount", function () {
      var r = new self.R.ListRehearsalRequest();
      r.setUserid(self.auth.user.id);
      
      self.backend.listRehearsal(r, this.auth.jwt(), (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        self.logs = result.toObject().rehearsalsList;
        self.update();
      });
		});
  </script>
</log>
