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

  false,

  // {
  //   id: 3,
  //   avatar: require('~/assets/faces/cleber.jpg'),
  //   name: 'Cleber Campomori',
  //   bio: 'Líder de conteúdo e inovação no TreinaWeb, autor de diversos cursos nas trilhas .NET, Xamarin, Java, Swift, TypeScript, etc. Docente de pós-graduação em Projeto e Desenvolvimento de Aplicações Web pela UNIFATEA. Graduado em Bancos de Dados pela Fatec e pós-graduado no curso onde é professor atualmente. Também é Microsoft Certified Solutions Developer (MCSD) nos exames 70-480, 70-486 e 70-487. Já atuou em projetos de grandes organizações como Claro, TIM, Vivo, Multiplus, Itaú, Johnson&Johnson e INPE.',
  //   job: {
  //     title: 'Líder de Conteúdo e Inovação',
  //     company: 'TreinaWeb',
  //     url: 'https://www.treinaweb.com.br/'
  //   }
  // },

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
    bio: 'Mais de 5 anos de experiência em desenvolvimento de _software_, adepto de tecnologias JavaScript como Node, Angular e React, especialista no desenvolvimento de SPA\'s (_Single Page Applications_) e arquiteto de soluções distribuídas utilizando Docker. Acredita que a Internet das Coisas é a propulsora para um mundo mais sustentável e flexível. Atualmente é o líder de engenharia de _software_ na Beblue, _startup_ no mercado de aquisição e fidelização de clientes para o varejo através do modelo de _cashback_ em tempo real.',
    job: {
      title: 'Head of Engineering',
      company: 'Beblue',
      url: 'https://www.beblue.com.br/'
    }
  },

  false
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

export default {
  talks,
  liveCodings
}
