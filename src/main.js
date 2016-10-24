import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import './helpers/prototypes'
import './helpers/directives'

import LandingPageNavigation from './helpers/plugins/LandingPageNavigation'
import ScrollTo from './helpers/plugins/ScrollTo'

Vue.use(LandingPageNavigation)
Vue.use(ScrollTo)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/*',
      component: resolve => require(['./components/Home'], resolve)
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to && to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.afterEach(route => {
  if (route.hash) {
    app.$nextTick(() => {
      setTimeout(() => {
        const hash = route.hash.replace('#', '')
        const element = document.getElementById(hash)
        const isScrolling = document.body.getAttribute('data-scrolling')
        if (!isScrolling) {
          document.body.scrollTop = element ? element.offsetTop : 0
          window.history.replaceState(null, null, hash === '' ? '/' : `/#${hash}`)
        }
      }, 250)
    })
  }
})

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')
