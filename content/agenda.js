import talks from './talks'

const agenda = [
  {
    id: 1,
    duration: '50min',
    ...talks.find(talk => talk.speaker.name === 'Bruno Schaefer')
  },

  {
    id: 2,
    duration: '50min',
    ...talks.find(talk => talk.speaker.name === 'Letícia Pedroso')
  },

  {
    id: 3,
    duration: '50min',
    ...talks.find(talk => talk.speaker.name === 'Rodolpho Couto')
  },

  {
    id: 4,
    duration: '50min',
    ...talks.find(talk => talk.speaker.name === 'Hugo Branquinho')
  },

  {
    id: 5,
    duration: '50min',
    ...talks.find(talk => talk.speaker.name === 'Cleber Campomori')
  },

  {
    id: 6,
    duration: '50min',
    ...talks.find(talk => talk.speaker.name === 'Leonardo Bittencourt')
  }
]

export default agenda.sort((a, b) => a.speaker.name.localeCompare(b.speaker.name))
