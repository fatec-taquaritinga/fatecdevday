<script>
import { throttle } from 'throttle-debounce'
import event from '~/content'

export default {
  name: 'Menu',
  components: {
    Logo: () => import('~/components/Logo')
  },
  props: {
    items: {
      type: Array,
      default () {
        return [
          { path: '/' },
          { path: '#sobre', title: 'Sobre' },
          { path: '#palestrantes', title: 'Palestrantes' },
          { path: '#agenda', title: 'Agenda' }
        ]
      }
    }
  },
  data () {
    return {
      current: '#',
      triggered: false
    }
  },
  computed: {
    title () {
      return event.name.long
    }
  },
  methods: {
    updateScroll () {
      this.triggered = true

      if (location.hash === '') {
        this.updateMenu('/')
        window.scrollTo(0, 0)
        document.body.focus()
      } else {
        let target = location.hash.replace('#', '')
        target = document.getElementById(target)
        if (target && target.offsetTop) {
          this.current = location.hash
          this.updateMenu(this.current, this.items.find(i => i.path === this.current).title)
          window.scrollTo(0, target.offsetTop)
          target.focus()
        }
      }

      setTimeout(() => this.triggered = false, 1000)
    },

    updateMenu (path, title) {
      this.current = path
      if (path === '/') document.title = this.title
      else document.title = `${ title } - ${ this.title }`
    },

    updatePath () {
      if (this.triggered) return

      const containers = document.querySelectorAll('.container.in-menu')
      for (const container of containers) {
        if (this.isElementInViewport(container)) {
          const id = container.id
          if (id === 'inicio' && this.current !== '/') {
            this.menuClick({ path: '/' }, true)
          } else if (id !== 'inicio' && this.current !== '#' + id) {
            this.menuClick(this.items.find(i => i.path == '#' + id), true)
            container.focus()
          }
        }
      }
    },

    isElementInViewport (element) {
      const boundaries = element.getBoundingClientRect()
      const halfWindow = Math.floor(window.innerHeight / 3)
      return boundaries.top >= -halfWindow && boundaries.top <= halfWindow * 1.25
    },

    menuClick (target, scrooling = false) {
      if (target.path === '/') {
        if (location.pathname === '/') history.replaceState({}, this.title, '/')
        else this.$router.push('/')
      }
      else history.replaceState({}, `${ target.title } - ${ this.title }`, target.path)
      if (scrooling) this.updateMenu(target.path, target.title)
      else this.$nextTick(this.updateScroll)
    }
  },
  mounted () {
    this.$nextTick(this.updateScroll)
    window.addEventListener('scroll', throttle(750, this.updatePath))
  }
}
</script>

<template>
  <nav class="menu">
    <ul>
      <li v-for="item in items" :key="item.key">
        <logo v-if="item.path === '/'" href="/" @click.prevent.native="menuClick(item)" />
        <a v-else :href="item.path" @click.prevent="menuClick(item)" :class="{ active: current === item.path }">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

.menu
  position: fixed
  width: 100%
  background: #fff
  z-index: 3
  font-size: .75em
  text-align: center
  z-depth: 2
  ul
    margin: 0
    padding: 0
    list-style: none
    display: inline-flex
  li
    padding: 0
  a
    height: 40px
    display: block
    text-decoration: none
    padding: 12px 1em 0
    color: $color-primary-900
    outline: 1px solid transparent
    outline-offset: -4px
    &:hover, &.active
      color: #fff
      background: $color-primary
    &:focus
      outline-color: $color-primary
  .logo
    width: 9em
    padding: 8px 1em 0
    &:hover
      background: none
</style>
