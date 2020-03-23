<log>
  <actions title="log"></actions>
  <addrehearsal></addrehearsal>

  <ul class="collection">
    <li each={ logs } class="collection-item">
      <span class="title">{ user.name } - { minutes } minutes</span>
      <p>{ description }</p>
      <small>{ hDate(createdAt) }</small>
    </li>
  </ul>

  <script>
    var self = this;

    // listen for self added item
    this.event.on("rehearsal:added", function (item) {
      console.log("ADDED", item);
      if (!self.logs) self.logs = [];
      self.logs.unshift(item);
      self.update();
    });

    this.on("mount", function () {
      var request = new this.R.ListRehearsalRequest();
      request.setUserid(this.auth.user.id);
      this.backend.listRehearsal(request, null, (error, result) => {
        if (error) { M.toast({html: error.message}); return; }

        this.logs = result.toObject().rehearsalsList;
        this.update();
      });
		});
  </script>
</log>
