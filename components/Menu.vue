<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Menu',
  computed: {
    ...mapGetters([ 'willHappen' ]),

    state () {
      return this.$store.state
    }
  }
}
</script>

<template>
  <nav class="menu">
    <nuxt-link to="/" class="menu-item"><i class="material-icons">home</i><span>Principal</span></nuxt-link>
    <nuxt-link to="/sobre" class="menu-item"><i class="material-icons">info</i><span>Sobre</span></nuxt-link>
    <nuxt-link to="/convidados" class="menu-item"><i class="material-icons">mic</i><span>Convidados</span></nuxt-link>
    <nuxt-link to="/programacao" class="menu-item"><i class="material-icons">access_time</i><span>Programação</span></nuxt-link>
    <nuxt-link to="/local" class="menu-item"><i class="material-icons">location_on</i><span>Local</span></nuxt-link>
    <a v-if="willHappen" :href="state.href" target="_blank" class="menu-item primary"><i class="material-icons">playlist_add_check</i><span>Participar</span></a>
  </nav>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

.menu
  display: flex
  text-align: center
  background: $color-secondary-900
  box-shadow: 0 2px 30px rgba(#000, 5%), 0 2px 4px rgba(#000, 15%)
  z-index: 1
  .menu-item
    flex: 1
    display: flex
    text-decoration: none
    justify-content: center
    align-items: center
    flex-flow: column
    color: #fff
    padding: 1em
    i
      font-size: 1.75em
    span
      font-size: .625em
      margin-top: .5em
    &:hover, &:focus
      background: $color-secondary-700
    &.nuxt-link-exact-active
      background: darken($color-secondary-900, 15%)
      box-shadow: inset 0 1px 10px rgba(#000, 25%)
    &.primary
      background: $color-secondary
    &.primary:hover, &.primary:focus
      background: $color-secondary-700
</style>
