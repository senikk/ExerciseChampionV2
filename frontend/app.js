import 'fetch-polyfill';
import {RehearsalClient} from 'rehearsal';
import * as R from 'rehearsal/rehearsal_pb';

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
  event: riot.observable(),
  hDate: function (date) {
    return moment(date).format('DD.MM.YYYY HH:mm');
  },
  auth: new Auth(),
  backend: new RehearsalClient("http://localhost:8080"),
  R: R
};

riot.mixin(Helper);
riot.mount('*');