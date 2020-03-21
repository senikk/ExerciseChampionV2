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
      self.logs.unshift(item);
      self.update();
    });

    this.on("mount", function () {
      var request = new this.R.ListRehearsalRequest();
      request.setUserid(1);
      this.backend.listRehearsal(request, null, (error, result) => {
        this.logs = result.toObject().rehearsalsList;

        console.log("LOGS", this.logs);
        this.update();
      });
		});
  </script>
</log>
