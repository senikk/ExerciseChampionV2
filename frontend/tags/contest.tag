<contest>
  <actions title="contest"></actions>

  <addcontest></addcontest>

  <ul class="collection">
    <li class="collection-header"><h5>Available contests</h5></li>
    <li each={ contests } class="collection-item avatar">
	    <i class="material-icons circle { public ? 'green' : ''}">add</i>
      <span class="title">{ name }</span><br>
      <small>{ hDate(createdAt) }</small>
    </li>
  </ul>

  <script>
    var self = this;

    this.event.on("contest:added", function (item) {
      console.log("ENTRY", item);
      self.contests.unshift(item);
      self.update();
    });

  	this.on("mount", function () {
      var request = new this.R.ListContestRequest();
      request.setFilter("");

      console.log("CONTESTS", request);

      this.backend.listContest(request, null, (error, result) => {
        if (error) console.log(error);

        this.contests = result.toObject().contestsList;
        this.update();
        console.log("CONTESTS", this.contests);
      });
    });
  </script>

</contest>
