module.exports = {
  head: {
    title: 'Fatec Dev Day 2018',
    htmlAttrs: {
      lang: 'pt-br'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  meta: {
    lang: 'pt-br',
    name: 'Fatec Dev Day 2018',
    description: 'Fatec Dev Day: um dia dedicado a desenvolvimento Web, aplicativos e sistemas em geral'
  },
  loading: { color: '#ad0f0a' },
  router: {
    extendRoutes (routes, resolve) {
      routes.pop()

      routes.push({
        name: 'netlify',
        path: '/.netlify'
      })

      routes.push({
        name: 'index',
        path: '*',
        component: '~/pages/index.vue'
      })
    }
  },
  generate: {
    fallback: true
  },
  modules: [
    '@nuxtjs/axios',
    [ '@nuxtjs/dotenv', { only: ['LAMBDA_ENDPOINT'] } ],
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'Fatec Dev Day 2018',
    short_name: 'Fatec Dev Day',
    lang: 'pt-br',
    start_url: '/',
    description: 'Fatec Dev Day: um dia dedicado a desenvolvimento Web, aplicativos e sistemas em geral'
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
