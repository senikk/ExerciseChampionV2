<log>
  <actions title="log"></actions>
  <addexercise></addexercise>

  <ul class="collection">
    <li each={ exercises } class="collection-item avatar">
      <img src="images/tenorhorn.jpg" alt="" class="circle">
      <span class="title">{ createdBy.username } - { mins } minutes</span>
      <p>{ description }</p>
      <small>{ hDate(createdAt) }</small>
    </li>
  </ul>

  <script>
    var self = this;
    this.mixin('Helper');

    // listen for self added item
    this.parent.on("exercise:added", function (item) {
      self.exercises.unshift(item);
      self.update();
    });

    this.on("before-mount", function () {
      // get current items
      /*
      this.api.get('/exercise?sort=createdAt desc')
        .then(function (response) {
          self.exercises = response.data;
          self.update();
        });
      */
    });
  </script>
</log>
