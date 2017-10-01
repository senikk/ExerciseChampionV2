<log>
  <actions title="log"></actions>
  <addexercise></addexercise>

  <ul class="collection">
    <li each={ logs } class="collection-item avatar">
      <img src="images/tenorhorn.jpg" alt="" class="circle">
      <span class="title">{ user.name } - { minutes } minutes</span>
      <p>{ description }</p>
      <small>{ hDate(createdAt) }</small>
    </li>
  </ul>

  <script>
    var self = this;

    // listen for self added item
    this.event.on("exercise:added", function (item) {
      self.logs.unshift(item);
      self.update();
    });

    this.on("mount", function () {
			this.query(`{
        allLogs(orderBy: createdAt_DESC) {
          id
          minutes
          description
          user {
            name
          }
        }}`)
      .then(results => {
			  this.logs = results.allLogs;
			  this.update();
			});
		});
  </script>
</log>
