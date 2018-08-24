const talks = [
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
      Trabalhou anteriormente com diversos times internacionais em desenvolvimento de software e hardware e, por algum tempo, trabalhou na emergente China para a finalização de um grande projeto.
      Bacharel em Engenharia da Computação pela UNISEB COC. Amante de tecnologia, IoT, automação e robótica, possui conhecimentos técnicos em Android, Golang, Java (EE SE), C#, .NET, Arduíno,
      MySQL, Microsoft SQL Server, software design patterns e embedded devices (Tablets, LCD Whiteboards, etc).`,
    job: {
      title: 'Head of Engineering',
      company: 'Beblue',
      url: 'https://www.beblue.com.br/'
    },
    social: {
      linkedin: 'vilineto'
    }
  },

  {
    id: 3,
    avatar: 'jota.jpg',
    name: 'Jota Júnior',
    bio: `No alto de seus 25 anos de idade, é formado em Ciência da Computação pela Universidade Federal de Minas Gerais.
      Foi estudante visitante na Universidade de Columbia, em Nova York, e assistente de pesquisa no Instituto de Tecnologia de Massachusetts, o MIT.
      É atualmente Head of Data na ClickBus, gerenciando a equipe de Business Intelligence.
      Também atuou previamente como Head of Data Science na Beblue e como Cientista de Dados na RetSKU, nos EUA.
      Possui fortes conhecimentos técnicos em Engenharia de Software e Data Science, com experiência em recomendação de sistemas e algoritmos de aprendizagem de máquina.`,
    job: {
      title: 'Head of Data',
      company: 'ClickBus',
      url: 'https://www.clickbus.com.br/'
    },
    social: {
      linkedin: 'jotajunior'
    }
  }
]

export default talks.sort((a, b) => a.name.localeCompare(b.name))
