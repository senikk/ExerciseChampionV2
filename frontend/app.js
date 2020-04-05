import {RehearsalClient} from 'rehearsal';
import Translation from './translation';
import * as R from 'rehearsal/rehearsal_pb';

const GRPCBACKEND = process.env.GRPCSERVICE;

var StopWatch = function () {
  var self = riot.observable(this);

  let clock = null;
  let STOPPED = { icon: 'play_circle_outline', text: 'start', color: 'green' };
  let STARTED = { icon: 'pause_circle_outline', text: 'pause', color: 'orange'};

  self.seconds = localStorage.getItem('timer-seconds') || 0;
  self.status = localStorage.getItem('timer-status') || 'STOPPED';
  self.timer = self.status == 'STOPPED' ? STOPPED : STARTED;
  localStorage.setItem('timer-status', self.status);
  localStorage.setItem('timer-seconds', self.seconds);

  self.on('clear', () => {
    self.seconds = 0;
    self.status = 'STOPPED';
    self.timer = STOPPED;
    clearInterval(self.clock);
    localStorage.setItem('timer-status', 'STOPPED');
    localStorage.setItem('timer-seconds', 0);

    self.trigger('timer', self.timer);
  });

  self.on('toggle', () => {
    if (self.status == 'STOPPED') {
      this.clock = setInterval(() => {
        self.seconds++;
        localStorage.setItem('timer-seconds', self.seconds);
        self.trigger('seconds', self.seconds);
        if (self.seconds % 60 == 0) {
          self.trigger('minutes', self.seconds / 60);
        }
      }, 1000);

      self.status = 'STARTED';
    } else {
      clearInterval(this.clock);
      self.status = 'STOPPED';
      self.trigger('minutes', Math.round(self.seconds / 60));
    }

    localStorage.setItem('timer-status', self.status);
    self.timer = self.status == 'STOPPED' ? STOPPED : STARTED;
    self.trigger('timer', self.timer);
  });
}

var Auth = function () {
  var self = riot.observable(this);

  self.user = JSON.parse(localStorage.getItem('user'));

  self.jwt = () => {
    return self.user ? { jwt: self.user.jwt } : null;
  }

  self.userid = self.user ? self.user.userid : null;

  self.login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    self.user = user;

    self.trigger('login', user);
  }

  self.logout = () => {
    localStorage.removeItem('user');
    self.user = undefined;
    self.meta = undefined;
    self.trigger('logout');
  }

  self.getInvite = () => {
    return localStorage.getItem('invite');
  }

  self.setInvite = (hash) => {
    localStorage.setItem('invite', hash);
  }

  self.clearInvite = () => {
    localStorage.removeItem('invite');
  }
}

var Helper = {
  event: riot.observable(),
  hDate: function (date) {
    return moment(date).format('DD.MM.YYYY');
  },
  auth: new Auth(),
  stopwatch: new StopWatch(),
  backend: new RehearsalClient(GRPCBACKEND),
  R: R,
  i18n: new Translation(),
  env: process.env
};

console.log("CONNECTED TO " + GRPCBACKEND);

riot.mixin(Helper);
riot.mount('*');