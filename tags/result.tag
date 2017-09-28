<result>
	<actions title="result"></actions>
 
	<div class="row">
		<div class="input-field col s6">
		    <select>
		      <option value="1" data-icon="images/tenorhorn.jpg" class="circle">Master class</option>
		      <option value="2" data-icon="images/tenorhorn.jpg" class="circle">Cofee & tea band</option>
		      <option value="3" selected data-icon="images/tenorhorn.jpg" class="circle">School bands</option>
		      <option value="4">NM 2016 Heimdal</option>
		    </select>
		    <label>Contest</label>
		</div>
	  
	  	<div class="input-field col s6">
		    <select>
		      <option value="1">this year</option>
		      <option value="2">this month</option>
		      <option value="3" selected>this week (53)</option>
		      <option value="4">last week</option>
		      <option value="5">last month</option>
		      <option value="6">last year</option>
		    </select>
		    <label>Period of time</label>
	  	</div>
  	</div>
  </div>

  <div class="row">
	<table class="striped">
		<thead>
		  <tr>
		      <th data-field="id">#</th>
		      <th data-field="name">Name</th>
		      <th data-field="price" class="right-align">Minutes</th>
		  </tr>
		</thead>

		<tbody>
		  <tr each={ results }>
		    <td>{ placement }</td>
		    <td><a href="#/profile/{ userid }">{ name }</a></td>
		    <td class="right-align">{ minutes }</td>
		  </tr>
		</tbody>
	</table>	

	<script>
	var self = this;
    this.mixin('Helper');

    this.results = [
    	{ placement: 1, userid: 1, name: "Hege Alette Eilertsen", minutes: 4200 },
    	{ placement: 2, userid: 2, name: "Terje Pedersen", minutes: 2000 },
    	{ placement: 3, userid: 3,  name: "Svanlaug Mæland", minutes: 1000 },
    	{ placement: 4, userid: 40, name: "Ole Kristian Bonden", minutes: 40 },    	
    ];

	this.on('mount', function() {
		$(document).ready(function() {
    		$('select').material_select();
		});
	});
    </script>
</result>