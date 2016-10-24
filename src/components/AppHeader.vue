<script>
import Logo from './Logo'

export default {
  name: 'Header',
  components: {
    Logo
  },
  data() {
    return {
      menu: false,
      floating: false,
      currentHash: ''
    }
  },
  methods: {
    menuToggle() {
      this.menu = !this.menu
    },
    go(path) {
      this.navigate(path)
      this.menu = false
    }
  },
  mounted() {
    const self = this
    document.addEventListener('scroll', () => {
      self.$nextTick(() => {
        this.floating = document.body.scrollTop > 0
        this.currentHash = window.location.hash.replace('#', '')
      })
    })
  },
  destroyed() {
    document.removeEventListener('scroll')
  }
}
</script>

<template>
  <header class="app-header" :class="{ 'floating': floating }">
    <div class="container">
      <a class="menu-trigger" @click="menuToggle">&equiv;</a>
      <a class="logo" href="/" @click.prevent="go('/')"><logo :class="{ 'inverse': !floating }">Fatec Dev Day</logo></a>

      <transition name="slide-horizontal">
        <nav class="menu" v-show="menu" @click="menuToggle">
          <ul @click.stop>
            <li><a :class="{ 'active': currentHash === '' }" href="/" @click.prevent="go('/')">Principal</a></li>
            <li><a :class="{ 'active': currentHash === 'sobre' }" href="/#sobre" @click.prevent="go('/#sobre')">Sobre</a></li>
            <li><a :class="{ 'active': currentHash === 'palestrantes' }" href="/#palestrantes" @click.prevent="go('/#palestrantes')">Palestrantes</a></li>
            <li><a :class="{ 'active': currentHash === 'patrocinio' }" href="/#patrocinio" @click.prevent="go('/#patrocinio')">Patrocínio</a></li>
            <li><a :class="{ 'active': currentHash === 'agenda' }" href="/#agenda" @click.prevent="go('/#agenda')">Agenda</a></li>
            <li><a :class="{ 'active': currentHash === 'local' }" href="/#local" @click.prevent="go('/#local')">Local</a></li>
            <li class="primary"><a href="https://www.eventbrite.com.br/e/fatec-dev-day-2016-tickets-28533957836" target="_blank" class="button">Inscrição</a></li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style lang="stylus">
@import '../stylus/variables'

.app-header
  margin-bottom: $app-header-height * -1
  .container
    position: relative
    padding-top: 0
    padding-bottom: 0
    display: flex
    justify-content: space-between
    align-items: center
    background: alpha(#000, 8%)
    border-bottom: 1px solid alpha(#fff, 15%)
    transition: background 350ms ease-in, box-shadow 250ms ease
    height: $app-header-height
  .logo
    display: inline-flex
    transition: border 250ms ease, background 250ms ease, opacity 250ms ease
    .devday
      height: 'calc(%s - 2.5em)' % $app-header-height
    &:hover, &:focus
      .fatec, .year
        fill: lighten(#878787, 20%)
      .day
        fill: lighten($color-secondary, 20%)
      .brackets
        fill: lighten($color-primary, 30%)
      .dev
        fill: lighten(red, 15%)

.app-header.floating
  position: fixed
  width: 100%
  z-index: 1
  .container
    height: $app-header-height - 20

.slide-horizontal-enter
  opacity: 0
  ul
    transform: translateX(-100vw)
.slide-horizontal-enter-active
  transition: opacity 500ms ease-out
  ul
    transition: all 250ms ease-out 250ms
.slide-horizontal-leave-active
  opacity: 0
  transition: opacity 500ms ease-in 250ms
  ul
    transform: translateX(-100vw)
    transition: all 250ms ease-in

.menu-trigger
  font-family: Arial, Verdana, Sans-serif
  font-weight: 400
  font-size: 2em
  line-height: 1
  margin-left: -.25em
  background: 0
  color: #fff
  border: 0

.menu ul
  list-style: none
  margin: 0
  display: flex

li.primary .button
  font-size: 1.125em

@media (max-width: $breakpoint-desktop - 1px)
  .app-header.floating
    .container
      background: transparent
      border-color: transparent
      pointer-events: none
      padding-left: 1.5em
    .logo
      opacity: 0
      pointer-events: none
    .menu-trigger
      pointer-events: all
      text-shadow: -1px -1px 1px alpha(#000, 10%), 1px -1px 1px alpha(#000, 10%), -1px 1px 2px alpha(#000, 20%), 1px 1px 2px alpha(#000, 20%), 0 2px 8px alpha(#000, 50%), 0 2px 50px alpha(#000, 5%)
  .menu
    position: fixed
    pointer-events: all
    top: -1px
    bottom: 1px
    left: -1px
    right: 1px
    background: alpha(#000, 75%)
    cursor: default
    z-index: 2
    ul
      overflow: auto
      flex-flow: column
      background: #fff
      padding: 1em 0
      height: calc(100% + 2px)
      width: 75%
      box-shadow: 0 4px 12px alpha(#000, 16%), 0 10px 50px alpha(#000, 8%)
    li
      display: block
      font-size: calc(1em + .75vw)
      order: 1
      &.primary
        padding: 0 1em
        margin-top: 1em
        margin-bottom: 1em
        .button
          padding: .75em 1em
          color: #fff
    a
      display: block
      padding: 1em 1.5em
      text-decoration: none
      color: inherit
      cursor: pointer
      &.active
        background: #eee

@media (min-width: $breakpoint-tablet)
  .menu li
    font-size: calc(.825em + 1.5vw)

@media (min-width: $breakpoint-desktop)
  .app-header.floating
    .container
      box-shadow: 0 3px 20px alpha(#000, 18%), 0 5px 80px alpha(#000, 5%)
      background: alpha(#fff, 97%)
    a
      color: $text-color-primary
      &.active
        color: $text-color-secondary
    .logo
      border-color: alpha(#000, 25%)
    svg.inverse
      .primary
        fill: $color-secondary
      .secondary
        fill: $color-primary
  .menu-trigger
    display: none
  .menu
    display: block !important
    flex-flow: row
    ul
      align-items: center
    li
      display: block
      font-size: .75em
      &:not(:first-of-type)
        margin-left: .25em
      a
        display: block
        text-transform: uppercase
        text-decoration: none
        padding: 1em 1em
        color: #fff
        text-shadow: 0 5px 25px alpha(#000, 15%), 0 2px 50px alpha(#000, 9%)
        &:hover, &:focus
          color: $color-primary-300
        &.active
          cursor: default
          color: $text-color-inverse-secondary
      &.primary
        margin-left: 1em
        a
          padding: .5em 1em
          position: relative
          margin-top: -7px
          font-size: 1.125em
          color: #fff

@media (min-width: $breakpoint-desktop-fullhd)
  .menu li
    font-size: .875em
</style>
