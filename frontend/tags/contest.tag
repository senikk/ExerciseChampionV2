<contest>
  <actions title="contest"></actions>

  <button click={ add }>TEST</button

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
    add() {

    }

  	this.on("mount", function () {

    });

    var request = new this.requests.SearchContestRequest();
    request.setSearch("test");

    this.rehearsal.searchContest(request, null, (error, result) => {
      if (error) console.log(error);

      this.contests = result.toObject().contestsList;
      this.update();
      console.log("CONTESTS", this.contests);
    });
  </script>

</contest>
