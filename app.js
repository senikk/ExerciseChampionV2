var Helper = {
  api: axios.create({
    baseURL: 'http://localhost:1337'
  }),
  event: riot.observable(),
  hDate: function (date) {
    return moment(date).format('DD.MM.YYYY HH:mm');
  }
};

var LogStore = riot.observable();
LogStore.on("init", function () {
  console.log("MOUNTED LogStore");
});

riot.mixin('Helper', Helper);
riot.mount('*');
route('login');
