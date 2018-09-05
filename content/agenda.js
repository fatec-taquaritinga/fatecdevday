import speakers from './speakers'

export default [
  {
    id: 1,
    title: 'Aplicações Web multiplataforma com .NET? Conheça o ASP.NET Core!',
    description: `Você sabia que o tempo onde .NET só podia ser executado em ambientes Windows?
      Sabia que hoje é perfeitamente possível rodar uma aplicação ASP.NET no Linux, no Mac e no Windows?
      Sabia também que nem somos mais obrigados a utilizar o IIS como servidor Web para aplicações ASP.NET Core?
      Seja bem-vindo à nova plataforma de desenvolvimento multiplataforma da Microsoft: o .NET Core.
      Nesta palestra, vamos ver algumas inovações da plataforma, principalmente no que diz respeito ao paradigma funcional.`,
    speaker: speakers.find(speaker => speaker.name === 'Cleber Campomori')
  },

  {
    id: 2,
    title: 'Aplicação REST utilizando Gin e GORM em Go',
    description: `Go é uma linguagem de programação de código aberto desenvolvida pelo Google,
      projetada para ajudar a construir sistemas simples e reusáveis com mecanismos de concorrência.
      Nesta palestra, será apresentado um pouco sobre a linguagem Go, suas vantagens e desvantagens.
      Em seguida, uma breve apresentação de como se criar uma aplicação REST utilizando o Web framework Gin e framework de mapeamento objeto-relacional GORM.`,
    speaker: speakers.find(speaker => speaker.name === 'Vilibaldo Neto')
  },

  {
    id: 3,
    title: 'Machine Learning para recomendação: como a Netflix sabe o que eu gosto?',
    description: `Dentro do universo de Machine Learning, a sub-área de Sistemas de Recomendação permeia a vida das pessoas de forma constante,
      através dos serviços que usamos. Mas como, exatamente, o Spotify ou a Netflix sabem o que eu gostaria de consumir?
      Quais ferramentas e algoritmos fazem parte das recomendações que fazem?
      Esta palestra vem elucidar os principais e mais recentes conceitos e ferramentas que guiam esta área.`,
    speaker: speakers.find(speaker => speaker.name === 'Jota Júnior')
  },

  {
    id: 4,
    title: 'Flutter: o futuro do desenvolvimento mobile',
    description: `O Flutter é um SDK de desenvolvimento de aplicativos móveis de código aberto, criado pelo Google.
      Com o Flutter podemos construir aplicativos móveis nativos com apenas um código, o que significa que,
      ao invés de ter que aprender Java ou Kotlin para Android e Objective-C ou Switf para iOS,
      você pode desenvolver apenas utilizando a linguagem Dart. Nesta palestra,
      você poderá ter uma visão geral do Flutter, o nativo de verdade!`,
    speaker: speakers.find(speaker => speaker.name === 'Danilo Deus Dará')
  },

  {
    id: 5,
    title: 'Como desenvolver um ChatBot de alta qualidade',
    description: `A área de inteligência artificial aplicada à automação da comunicação,
      com os chamados ChatBots, está fervilhando e aparecendo com frequencia na mídia de tecnologia.
      Temos observado o cenário da migração digital e toda a transformação que ela está gerando,
      especialmente na experiência do usuário. Por isso, esta palestra mostrará como desenvolver um ChatBot com
      qualidade, utilizando de forma integrada os serviços IBM Cloud e Watson.`,
    speaker: speakers.find(speaker => speaker.name === 'Sérgio Gama')
  },

  {
    id: 6,
    title: 'NativeScript-Vue: apps nativas em JavaScript com Vue.js',
    description: `Vue.js é uma biblioteca JavaScript para a construção de interfaces,
      que ficou bem famosa pela sua simplicidade e robustez no desenvolvimento Web.
      Mas muitos não sabem que podemos aproveitar a developer experience oferecida pelo Vue.js
      também durante o desenvolvimento mobile. Nesta palestra, vamos ver como usar de
      tal simplicidade na hora de fazer um app mobile nativo!`,
    speaker: speakers.find(speaker => speaker.name === 'Igor Halfeld')
  }
]
