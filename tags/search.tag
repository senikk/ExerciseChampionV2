<search>
	<actions title="search"></actions>

	<div class="row">
		<form>
        	<div class="input-field">
          		<input id="search" type="search" required>
          		<label for="search"><i class="material-icons">search</i></label>
          		<i class="material-icons">close</i>
        	</div>
    	 </form>
 	</div>

 	<div class="row">
	  <ul class="collection">
	    <li each={ contests } class="collection-item avatar">
		  <i class="material-icons circle green">add</i>
		  <span class="title">{ name }</span>
	    </li>
	  </ul>
 	</div>

 	<script>
 		//this.search.value = "2016";

		this.on("mount", function () {
			this.query(`{
allContests {
    id
    name
}}`).then(results => {
			console.log(results);
			this.contests = results.allContests;
			this.update();
			});
		});

 		//this.results = [
 		//	{ title: "Contest", description: "NM 2016 konkurranse" },
 		//	{ title: "Exerciser 2016", description: "Terje Pedersen" }
 		//];
 	</script>

</search>
