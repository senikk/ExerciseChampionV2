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
		    <td>{ no }</td>
		    <td><a href="#/profile/{ userid }">{ name }</a></td>
		    <td class="right-align">{ minutes }</td>
		  </tr>
		</tbody>
	</table>

	<script>
//        	{contest: {id: "cj7xsdirerrmz0129ojwu7dtu"}},

		this.query(`{
			allUsers {
        name
        logs {
          minutes
        }
			}
    }`).then(results => {
			results.allUsers.map((user, i) => {
				user.no = i + 1;
				user.minutes = user.logs.map(log => log.minutes).reduce((prev, next) => prev + next);
				delete user.logs;
			});

			results.allUsers.sort((a,b) => b.minutes - a.minutes);

			console.log("RESULTS", results);
			this.results = results.allUsers;
			this.update();
		});

		this.on('mount', function() {
			$(document).ready(function() {
	    		$('select').material_select();
			});
		});
    </script>
</result>
