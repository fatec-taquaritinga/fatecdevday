import talks from './talks'

const agenda = [
  {
    id: 1,
    icon: require('~/assets/icons/assignment.svg'),
    time: '08:00 - 08:50',
    duration: '50min',
    title: 'Credenciamento',
    description: 'O Credenciamento no evento é obrigatório e não ocorre além do horário estipulado.'
  },
  {
    id: 2,
    icon: require('~/assets/icons/mic.svg'),
    time: '08:50 - 09:00',
    duration: '10min',
    title: 'Abertura',
    description: 'Boas vindas da organização e agradecimentos aos patrocinadores.'
  },
  {
    id: 3,
    time: '09:00 - 10:00',
    duration: '60min',
    ...talks.find(talk => talk.speaker.name === 'Rodolpho Couto')
  },
  {
    id: 4,
    time: '10:10 - 11:10',
    duration: '60min',
    ...talks.find(talk => talk.speaker.name === 'Hugo Branquinho')
  },
  {
    id: 5,
    time: '11:20 - 12:20',
    duration: '60min',
    ...talks.find(talk => talk.speaker.name === 'Letícia Pedroso')
  },
  {
    id: 6,
    icon: require('~/assets/icons/lunch.svg'),
    time: '12:20 - 13:50',
    duration: '1h30min',
    title: 'Almoço',
    description: 'O intervalo para almoço é livre, cada participante pode escolher onde fazer sua refeição.'
  },
  {
    id: 7,
    time: '14:00 - 15:00',
    duration: '60min',
    ...talks.find(talk => talk.speaker.name === 'Bruno Schaefer')
  },
  {
    id: 8,
    time: '15:10 - 16:10',
    duration: '60min',
    ...talks.find(talk => talk.speaker.name === 'Leonardo Bittencourt')
  },
  {
    id: 9,
    icon: require('~/assets/icons/breakfast.svg'),
    time: '16:10 - 16:35',
    duration: '25min',
    title: 'Coffee Break',
    description: 'Um intervalo rápido para tomarmos um café no evento e voltarmos com tudo.'
  },
  {
    id: 10,
    time: '16:40 - 17:40',
    duration: '60min',
    ...talks.find(talk => talk.speaker.name === 'Cleber Campomori')
  },
  {
    id: 11,
    icon: require('~/assets/icons/leave.svg'),
    time: '17:40',
    title: 'Encerramento',
    description: `Agradecimentos aos participantes, patrocinadores e recados finais do evento.`
  }
]

export default agenda
