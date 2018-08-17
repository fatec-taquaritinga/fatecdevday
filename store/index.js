import Vuex from 'vuex'

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
      'Patricia Primo Lourençano'
    ],
    topics: [
      'Desenvolvimento Web e Mobile',
      'Single Page Applications',
      'Inteligência Artificial',
      'Internet of Things'
    ],
    talks: [
      {
        id: 1,
        avatar: 'cleber.jpg',
        name: 'Cleber Campomori',
        bio: `Líder de conteúdo e inovação no TreinaWeb, autor de cursos nas trilhas de .NET, Xamarin, Java, Swift, TypeScript, etc.
          Professor do curso de pós-graduação em Projeto e Desenvolvimento de Aplicações Web pela UNIFATEA.
          Tecnólogo em Bancos de Dados pela Fatec Guaratinguetá e pós-graduado em Projeto e Desenvolvimento de Aplicações Web pela UNIFATEA.
          Também é profissional MCSD (Microsoft Certified Solutions Developer) na trilha Web, provas 70-480, 70-486 e 70-487.
          Já atuou em grandes projetos com organizações como Claro, TIM, Vivo, Multiplus, Itaú e Johnson&Johnson e Instituto Nacional de Pesquisas Espaciais (INPE).`,
        job: {
          title: 'Lider de Conteúdo e Inovação',
          company: 'TreinaWeb',
          url: 'https://www.treinaweb.com.br/'
        },
        social: {
          linkedin: 'clebercampomori',
          github: 'clebercampomori',
          twitter: 'clebercampomori'
        }
      },

      {
        id: 2,
        avatar: 'vilibaldo.jpg',
        name: 'Vilibaldo Neto',
        bio: `Head of Technology na Beblue, atuando em duas grandes vertentes da empresa, Market Place (MP) e Financial Services (FS).
          Trabalhou anteriormente com diversos times internacionais em desenvolvimento de _software_ e _hardware_ e, por algum tempo, trabalhou na emergente China para a finalização de um grande projeto.
          Bacharel em Engenharia da Computação pela UNISEB COC. Amante de tecnologia, IoT, automação e robótica, possui conhecimentos técnicos em Android, Golang, Java (EE SE), C#, .NET, Arduíno,
          MySQL, Microsoft SQL Server, _software design patterns_ e _embedded devices_ (Tablets, LCD Whiteboards, etc).`,
        job: {
          title: 'Head of Engineering',
          company: 'Beblue',
          url: 'https://www.beblue.com.br/'
        },
        social: {
          linkedin: 'vilineto'
        }
      }
    ]
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
