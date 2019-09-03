import speakers from './speakers'
import sponsors from './sponsors'
import agenda from './agenda'

export default {
  name: {
    short: 'Fatec Dev Day',
    long: 'Fatec Dev Day 2019'
  },
  edition: {
    number: 4,
    year: 2019
  },
  href: undefined,
  date: {
    weekday: 'sábado',
    full: '2019-11-09T08:00:00-03:00',
    short: '09/11/2019',
    time: '08:00',
    long: '9 de novembro de 2019',
    longWithoutYear: '9 de novembro'
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
  speakers,
  sponsors,
  agenda
}
