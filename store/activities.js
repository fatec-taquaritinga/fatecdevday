import speakers from './speakers'

const talks = [
  {
    id: 1,
    time: null,
    title: 'O Maravilhoso Mundo do ReactJS',
    description: 'Você já conhece o React? Muita gente já pode ter ouvido falar nesta badalada biblioteca JavaScript para construção de interfaces, lançada originalmente pelo Facebook em 2015. Nesta palestra, os participantes podem conhecer mais sobre essa tecnologia e suas possibilidades, visualizar alguns exemplos e explorar o maravilhoso mundo do React.',
    speaker: speakers.talks.find(speaker => speaker.name === 'Guilherme Berghauser')
  },

  {
    id: 2,
    time: null,
    title: 'O Bê-á-bá do HTTP com Python',
    description: 'Python é uma linguagem de alto nível que tem crescido bastante em todos os principais _rankings_ de linguagens de programação. Mas Python não está aí apenas para a área de _data science_. Nesta palestra, os participantes podem conhecer um pouco sobre o protocolo HTTP, como ele funciona e como escrever um exemplo em Python utilizando o Simple HTTP Server.',
    speaker: speakers.talks.find(speaker => speaker.name === 'Sérgio Oliveira')
  },

  {
    id: 3,
    time: null,
    title: 'Inteligência Artificial e Reconhecimento Óptico com PHP',
    description: 'PHP é focado em _scripts_ do lado do servidor, como coletar dados de formulários e gerar páginas dinâmicas. Mas pode ir além: de _scripts_ de linha de comando a aplicações _desktop_ com GTK. E por que não resolver problemas avançados de Inteligência Artificial e Reconhecimento Óptico? Nesta palestra, os participantes podem descobrir uma nova gama de possibilidades com PHP.',
    speaker: speakers.talks.find(speaker => speaker.name === 'Rodrigo Cardoso')
  },

  false,

  false,

  false
]

const liveCodings = [
  {
    id: 1,
    time: null,
    icon: 'android',
    title: 'Desenvolvimento de um Aplicativo Android',
    description: 'Durante esta sessão de codificação ao vivo, os participantes podem acompanhar e interagir com os convidados enquanto um aplicativo completo para Android é criado, desde as decisões iniciais para a criação do projeto até o aplicativo pronto para executar.',
    speaker: 'Hugo Rossi, Rafael Peratello e Ulisses Curti'
  },

  {
    id: 2,
    time: null,
    title: 'Desenvolvimento de um Aplicativo iOS',
    description: 'Durante esta sessão de codificação ao vivo, os participantes podem acompanhar e interagir com o convidado enquanto um aplicativo completo para iOS é criado, desde as decisões iniciais para a criação do projeto até o aplicativo pronto para executar.',
    speaker: speakers.liveCodings.find(speaker => speaker.name === 'Denis Oliveira')
  }
]

const randomSort = () => Math.random() - 0.5

const activities = {
  talks: talks.sort(randomSort),
  liveCodings: liveCodings.sort(randomSort)
}

export default activities
