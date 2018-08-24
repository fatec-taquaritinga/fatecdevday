import Vuex from 'vuex'
import talks from './talks'

const store = () => new Vuex.Store({
  state: {
    name: {
      short: 'Fatec Dev Day',
      long: 'Fatec Dev Day 2018'
    },
    edition: {
      number: 3,
      year: 2018
    },
    href: undefined,
    date: {
      weekday: 'sábado',
      full: '2018-11-10T07:30:00-02:00',
      short: '10/11/2018',
      time: '07:30',
      long: '10 de novembro de 2018',
      longWithoutYear: '10 de novembro'
    },
    places: {
      total: 110,
      students: 70,
      professionals: 40,
      talks: 110,
      liveCodings: 0
    },
    team: [
      'Erick Petrucelli',
      'Fabio Takeda',
      'Felipe Espírito Santo',
      'Gustavo Del Vechio',
      'Jederson Zuchi',
      'Luciana Ferrarezi Muzatti',
      'Patricia Primo Lourençano',
      'Oswaldo Lázaro Mendes'
    ],
    topics: [
      'Desenvolvimento Web e Mobile',
      'Single Page Applications',
      'Inteligência Artificial',
      'Internet of Things'
    ],
    talks
  },
  getters: {
    isToday (state, getters) {
      return false
    },

    willHappen (state, getters) {
      return true
    },

    hasPassed (state, getters) {
      return false
    },

    soldOut (state, getters) {
      return false
    }
  }
})

export default store
