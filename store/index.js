import Vuex from 'vuex'
import speakers from './speakers'

const start = new Date('2017-11-11T07:30:00-02:00')
const now = new Date()

const isToday =
  now.getFullYear() === start.getFullYear() &&
  now.getMonth() === start.getMonth() &&
  now.getDate() === start.getDate()

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
      time: '7h30',
      long: '11 de novembro de 2017',
      longWithoutYear: '11 de novembro'
    },
    timelapse: {
      isToday: isToday,
      willHappen: now - start < 0 && !isToday,
      hasPassed: now - start > 0 && !isToday
    },
    places: {
      total: 140,
      studants: 90,
      professionals: 50,
      talks: 100,
      liveCodings: 40,
      soldOut: isToday || now - start > 0 || now - start > -259200000
    },
    team: [
      'Jederson Zuchi',
      'Erick Petrucelli',
      'Fabio Takeda',
      'Patricia Lourençano',
      'Felipe Espírito Santo',
      'Gustavo Del Vechio'
    ],
    topics: [
      'Desenvolvimento Web e Mobile',
      'Single Page Applications',
      'DevOps',
      'Inteligência Artificial',
      'Internet of Things'
    ],
    talks: [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    liveCodings: [
      {},
      {}
    ],
    speakers
  }
})

export default store
