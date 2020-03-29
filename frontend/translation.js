'use strict';

let translations = {
    no: {
      title: {
        log: 'logg',
        timeline: 'tidslinje',
        contests: 'konkurranser',
        result: 'resultater',
        profile: 'profil',
        addcontest: 'ny konkurranse'
      },
      modal: {
        yes: 'Ja',
        no: 'Nei',
        logout: {
            question: 'Virkelig logge ut?'
        },
        addcontest: {
            question: 'Bli med på konkurranse "%{name}"',
            rules: 'Regler:'
        }
      },
      menu: {
        timeline: 'Tidslinje',
        contests: 'Konkurannser',
        results: 'Resultater',
        more: 'Mer...'
      },
      dropdown: {
        profile: 'Profil',
        addcontest: 'Ny konkurranse',
        logout: 'Logg ut',
        metronome: 'Metronom'
      },
      login: {
        login: 'Logg inn',
        signup: 'Registrering'
      },
      signup: {
        signup: 'Registrer',
        retypenotmatch: 'Gjentatt passord stemmer ikke overens',
        retype: 'gjenta passord',
        password: 'passord (minimum 6 tegn)'
      },
      addrehearsal: {
        logit: 'Logg nå',
        exercisesdidyoudo: 'Hvilke øvelser gjorde du (påkrevd)',
        howmanyminutes: 'Hvor mange minutter? (påkrevd)',
      },
      addcontest: {
        name: 'Konkurranse navn',
        rules: 'Konkurranse regler',
        public: 'Offentlie konkurranser er tilgjengelige for alle',
        add: 'Legg til'
      },
      result: {
        minutes: 'Minutter',
        name: 'Navn',
        position: 'Posisjon'
      },
      contests: {
        available: 'Tilgjengelig konkurranser'
      },
      clear: 'TØM',
      start: 'START',
      pause: 'PAUSE',
      minutes: '%{minutes} minutter',
      position: '%{position}. plass',
      contest: 'Konkurranse',
      thisweek: 'denne uka',
      email: 'e-post',
      password: 'passord',
      name: 'navn',
      'you are': `du er på`,
      'no registration this week': 'ingen registreringer denne uka',
    },
    en: {
      title: {
        log: 'log',
        timeline: 'timeline',
        contests: 'contests',
        result: 'results',
        profile: 'profile',
        addcontest: 'add contest'
      },
      modal: {
        yes: 'Yes',
        no: 'Cancel',
        logout: {
            question: 'Really log out'
        }, 
        addcontest: {
            question: 'Join contest "%{name}"',
            rules: 'Rules:'
        }
      },
      menu: {
        timeline: 'Timeline',
        contests: 'Contests',
        results: 'Results',
        more: 'More...'          
      },
      dropdown: {
        profile: 'Profile',
        addcontest: 'New contest',
        logout: 'Log out',
        metronome: 'Metronome',
      },
      login: {
        login: 'Log in',
        signup: 'Sign up'
      },
      signup: {
        signup: 'Sign up',
        retypenotmatch: 'Repeated password does not match',
        retype: 'retype password',
        passord: 'password (minimum 6 character)'
      },
      addrehearsal: {
        logit: 'Log it',
        exercisesdidyoudo: 'What exercises did you do (required)',
        howmanyminutes: 'How many minutes? (required)',
      },
      result: {
        minutes: 'Minutes',
        name: 'Name',
        position: 'Position'
      },
      addcontest: {
        name: 'Contest name',
        rules: 'Contest rules',
        public: 'Public contest availabe for everyone',
        add: 'Add'
      },
      contests: {
        available: 'Available contest'
      },
      clear: 'CLEAR',
      start: 'START',
      pause: 'PAUSE',
      minutes: '%{minutes} minute |||| %{minutes} minutes',
      position: '%{position}th',
      contest: 'Contest',
      thisweek: 'this week',
      email: 'email',
      password: 'password',
      name: 'name',
      'you are': `you are`,
      'no registration this week': 'no registration this week',
    }
}

function Translation () {
    var self = riot.observable(this);
    var polygot = new Polyglot();

    self.language = (language) => {
        polygot.extend(translations[language]);
    }
    
    self.t = (...args) => polygot.t(...args);
    
    self.language('en'); 
}

export default Translation
