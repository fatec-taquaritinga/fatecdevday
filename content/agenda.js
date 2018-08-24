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
]
