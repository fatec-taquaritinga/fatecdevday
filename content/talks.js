import speakers from './speakers'

export default [
  {
    id: 1,
    title: 'Introdução à programação funcional com Clojure',
    description: 'Clojure é uma linguagem dinâmica de uso geral, combinando a acessibilidade e o desenvolvimento interativo de uma linguagem interpretada com uma infraestrutura eficiente e robusta de uma linguagem compilada, focada em programação multithread, seguindo como paradigma predominantemente a programação funcional. Nesta apresentação, os participantes poderão conhecer os conceitos básicos de Clojure e de programação funcional, enquanto descobrem como ambos são excelentes opções para qualquer tipo de projeto.',
    speaker: speakers.find(speaker => speaker.name === 'Bruno Schaefer')
  },

  {
    id: 2,
    title: 'Utilizando Kotlin no desenvolvimento back-end',
    description: `Kotlin é uma das linguagens de programação oficiais para o desenvolvimento Android, mas também é uma linguagem multiplataforma, assim vem ganhando cada vez mais espaço em diversos cenários, além do próprio desenvolvimento mobile. Nesta apresentação, os participantes poderão acompanhar as principais características que tornam esta linguagem poderosa e divertida, bem como exemplos práticos da sua aplicabilidade no back-end do iFood.`,
    speaker: speakers.find(speaker => speaker.name === 'Rodolpho Couto')
  },

  {
    id: 3,
    title: 'Construção de um algoritmo de inteligência artificial em Python',
    description: 'Embora a área de inteligência artificial exista desde a segunda guerra mundial, recentemente tem se tornado muito mais popular, principalmente graças ao desenvolvimento de máquinas potentes o bastante para comportar seus algoritmos. Nesta palestra, os participantes poderão compreender o que é Inteligência Artificial e quais suas principais áreas, enquanto acompanham a construção de um algoritmo de classificação com machine learning, utilizando-se a linguagem de programação Python.',
    speaker: speakers.find(speaker => speaker.name === 'Letícia Pedroso')
  },

  {
    id: 4,
    title: 'Compartilhando experiências sobre DevOps nas empresas',
    description: 'DevOps é um termo derivado da junção das palavras "desenvolvimento" e "operações", designando um conjunto de práticas de engenharia de software para melhor integração das equipes de desenvolvedores com as equipes de operação (infraestrutura e administração de sistemas). Nesta palestra, os participantes poderão acompanhar experiências vivenciadas pelo palestrante ao longo de suas passagens por diversas empresas de renome, atuando com administração de sistemas e DevOps.',
    speaker: speakers.find(speaker => speaker.name === 'Hugo Branquinho')
  },

  {
    id: 5,
    title: 'Nest.js: um framework Node.js poderoso e progressivo',
    description: 'O Nest.js é um poderoso framework open source baseado no Node.js, Express e TypeScript. Fortemente inspirado no Angular 2+, o Nest.js se propõe a ser uma alternativa para criação de aplicações progressivas e extremamente escaláveis de maneira muito simples, oferecendo inclusive integrações eficientes com outros frameworks e bibliotecas tradicionais no mundo Node.js, como Mongoose, Sequelize, TypeORM, Swagger e Prisma. Nesta palestra, os participantes poderão ver seu poder e facilidade ao acompanhar a criação de um projeto Node.js utilizando o Nest.js.',
    speaker: speakers.find(speaker => speaker.name === 'Cleber Campomori')
  }
]
