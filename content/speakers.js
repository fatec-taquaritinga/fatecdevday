const speakers = [
  {
    id: 1,
    avatar: [
      { src: require('~/assets/persons/leticia.jpg'), type: 'image/jpeg' },
      { src: require('~/assets/persons/leticia.webp'), type: 'image/webp' }
    ],
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
    avatar: [
      { src: require('~/assets/persons/rodolpho.jpg'), type: 'image/jpeg' },
      { src: require('~/assets/persons/rodolpho.webp'), type: 'image/webp' }
    ],
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
    avatar: [
      { src: require('~/assets/persons/bruno.jpg'), type: 'image/jpeg' },
      { src: require('~/assets/persons/bruno.webp'), type: 'image/webp' }
    ],
    name: 'Bruno Schaefer',
    bio: 'Engenheiro de Software no Nubank e membro da equipe de plataforma, onde ajuda a projetar ferramentas de automação e infraestrutura para dar suporte ao Nubank em um cenário de hiper-crescimento. Também é graduado em Engenharia de Computação pela USP e possui certificações em Arquitetura de Software .NET e em Scrum (SFPC).',
    job: {
      title: 'Software Engineer',
      company: 'Nubank',
      url: 'https://nubank.com.br/'
    },
    social: {
      linkedin: 'bruno-schaefer'
    }
  },

  {
    id: 4,
    avatar: [
      { src: require('~/assets/persons/hugo.jpg'), type: 'image/jpeg' },
      { src: require('~/assets/persons/hugo.webp'), type: 'image/webp' }
    ],
    name: 'Hugo Branquinho',
    bio: 'Analista de Sistemas, pós-graduado em Gestão de Tecnologia pela FGV e com certificações de Engenheiro da Red Hat (RHCE). Com mais de 16 anos de experiência em Linux, atuou como DevOps/SRE e Dev em empresas como: UOL, Bematech, Luiza Labs (Magazine Luiza), Beblue e ContaAzul. Atualmente é SRE Sênior no iFood.',
    job: {
      title: 'Sênior SRE',
      company: 'iFood',
      url: 'https://www.ifood.com.br/'
    },
    social: {
      linkedin: 'hugobcar',
      github: 'hugobcar'
    }
  },

  {
    id: 5,
    avatar: [
      { src: require('~/assets/persons/cleber.jpg'), type: 'image/jpeg' },
      { src: require('~/assets/persons/cleber.webp'), type: 'image/webp' }
    ],
    name: 'Cleber Campomori',
    bio: 'Engenheiro de software sênior na MovilePay, a divisão de pagamentos eletrônicos B2C do grupo Movile. Também atua como líder de conteúdo e inovação na TreinaWeb, autor de cursos nas trilhas de .NET, Xamarin, Java, Swift, TypeScript, etc. Tecnólogo em Bancos de Dados pela Fatec Guaratinguetá e pós-graduado em Projeto e Desenvolvimento de Aplicações Web pela UNIFATEA. Também é profissional MCSD (Microsoft Certified Solutions Developer) na trilha Web e MS Specialist em HTML5, CSS3 e JavaScript. Já atuou em projetos de grandes empresas e organizações como Claro, TIM, Vivo, Multiplus, Instituto Nacional de Pesquisas Espaciais (INPE) e Johnson & Johnson, além de ter ministrado treinamentos técnicos para instituições como DCTA, INPE e Ministério Público do Espírito Santo.',
    job: {
      title: 'Engenheiro de Software',
      company: 'MovilePay',
      url: 'https://movile.com/'
    },
    social: {
      linkedin: 'clebercampomori',
      github: 'clebercampomori',
      twitter: 'clebercampomori'
    }
  }
]

export default [...speakers.sort((a, b) => a.name.localeCompare(b.name)), {
  id: 0,
  avatar: [
    { src: require('~/assets/persons/empty-avatar.png'), type: 'image/png' },
    { src: require('~/assets/persons/empty-avatar.webp'), type: 'image/webp' }
  ],
  name: 'Em Breve!'
}]
