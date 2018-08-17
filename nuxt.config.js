module.exports = {
  head: {
    title: 'Fatec Dev Day 2018',
    htmlAttrs: {
      lang: 'pt-br'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Raleway:300,500,700,900' }
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
        name: 'index',
        path: '*',
        component: '~/pages/index.vue'
      })
    }
  },
  modules: [
    '@nuxtjs/pwa',
  ],
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
