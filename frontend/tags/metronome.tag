<metronome>
  <actions title="title.metronome"></actions>

  <div class="row">
  		<label>tempo</label><br>
	  	<button class="col s2 btn waves-effect waves-light">-20</button>
	  	<button class="col s2 btn waves-effect waves-light">-1</button>
	  	<button class="col s3 btn waves-effect waves-light orange">120 bpm <i class="material-icons right">pause_circle_outline</i>
 		</button>
	  	<button class="col s2 btn waves-effect waves-light">+1</button>
	  	<button class="col s2 btn waves-effect waves-light">+20</button>
  </div>
  <div class="row">
 		<label>time signature</label><br>
	  	<button class="col s2 btn waves-effect waves-light">2/4</button>
	  	<button class="col s2 btn waves-effect waves-light orange">3/4</button>
	  	<button class="col s2 btn waves-effect waves-light">4/4</button>
	  	<button class="col s2 btn waves-effect waves-light">5/4</button>
	  	<button class="col s2 btn waves-effect waves-light">6/4</button>
	 	<button class="col s2 btn waves-effect waves-light">3/8</button>
	 	<button class="col s2 btn waves-effect waves-light">6/8</button>
	 	<button class="col s2 btn waves-effect waves-light">9/8</button>
	  	<button class="col s2 btn waves-effect waves-light">12/8</button>
  </div>
  <div class="row">
  		<label>bars</label><br>
	  	<button class="col s2 btn waves-effect waves-light">+1</button>
	  	<button class="col s2 btn waves-effect waves-light">+5</button>
	  	<button class="col s2 btn waves-effect waves-light">+10</button>
  </div>
  <div class="row">
  	  <label>programming</label><br>
	  <ul class="collection">
	 	<li each={ line } class="collection-item">
	 		{ length } { length > 1 ? 'bars' : 'bar' }
	 		<a href="#!"><span class="badge">{ beat }</span></a>
	 	</li>
	  </ul>
  </div>
  <div class="row">
  	<label>stored</label>
  	<ul class="collection">
  		<li><a href="" class="collection-item active">Hinemoa A1 (21 bars)</a></li>
  	</ul>
  </div>

  <style>
  	button { margin: 2px; }
  </style>

  <script>
  	this.line = [
  		{ length: 10, beat: "3/4" },
  		{ length: 1, beat: "3/8" },
  		{ length: 10, beat: "4/4" }
  	];

  	this.on('mount', function() {
		$(document).ready(function() {
    		$('select').material_select();
		});
	});
  </script>

</metronome>
