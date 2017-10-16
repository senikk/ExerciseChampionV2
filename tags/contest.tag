<contest>
  <actions title="contest"></actions>

  <button onclick={ add } class="btn waves-effect waves-light green">
    <i class="material-icons right">add</i> NEW
  </button>

  <button onclick={ add } class="btn waves-effect waves-light">
    <i class="material-icons right">list</i> LIST
  </button>

  <addcontest></addcontest>

  <!--
  <ul class="collection">
    <li class="collection-header"><h5>Available contests</h5></li>
    <li each={ contests } class="collection-item avatar">
	  <i class="material-icons circle { public ? 'green' : ''}">add</i>
      <span class="title">{ name }</span><br>
      <small>{ hDate(createdAt) }</small>
    </li>
  </ul>
  -->

  <script>
    add() {
    }

  	this.on("mount", function () {

    });

  </script>

</contest>
