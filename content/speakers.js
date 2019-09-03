const speakers2018 = [
  {
    id: 1,
    avatar: require('~/assets/persons/2018/cleber.jpg'),
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
    avatar: require('~/assets/persons/2018/vilibaldo.jpg'),
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
    avatar: require('~/assets/persons/2018/jota.jpg'),
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
  },

  {
    id: 4,
    avatar: require('~/assets/persons/2018/danilo.jpg'),
    name: 'Danilo Deus Dará',
    bio: `Desenvolvedor há mais de 15 anos. Atua como tech lead em um dos times LuizaLabs, o laboratório de
      inovação do Magazine Luiza. Especialista em desenvolvimento backend em Java e seus frameworks em ambiente crítico,
      também conhecendo GoLang e Node para backend, além de React + Redux para frontend. Além disso, faz toda a
      gestão do seu time, garantindo as boas práticas e entregas contínuas em um ambiente gigante com desafios diários.
      Experiente em desenvolvimento Android nativo com Java e Kotlin, atualmente empolgado com Flutter e Dart.`,
    job: {
      title: 'Tech Lead',
      company: 'LuizaLabs',
      url: 'https://medium.com/luizalabs'
    },
    social: {
      linkedin: 'danilo-deus-dará'
    }
  },

  {
    id: 5,
    avatar: require('~/assets/persons/2018/igor.jpg'),
    name: 'Igor Halfeld',
    bio: `Já atuou como engenheiro de software e como full-stack developer.
      No entanto, sua criança interior ainda permanece no mundo front-end, entusiasmado com JavaScript e Vue.js,
      apaixonado por compartilhar conhecimento e contribuir para o software livre. Palestrante, gerente dos meetups
      Vue.js SP e JS SP, contribuidor ativo na comunidade Vue.js Brasil, host do podcast Pair Programming Project.
      Organizador da maior experiência Vue.js da america latina, o Vue.js Summit 2018.`,
    job: {
      title: 'Consultor && Organizador',
      company: 'Vue.js Summit',
      url: 'https://vuejssummit.com/'
    },
    social: {
      linkedin: 'igorhalfeld',
      github: 'igorhalfeld',
      twitter: 'igorhalfeld'
    }
  },

  {
    id: 6,
    avatar: require('~/assets/persons/2018/sergio.jpg'),
    name: 'Sérgio Gama',
    bio: `Engenheiro de automação com mais de 25 anos de experiência em TI como desenvolvedor,
      analista, consultor, arquiteto de soluções, gerente de projetos e de operações.
      Atuou por 15 anos no setor financeiro, especialista em EDM, BPM, aplicações distribuídas e backoffice bancário.
      Atuou por 8 anos em seguros e previdência privada, com soluções implantadas no Brasil, China e Índia.
      Gerenciou projetos ERP em diversos setores, incluindo química, eletrônica, saúde e finanças.
      Desde 2009 na IBM, atualmente é Developer Advocate Leader, especialista em desenvolvimento de software,
      inteligência artificial, Big Data e IoT.`,
    job: {
      title: 'Developer Advocate Leader',
      company: 'IBM',
      url: 'https://www.ibm.com/br-pt/'
    },
    social: {
      linkedin: 'sergiogama',
      github: 'sergiogama',
      twitter: 'sergiorggama'
    }
  },

  {
    id: 7,
    avatar: require('~/assets/persons/2018/raphael.jpg'),
    name: 'Raphael Mantilha',
    bio: `Especialista em automação de testes funcionais e de performance da Cast Group,
      trabalha há 16 anos na área. Engenheiro de Computação pela UFSCar, com MBAs em Gestão Empresarial
      e em Arquitetura de Soluções de Tecnologia. Possui as certificações CTAL do ISTQB e certificações
      técnicas em ferramentas de testes. Adora implementar testes para "quebrar" sistemas e recursos
      de infraestrutura de TI, evitando que os clientes arquem com os prejuízos oriundos da falta de
      qualidade em soluções de tecnologia. Conhece estratégias, ferramentas e tipos de testes
      funcionais e não funcionais que proporcionam ótimos resultados através da detecção precoce
      de falhas em sistemas.`,
    job: {
      title: 'Senior Test Analyst',
      company: 'Cast Group',
      url: 'https://www.castgroup.com.br/pt/'
    },
    social: {
      linkedin: 'raphael-mantilha'
    }
  },

  {
    id: 7,
    avatar: require('~/assets/persons/2018/samuel.jpg'),
    name: 'Samuel Martins',
    bio: `Começou sua carreira como desenvolvedor, tendo passado por tecnologias como C#, Delphi,
      Crystal Reports, Oracle e SQL Server. Há cerca de 6 anos, deixou o desenvolvimento de software
      para fazer gestão de projetos e gestão de pessoas. Em 2014, implantou Scrum junto com sua equipe
      aos projetos de desenvolvimento de software, obtendo bons resultados relacionados a prazo, custo e qualidade.
      Com isto, estendeu o Scrum para toda a empresa. Atualmente, atua como Agile Master em um dos projetos
      internacionais na S2IT. Natural de Ribeirão Preto, se formou em Sistemas de Informação pela UNIESP,
      possui MBA em Gestão de Projetos Inovadores pela USP e formação como Coach pelo MBC.`,
    job: {
      title: 'Agile Master',
      company: 'S2 IT',
      url: 'https://s2it.com.br/'
    },
    social: {
      linkedin: 'samuel-martins'
    }
  }
]

export default [
  {
    id: 1,
    avatar: require('~/assets/persons/leticia.png'),
    name: 'Letícia Pedroso',
    bio: 'Analista de Inteligência Artificial para Comunicação na Everis Brasil, Instrutora de Lógica de Programação e de Inteligência Artificial no Sesc São Paulo, coordenadora das comunidades Developers-BR e Nerdzão, entusiasta de Visão Computacional, apaixonada por animais, comunidades e compartilhamento de conhecimento.',
    job: {
      title: 'Artificial Intelligence Instructor',
      company: 'Sesc',
      url: 'http://www.sesc.com.br/'
    },
    social: {
      linkedin: 'leticiaspedroso',
      github: 'LeticiaSPedroso'
    }
  },

  {
    id: 2,
    avatar: require('~/assets/persons/rodolpho.png'),
    name: 'Rodolpho Couto',
    bio: 'Atua como Desenvolvedor de Software no iFood, ajudando a construir e manter os microsserviços que sustentam a plataforma de pagamentos. Possui 10 anos de experiência com Engenharia de Software e trabalha com Kotlin há cerca de 2 anos.',
    job: {
      title: 'Software Engineer',
      company: 'iFood',
      url: 'https://www.ifood.com.br/'
    },
    social: {
      linkedin: 'rodolphocouto',
      github: 'rodolphocouto'
    }
  },

  {
    id: 3,
    avatar: require('~/assets/persons/empty-avatar.png'),
    name: 'Em Breve!'
  },
]

// export default speakers.sort((a, b) => a.name.localeCompare(b.name))
