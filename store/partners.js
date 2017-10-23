const sponsors = {
  gold: [
    {
      id: 1,
      logo: require('~/assets/partners/f5.png'),
      name: 'F5 Sistemas de Gestão',
      url: 'http://www.f5sistemasdegestao.com.br/'
    }
  ],

  silver: [
    {
      id: 2,
      logo: require('~/assets/partners/programmers.png'),
      name: 'Programmer\'s',
      url: 'http://www.programmers.com.br/'
    }
  ]
}

const supporters = [
  {
    id: 1,
    logo: require('~/assets/partners/casa-do-codigo.png'),
    name: 'Casa do Código',
    url: 'https://www.casadocodigo.com.br/'
  },

  {
    id: 2,
    logo: require('~/assets/partners/mozilla.png'),
    name: 'Mozilla',
    url: 'https://www.mozilla.org/pt-BR/'
  }
]

const partners = {
  sponsors,
  supporters
}

export default partners
