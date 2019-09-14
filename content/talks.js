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
    title: 'Utilizando Kotlin no desenvolimento back-end',
    description: `Kotlin é uma das linguagens de programação oficiais para o desenvolvimento Android, mas também é uma linguagem multiplataforma, assim vem ganhando cada vez mais espaço em diversos cenários, além do próprio desenvolvimento mobile. Nesta apresentação, os participantes poderão acompanhar as principais características que tornam esta linguagem poderosa e divertida, bem como exemplos práticos da sua aplicabilidade no back-end do iFood.`,
    speaker: speakers.find(speaker => speaker.name === 'Rodolpho Couto')
  },

  {
    id: 3,
    title: 'Construção de um algoritmo de inteligência artificial em Python',
    description: 'Embora a área de inteligência artificial exista desde a segunda guerra mundial, recentemente tem se tornado muito mais popular, principalmente graças ao desenvolvimento de máquinas potentes o bastante para comportar seus algoritmos. Nesta palestra, os participantes poderão compreender o que é Inteligência Artificial e quais suas principais áreas, enquanto acompanham a construção de um algoritmo de classificação com machine learning, utilizando-se a linguagem de programação Python.',
    speaker: speakers.find(speaker => speaker.name === 'Letícia Pedroso')
  }
]
