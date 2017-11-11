import Vuex from 'vuex'

import speakers from './speakers'
import activities from './activities'
import partners from './partners'
import lunch from './lunch'

const store = () => new Vuex.Store({
  state: {
    name: {
      short: 'Fatec Dev Day',
      long: 'Fatec Dev Day 2017'
    },
    edition: {
      number: 2,
      year: 2017
    },
    href: 'https://www.eventbrite.com.br/e/fatec-dev-day-2017-tickets-37102441401',
    date: {
      weekday: 'sábado',
      full: '2017-11-11T07:30:00-02:00',
      short: '11/11/2017',
      time: '07:30',
      long: '11 de novembro de 2017',
      longWithoutYear: '11 de novembro'
    },
    places: {
      total: 140,
      studants: 90,
      professionals: 50,
      talks: 100,
      liveCodings: 40
    },
    team: [
      'Erick Petrucelli',
      'Fabio Takeda',
      'Felipe Espírito Santo',
      'Gustavo Del Vechio',
      'Jederson Zuchi',
      'Luciana Ferrarezi Muzatti',
      'Patricia Lourençano'
    ],
    topics: [
      'Desenvolvimento Web e Mobile',
      'Single Page Applications',
      'DevOps',
      'Inteligência Artificial',
      'Internet of Things'
    ],
    activities,
    speakers,
    partners,
    lunch
  },
  getters: {
    isToday (state, getters) {
      // const now = new Date()
      // const start = new Date(state.date.full)

      // return now.getFullYear() === start.getFullYear() &&
      //   now.getMonth() === start.getMonth() &&
      //   now.getDate() === start.getDate()

      return false
    },

    willHappen (state, getters) {
      // const now = new Date()
      // const start = new Date(state.date.full)

      // return now - start < 0 && !getters.isToday

      return false
    },

    hasPassed (state, getters) {
      // const now = new Date()
      // const start = new Date(state.date.full)

      // return now - start > 0 && !getters.isToday

      return true
    },

    soldOut (state, getters) {
      // const now = new Date()
      // const start = new Date(state.date.full)

      // return getters.isToday || now - start > 0 || now - start > -259200000

      return true
    }
  }
})

export default store
