<app>
	<router>
		<route path="login"><login></login></route>
    <route path="log"><log></log></route>
		<route path="search"><search></search></route>
		<route path="contest"><contest></contest></route>
		<route path="result"><result></result></route>
		<route path="metronome"><metronome></metronome></route>
		<route path="profile"><profile></profile></route>
  </router>

	<script>
		this.mixin('Helper');

		this.event.on('login:after', function () {
			route('log','Excerise Champion', true);
		});

		this.on('mount', function() {
		  route.start(true);
		});
	</script>
</app>
