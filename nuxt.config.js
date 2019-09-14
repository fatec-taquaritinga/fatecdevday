const data = {
  lang: 'pt-br',
  name: 'Fatec Dev Day',
  title: 'Fatec Dev Day 2019',
  description: 'Fatec Dev Day: um dia dedicado a se atualizar sobre desenvolvimento Web e Mobile, linguagens de programação e sistemas em geral',
  domain: 'https://fatecdevday.com.br/',
  thumbnail: 'https://fatecdevday.com.br/thumbnail.jpg'
}

export default {
  head: {
    title: data.title,
    htmlAttrs: {
      lang: data.lang
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  meta: [
    { lang: data.lang },
    { charset: 'utf-8' },
    { name: data.title },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: data.description },
    { hid: 'thumbnail', name: 'thumbnail', content: data.domain + data.thumbnail }
  ],
  loading: { color: '#ad0f0a' },
  generate: {
    fallback: true
  },
  ignore: [
    '**/.netlify/**'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: data.title,
    short_name: data.name,
    lang: data.lang,
    start_url: '/',
    description: data.description,
    ogSiteName: data.name,
    ogTitle: data.title,
    ogDescription: data.description,
    ogHost: data.domain,
    ogImage: data.thumbnail,
    twitterCard: 'summary_large_image'
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
