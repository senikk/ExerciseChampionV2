import 'fetch-polyfill';
//import client from 'simple-graphql-client';
import {RehearsalClient} from 'rehearsal';
import * as requests from 'rehearsal/rehearsal_pb';

var Auth = function () {
  var self = riot.observable(this);

  self.user = localStorage.getItem('user');

  self.login = (user) => {
    localStorage.setItem('user', user);
    self.user = user;
    self.trigger('login', user);
  }

  self.logout = () => {
    localStorage.removeItem('user');
    self.user = undefined;
    self.trigger('logout');
  }
}

var Helper = {
  api: axios.create({
    baseURL: 'http://localhost:1337'
  }),
  event: riot.observable(),
  hDate: function (date) {
    return moment(date).format('DD.MM.YYYY HH:mm');
  },
  query: null,
  //query: client('https://api.graph.cool/simple/v1/cizonipn48m0w01718952ewrb'),
  auth: new Auth(),
  rehearsal: new RehearsalClient("http://localhost:8080"),
  requests: requests
};

riot.mixin(Helper);
riot.mount('*');