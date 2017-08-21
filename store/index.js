import Vuex from 'vuex'

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
    href: 'https://www.eventbrite.com.br/e/fatec-dev-day-2016-tickets-28533957836',
    date: {
      full: '2017-11-11T07:30:00-02:00',
      short: '11/11/2017',
      long: '11 de novembro de 2017'
    },
    timelapse: {
      isToday: isToday,
      willHappen: now - start < 0 && !isToday,
      hasPassed: now - start > 0 && !isToday
    },
    places: {
      total: 100,
      studants: 60,
      professionals: 40,
      soldOut: now - start < 0 || isToday || start - now < 432000000
    },
    team: [
      'Jederson Zuchi',
      'Erick Petrucelli',
      'Fabio Takeda',
      'Patricia Lourençano',
      'Felipe Espírito Santo',
      'Gustavo Del Vechio'
    ]
  }
})

export default store
