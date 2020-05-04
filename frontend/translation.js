'use strict';

let translations = {
    no: {
      title: {
        log: 'logg',
        timeline: 'tidslinje',
        contests: 'konkurranser',
        result: 'resultater',
        profile: 'profil',
        addcontest: 'ny konkurranse',
        addsession: 'ny økt'
      },
      modal: {
        yes: 'Ja',
        no: 'Nei',
        close: 'Lukk',
        logout: {
            question: 'Virkelig logge ut?'
        },
        addcontest: {
            question: 'Bli med på konkurranse "%{name}"',
            rules: 'Regler:'
        },
        invitecontest: {
            question: 'Inviter andre til "%{name}"',
            copybutton: 'Kopier',
            copied: 'Kopiert',
            description: 'Kopier invitasjonslenken og del den med dine venner'
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
        metronome: 'Metronom',
        contests: 'Konkurranser',
        addsession: 'Ny økt',
        addplan: 'Ny plan'
      },
      login: {
        login: 'Logg inn',
        signup: 'Registrering'
      },
      signup: {
        signup: 'Registrer',
        missingpassword: 'Mangler passord',
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
        public: 'Offentlig, konkurranse tilgjengelige for alle uten invitasjon',
        add: 'Legg til',
        added: 'Konkurranse lagt til'
      },
      result: {
        minutes: 'Minutter',
        name: 'Navn',
        position: 'Posisjon'
      },
      contests: {
        available: 'Tilgjengelig konkurranser',
        joined: 'Nå medlem av "%{name}"',
        participants: '%{participants} medlemmer',
      },
      period: {
        thisyear: 'nåværende år %{year}',
        thismonth: 'nåværende måned',
        thisweek: 'nåværende uke %{week}',
        lastyear: 'forrige år %{year}',
        lastmonth: 'forrige måned',
        lastweek: 'forrige uke %{week}'
      },
      invitation: {
        accepted: 'Invitiasjon godkjent'
      },
      plan: {
        plan: {
          tab: 'Plan',
          title: 'Rediger øvingsplan'
        },
        addsession: {
          tab: 'Ny økt',
          title: 'Lag ny økt'
        },
        searchsession: {
          tab: 'Søk økt',
          title: 'Søk eksisterende økt'
        }
      },
      addsession: {
        title: 'Ny økt',
        howmanyminutes: 'Hvor mange minutter?',
        description: 'Beskrivelse av økt',
        send: 'Legg til'
      },
      install: 'INSTALLER',
      clear: 'TØM',
      start: 'START',
      pause: 'PAUSE',
      minutes: '%{minutes} minutter',
      position: '%{position}. plass',
      contest: 'Konkurranse',
      thisweek: '(uke %{week})',
      email: 'e-post',
      password: 'passord',
      name: 'navn',
      by: 'av',
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
        addcontest: 'add contest',
        addsession: 'add session'
      },
      modal: {
        yes: 'Yes',
        no: 'Cancel',
        close: 'Close',
        logout: {
            question: 'Really log out'
        }, 
        addcontest: {
          question: 'Join contest "%{name}"',
          rules: 'Rules:'
        },
        invitecontest: {
          question: 'Invite others to "%{name}"',
          copybutton: 'Copy',
          copied: 'Copied',
          description: 'Copy the invitation link and give it to your friends'
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
        contests: 'Contests',
        addsession: 'New session',
        addplan: 'New plan'
      },
      login: {
        login: 'Log in',
        signup: 'Sign up'
      },
      signup: {
        signup: 'Sign up',
        retypenotmatch: 'Missing password',
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
        public: 'Public, contest available without invite for everyone ',
        add: 'Add',
        added: 'Contest added'
      },
      contests: {
        available: 'Available contest',
        joined: 'Joined contest "%{name}"',
        participants: '%{participants} members',
      },
      period: {
        thisyear: 'this year %{year}',
        thismonth: 'this month',
        thisweek: 'this week %{week}',
        lastyear: 'last year %{year}',
        lastmonth: 'last month',
        lastweek: 'last week %{week}'
      },
      invitation: {
        accepted: 'Invitation accepted'
      },
      plan: {
        plan: {
          tab: 'Plan',
          title: 'Edit rehearsal plan'
        },
        addsession: {
          tab: 'New session',
          title: 'Add new session'
        },
        searchsession: {
          tab: 'Search session',
          title: 'Search for existing session to add'
        }
      },
      addsession: {
        title: 'Add session',
        howmanyminutes: 'How many minutes?',
        description: 'Session description',
        send: 'Add'
      },
      install: 'INSTALL',
      clear: 'CLEAR',
      start: 'START',
      pause: 'PAUSE',
      minutes: '%{minutes} minutes',
      position: '%{position}th',
      contest: 'Contest',
      thisweek: '(week %{week})',
      email: 'email',
      password: 'password',
      name: 'name',
      by: 'by',
      'you are': `you are`,
      'no registration this week': 'no registration this week',
    }
}

function Translation () {
    var self = riot.observable(this);
    var polygot = new Polyglot();

    self.languages = [
        { text: 'ENGLISH', code: 'en' },
        { text: 'NORWEGIAN', code: 'no'}
    ];

    self.language = (language) => {
        polygot.extend(translations[language]);
        self.current = self.languages.find(l => l.code == language);
        localStorage.setItem('language', language);
        console.log("== CHANGED LANGUAGE", language);
    }
    
    self.t = (...args) => polygot.t(...args);
    
    self.language(localStorage.getItem('language') || 'en'); 
}

export default Translation
