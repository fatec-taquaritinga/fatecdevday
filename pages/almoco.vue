<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Almoco',
  components: {
    MainMenu: () => import('~/components/Menu')
  },
  data () {
    return {
      maps: 'https://www.google.com.br/maps/dir/FATEC-TQ+-+Faculdade+de+Tecnologia+de+Taquaritinga,+Taquaritinga,+15900-000,+Brasil/',
      facebook: 'https://www.facebook.com/'
    }
  },
  computed: {
    ...mapGetters([ 'willHappen', 'isToday', 'hasPassed', 'soldOut' ]),

    state () {
      return this.$store.state
    },

    places () {
      return this.$store.state.lunch.sort((a, b) => a.distance.raw < b.distance.raw ? -1 : 1)
    }
  }
}
</script>

<template>
  <section class="page">
    <main-menu />

    <div class="container">
      <h2 class="separator">Onde almoçar?</h2>
      <p v-if="willHappen || isToday">Fique à vontade para escolher onde almoçar, aqui oferecemos algumas sugestões.</p>
      <p v-else-if="hasPassed">Os participantes puderam escolher onde almoçar e oferecemos algumas sugestões.</p>

      <aside>
        <div v-for="place in places" :key="place.id">
          <h5><a :href="facebook + place.facebook" target="_blank">{{place.name}}</a></h5>

          <span>{{place.foods.join(', ')}}</span>

          <p><i class="material-icons">place</i> {{place.address}}</p>
          <p><i class="material-icons">my_location</i> {{place.distance.formatted}} <small>&bull;</small> <i class="material-icons">phone</i> <a :href="`tel:${place.phone.raw}`" target="_blank">{{place.phone.formatted}}</a></p>

          <a :href="maps + place.maps" target="_blank" class="button">Como chegar</a>
        </div>
      </aside>

      <div class="action-buttons">
        <div class="buttons">
          <nuxt-link to="/convidados" class="button">Quem
            <span v-if="willHappen">vai palestrar</span>
            <span v-else-if="isToday">está palestrando</span>
            <span v-else-if="hasPassed">palestrou</span>?</nuxt-link>

          <nuxt-link to="/programacao" class="button">Qual a programação?</nuxt-link>

          <a v-if="!soldOut" :href="state.href" target="_blank" class="button primary">
            Inscreva-se<span class="hidden-on-small"> agora</span>!
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

.page
  background: #fff

aside
  margin-top: 3rem
  display: flex
  flex-flow: row wrap
  justify-content: center
  align-items: center
  div
    font-size: .825rem
    margin: 1rem
    padding: 1.5rem
    background: $color-secondary-50
    h5
      font-size: 1.25em
      margin: 0
      a
        color: $color-primary
        text-decoration: none
    span
      display: block
      color: $text-color-secondary
      margin: 0 0 1em
    p
      margin: 0 0 .325em
      line-height: 1
      a
        color: $color-secondary
        text-decoration: none
        line-height: 1
      small
        display: inline-block
        margin: 0 .25em
        color: $text-color-secondary
    .material-icons
      font-size: 1.25em
      vertical-align: middle
    .button
      margin: 1em 0 0
</style>
