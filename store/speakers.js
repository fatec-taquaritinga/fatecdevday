const talks = [
  {
    id: 1,
    avatar: require('~/assets/faces/sergio.jpg'),
    name: 'Sérgio Oliveira',
    bio: 'Guru da comunidade Python brasileira, desenvolvedor _full-stack_, empreendedor, viciado em automação, com 11 anos de experiência em programação Web e gestão de equipes em TI. Já trabalhou para a IBM, para o Programa Interlegis do Senado Federal e no projeto do Novo Portal do _Software_ Público. É membro da comunidade Python Brasil e co-fundador da Associação Python Brasil. Atualmente é CTO da Crave Food Services, _startup_ americana criadora do WhatsGood, _app_ que ajuda a conectar restaurantes a pequenos produtores agrícolas.',
    job: {
      title: 'Chief Technology Officer',
      company: 'Crave Food Services',
      url: 'https://sourcewhatsgood.com/'
    }
  },

  {
    id: 2,
    avatar: require('~/assets/faces/torto.jpg'),
    name: 'Guilherme Berghauser',
    bio: 'Mais conhecido como **Torto**, é desenvolvedor _full-stack_ Javascript. Criou um <a href="http://torto.github.io/curriculo/" target="_blank">currículo animado</a> de grande sucesso. Apaixonado por _software_ livre e, como todo desenvolvedor, rei da preguiça! Atualmente, atua como _frontend developer_ na Sprinklr, reconhecida pela Forrester como a mais poderosa plataforma de gestão de experiência social do mercado, com um _software_ totalmente integrado que empodera mais de quatro bilhões de conexões sociais em 77 países. Com sede em Nova York, conta com mil funcionários em todo o mundo.',
    job: {
      title: 'Front-End Developer',
      company: 'Sprinklr',
      url: 'https://www.sprinklr.com/pt-br/new-home-pt-br/'
    }
  },

  {
    id: 3,
    avatar: require('~/assets/faces/damiani.jpg'),
    name: 'José Damiani',
    bio: 'Ex-aluno da Fatec Taquaritinga, acumula mais de 10 anos de experiência em desenvolvimento de aplicações Web e para dispositivos móveis. Já utilizou diversas linguagens e plataformas, como Java, C#, Node, PHP, ASP, Go, Ruby e Phyton. Atuou como analista e desenvolvedor de _software_ em empresas nacionais e internacionais. Também já atuou como docente no ensino superior, na UNIARA. Atualmente, atua como líder técnico na S2IT, em projetos de grandes clientes como UOL, PagSeguro e Walmart.',
    job: {
      title: 'Tech Lead',
      company: 'S2IT',
      url: 'http://s2it.com.br/'
    }
  },

  {
    id: 4,
    avatar: require('~/assets/faces/pokemao.jpg'),
    name: 'Rodrigo Cardoso',
    bio: 'Mais conhecido como **Pokemão**, é Community Manager do iMasters. Possui MBA em Engenharia de Softwares Orientado para Serviços pela Metrocamp, de Campinas/SP. Bacharel em Matemática Aplicada e Computacional pela Universidade Federal Rural do Rio de Janeiro. Programador PHP desde 2002, é evangelista do _meetup_ PHPSP. Além de se dedicar à produção de artigos e vídeos para ensino do PHP, desenvolve sistemas diversos, desde batalhas Pokémon em mIRC a robôs automatizadores de tarefas.',
    job: {
      title: 'Community Manager',
      company: 'iMasters',
      url: 'https://imasters.com.br/'
    }
  },

  {
    id: 5,
    avatar: require('~/assets/faces/wanderley.jpg'),
    name: 'Wanderley Panosso',
    bio: 'Ex-aluno da Fatec Taquaritinga, lidera engenharia de _software_ e infraestrutura na Beblue, _startup_ no mercado de aquisição e fidelização de clientes para o varejo através do modelo de _cashback_ em tempo real. Adepto de tecnologias JavaScript como Node, Angular e React, arquiteto de soluções distribuídas utilizando Docker e Swarm. Acredita que a Internet das Coisas é a propulsora para um mundo mais sustentável e flexível, e que o empreendedorismo é o veículo capaz de acelerar as mudanças necessárias de forma inimaginável.',
    job: {
      title: 'Head of Engineering',
      company: 'Beblue',
      url: 'https://www.beblue.com.br/'
    }
  },

  {
    id: 6,
    avatar: require('~/assets/faces/henrique.jpg'),
    name: 'Henrique Zago',
    bio: 'Engenheiro de _software_ e desenvolvedor _frontend_, trazido diretamente da Rússia Brasileira (Paraná), formado em Sistemas de Informação. Já atuou desenvolvendo aplicações _Web_ e para dispositivos móveis, para pequenas e grandes empresas, como Itaipu Binacional Hidrelétrica, Marinha do Brasil e Força Aérea Brasileira. Com mais de 5 anos de experiência profissional no ecossistema JavaScript, já se aventurou com diversos _frameworks_ e atualmente se encontra num relacionamento duradouro com React e Python.',
    job: {
      title: 'Frontend Developer',
      company: 'Crave Food Services',
      url: 'https://sourcewhatsgood.com/'
    }
  },

  {
    id: 7,
    avatar: require('~/assets/faces/silvio.jpg'),
    name: 'Silvio Pereira',
    bio: 'Entusiasta de tecnologia que gosta de aprender sobre todas as áreas, desde a codificação até _"rocket science"_. Tem experiência _full-stack_ utilizando linguagens e _frameworks_ como Java, PL/SQL, Android nativo, JavaScript, Groovy, Ionic, dentre outros, em projetos para empresas como USP, Vale e alguns dos maiores _players_ do mercado de logística brasileiro. Atualmente _mobile developer_ na Crave Food Services, está focado em contribuir cada vez mais com a comunidade de desenvolvimento de _softwares_.',
    job: {
      title: 'Android Developer',
      company: 'Crave Food Services',
      url: 'https://sourcewhatsgood.com/'
    }
  }
]

const liveCodings = [
  {
    id: 1,
    avatar: require('~/assets/faces/denis.jpg'),
    name: 'Denis Oliveira',
    bio: 'Desenvolvedor de _software_ sênior na Beblue, criando aplicações nas mais diversas linguagens de programação, dentre elas Swift, Objective-C, Kotlin, Java, C#, Node, Python... Palestrou por diversas vezes no CocoaHeads e também em outros eventos, como ANSP e FliSOL. Com mais de 8 anos de experiência no mercado, já conheceu e atuou com diversos paradigmas de programação.',
    job: {
      title: 'Senior Developer',
      company: 'Beblue',
      url: 'https://www.beblue.com.br/'
    }
  },

  {
    id: 2,
    avatar: require('~/assets/faces/hugo.jpg'),
    name: 'Hugo Rossi',
    bio: 'Desenvolvedor de _software_ na Beblue, é graduado em Sistemas de Informação e apreciador de café. Atua com tecnologia há cerca de 8 anos. Sua experiência profissional passa por tecnologias como Java, C#, Kotlin, Node, dentre outras. Atualmente, está focado como desenvolvedor Android, primariamente usando tecnologias nativas.',
    job: {
      title: 'Developer',
      company: 'Beblue',
      url: 'https://www.beblue.com.br/'
    }
  },

  {
    id: 3,
    avatar: require('~/assets/faces/rafael.jpg'),
    name: 'Rafael Peratello',
    bio: 'Desenvolvedor de _software_ na Beblue, possui pós-graduação em Programação para Dispositivos Móveis e mais de 5 anos de experiência _mobile_. Trabalhou em diversas áreas, como arquitetura, pagamentos e integração de dispositivos voltados para IoT (_Internet of Things_). Atualmente, está focado como desenvolvedor Android, primariamente usando tecnologias nativas.',
    job: {
      title: 'Developer',
      company: 'Beblue',
      url: 'https://www.beblue.com.br/'
    }
  },

  {
    id: 4,
    avatar: require('~/assets/faces/ulisses.jpg'),
    name: 'Ulisses Curti',
    bio: 'Desenvolvedor de _software_ na Beblue, formado em Ciência da Computação pelo Centro Universitário UniSEB, trabalha há mais de 3 anos com foco em desenvolvimento Android nativo, mas também já criou seus _apps_ híbridos com Cordova. Atualmente tem se aventurado com o Kotlin, mas não dispensa um bom Java.',
    job: {
      title: 'Developer',
      company: 'Beblue',
      url: 'https://www.beblue.com.br/'
    }
  }
]

const alphabeticalSort = (a, b) => a.name && a.name.localeCompare(b.name)

export default {
  talks: talks.sort(alphabeticalSort),
  liveCodings: liveCodings.sort(alphabeticalSort)
}
