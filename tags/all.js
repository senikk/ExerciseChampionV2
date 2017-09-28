riot.tag2('actions', '<div class="row"> <div class="col s4"> <blockquote> Exercise {opts.title}<br>2th 3000mins </blockquote> </div> <div class="col s8 right-align" style="padding-top: 10px;"> <a class="btn-floating btn-large grey" href="#/search"><i class="material-icons">search</i></a> <a class="btn-floating btn-large green" href="#/contest"><i class="material-icons">games</i></a> <a class="btn-floating btn-large green" href="#/result"><i class="material-icons">insert_chart</i></a> <a class="btn-floating btn-large green" href="#/metronome"><i class="material-icons">av_timer</i></a> </div> </div> <div class="fixed-action-btn" style="bottom: 10px; right: 10px;"> <a class="btn-floating btn-large orange "> <i class="material-icons">pause_circle_outline</i> </a> <a class="btn-floating btn-large" href="#/log"> <i class="large material-icons">mode_edit</i> </a> </div>', '', '', function(opts) {
});
riot.tag2('addcontest', '<div class="row"> <form class="col s12"> <div class="row"> <div class="input-field col s12"> <input id="name" type="text"> <label for="name">Contest name</label> </div> </div> <div class="row"> <div class="input-field col s12"> <textarea id="rules" class="materialize-textarea"></textarea> <label for="rules">Contest rules</label> </div> </div> <div class="row switch"> <label>Private<input type="checkbox" name="public"><span class="lever"></span>Public</label> </div> <button onclick="{add}" class="btn waves-effect waves-light"> <i class="material-icons right">send</i> Add </button> </form> </div>', '', '', function(opts) {
  	var self = this;
  	this.mixin("Helper");

  	this.add = function(e) {
  		console.log(e);
  		console.log("public: " + this.public.checked);
  	}.bind(this)

});
riot.tag2('addexercise', '<form> <div class="input-field"> <textarea name="description" class="materialize-textarea" placeholder="What exercises did you do (required)"></textarea> </div> <input name="mins" placeholder="How many minutes? (required)"> <button onclick="{toggletimer}" class="btn waves-effect waves-light {timer.color}"> <i class="material-icons right">{timer.icon}</i> {timer.text} </button> <button onclick="{add}" class="btn waves-effect waves-light"> <i class="material-icons right">send</i> Log it </button> </form>', '', '', function(opts) {
  	var self = this;
    this.timer = { icon: "play_circle_outline", text: "START" };
  	this.mixin('Helper');

    this.toggletimer = function(e) {
      this.timer = { icon: "pause_circle_outline", text: "PAUSE", color: "orange" };
      this.mins.value = "1";
    }.bind(this)

    this.add = function(e) {
   		self.api.post('/exercise', {
        	description: this.description.value,
        	mins: this.mins.value
   		}).then(function (response) {
      		self.parent.trigger("exercise:added", response.data);
	    });

    	this.description.value = '';
      this.mins.value = '';
    }.bind(this)
});
riot.tag2('app', '<router> <route path="login"><login></login></route> <route path="log"><log></log></route> <route path="search"><search></search></route> <route path="contest"><contest></contest></route> <route path="result"><result></result></route> <route path="metronome"><metronome></metronome></route> <route path="profile"><profile></profile></route> </router>', '', '', function(opts) {
		this.mixin('Helper');

		this.event.on('login:after', function () {
			route('log','Excerise Champion', true);
		});

		this.on('mount', function() {
		  route.start(true);
		});
});

riot.tag2('contest', '<actions title="contest"></actions> <button onclick="{add}" class="btn waves-effect waves-light green"> <i class="material-icons right">add</i> NEW </button> <button onclick="{add}" class="btn waves-effect waves-light"> <i class="material-icons right">list</i> LIST </button> <addcontest></addcontest>', '', '', function(opts) {
  	var self = this;
  	this.mixin("Helper");

  	this.on("mount", function () {

    });

});

riot.tag2('log', '<actions title="log"></actions> <addexercise></addexercise> <ul class="collection"> <li each="{exercises}" class="collection-item avatar"> <img src="images/tenorhorn.jpg" alt="" class="circle"> <span class="title">{createdBy.username} - {mins} minutes</span> <p>{description}</p> <small>{hDate(createdAt)}</small> </li> </ul>', '', '', function(opts) {
    var self = this;
    this.mixin('Helper');

    this.parent.on("exercise:added", function (item) {
      self.exercises.unshift(item);
      self.update();
    });

    this.on("before-mount", function () {

    });
});

riot.tag2('login', '<form> <input name="username" placeholder="username"> <input name="password" placeholder="password"> <button click="{login}" class="btn waves-effect waves-light"> <i class="material-icons right">send</i> Log in </button> </form>', '', '', function(opts) {
  	var self = this;
    this.mixin('Helper');

    this.login = function(e) {
      console.log("login");

      this.event.trigger("login:after");

    }.bind(this)
});

riot.tag2('metronome', '<actions title="metronome"></actions> <div class="row"> <label>tempo</label><br> <button class="col s2 btn waves-effect waves-light">-20</button> <button class="col s2 btn waves-effect waves-light">-1</button> <button class="col s3 btn waves-effect waves-light orange">120 bpm <i class="material-icons right">pause_circle_outline</i> </button> <button class="col s2 btn waves-effect waves-light">+1</button> <button class="col s2 btn waves-effect waves-light">+20</button> </div> <div class="row"> <label>time signature</label><br> <button class="col s2 btn waves-effect waves-light">2/4</button> <button class="col s2 btn waves-effect waves-light orange">3/4</button> <button class="col s2 btn waves-effect waves-light">4/4</button> <button class="col s2 btn waves-effect waves-light">5/4</button> <button class="col s2 btn waves-effect waves-light">6/4</button> <button class="col s2 btn waves-effect waves-light">3/8</button> <button class="col s2 btn waves-effect waves-light">6/8</button> <button class="col s2 btn waves-effect waves-light">9/8</button> <button class="col s2 btn waves-effect waves-light">12/8</button> </div> <div class="row"> <label>bars</label><br> <button class="col s2 btn waves-effect waves-light">+1</button> <button class="col s2 btn waves-effect waves-light">+5</button> <button class="col s2 btn waves-effect waves-light">+10</button> </div> <div class="row"> <label>programming</label><br> <ul class="collection"> <li each="{line}" class="collection-item"> {length} {length > 1 ? \'bars\' : \'bar\'} <a href="#!"><span class="badge">{beat}</span></a> </li> </ul> </div> <div class="row"> <label>stored</label> <ul class="collection"> <li><a href="" class="collection-item active">Hinemoa A1 (21 bars)</a></li> </ul> </div>', 'metronome button,[data-is="metronome"] button{ margin: 2px; }', '', function(opts) {
  	var self = this;
  	this.mixin("Helper");

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
});
riot.tag2('profile', '<actions title="profile"></actions> <ul class="collection with-header"> <li class="collection-header"> <h4>Hege Alette Eilertsen</h4> <i>Joined 6.6.2015</i> </li> <li class="collection-item">Year 2016 <span class="right">3000 minutes</span></li> <li class="collection-item">Week 2 <span class="right">1000 minutes</span></li> <li class="collection-item">Week 1 <span class="right">2000 minutes</span></li> </ul> <ul class="collection with-header"> <li class="collection-header green darken-1">Contests</li> <li class="collection-item"> <div class="chip">Master class</div> <div class="chip">Heimdal NM 2016</div> </li> </ul> <ul class="collection with-header"> <li class="collection-header green darken-1">Instruments</li> <li class="collection-item"> <div class="chip">Bb Cornet</div> </li> </ul>', '', '', function(opts) {
 		var self = this;

});
riot.tag2('result', '<actions title="result"></actions> <div class="row"> <div class="input-field col s6"> <select> <option value="1" data-icon="images/tenorhorn.jpg" class="circle">Master class</option> <option value="2" data-icon="images/tenorhorn.jpg" class="circle">Cofee & tea band</option> <option value="3" selected data-icon="images/tenorhorn.jpg" class="circle">School bands</option> <option value="4">NM 2016 Heimdal</option> </select> <label>Contest</label> </div> <div class="input-field col s6"> <select> <option value="1">this year</option> <option value="2">this month</option> <option value="3" selected>this week (53)</option> <option value="4">last week</option> <option value="5">last month</option> <option value="6">last year</option> </select> <label>Period of time</label> </div> </div> </div> <div class="row"> <table class="striped"> <thead> <tr> <th data-field="id">#</th> <th data-field="name">Name</th> <th data-field="price" class="right-align">Minutes</th> </tr> </thead> <tbody> <tr each="{results}"> <td>{placement}</td> <td><a href="#/profile/{userid}">{name}</a></td> <td class="right-align">{minutes}</td> </tr> </tbody> </table>', '', '', function(opts) {
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
});
riot.tag2('search', '<actions title="search"></actions> <div class="row"> <form> <div class="input-field"> <input id="search" type="search" required> <label for="search"><i class="material-icons">search</i></label> <i class="material-icons">close</i> </div> </form> </div> <div class="row"> <ul class="collection"> <li each="{results}" class="collection-item avatar"> <i class="material-icons circle green">add</i> <span class="title">{title}</span> <p>{description}</p> </li> </ul> </div>', '', '', function(opts) {
 		var self = this;

 		this.results = [
 			{ title: "Contest", description: "NM 2016 konkurranse" },
 			{ title: "Exerciser 2016", description: "Terje Pedersen" }
 		];
});
