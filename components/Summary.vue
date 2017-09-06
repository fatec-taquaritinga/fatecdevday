<script>
export default {
  name: 'Summary',
  computed: {
    state () {
      return this.$store.state
    }
  }
}
</script>

<template>
  <aside class="summary">
    <nuxt-link tag="div" class="summary-item" tabindex="0" to="sobre">
      <picture>
        <i class="material-icons circle">insert_invitation</i>
      </picture>
      <div class="info">
        <h3>{{ state.date.longWithoutYear }}</h3>
        <span>{{ state.date.short }} às {{ state.date.time }}</span>
      </div>
    </nuxt-link>

    <nuxt-link tag="div" class="summary-item" tabindex="0" to="local">
      <picture>
        <i class="material-icons circle">location_on</i>
      </picture>
      <div class="info">
        <h3>Taquaritinga-SP</h3>
        <span>Fatec Taquaritinga</span>
      </div>
    </nuxt-link>

    <nuxt-link tag="div" class="summary-item" tabindex="0" to="palestrantes">
      <picture>
        <i class="material-icons circle">mic</i>
      </picture>
      <div class="info">
        <h3>{{ state.talks.length + state.liveCodings.length }} palestrantes</h3>
        <span>{{ state.talks.length }} <em>Talk Sessions</em></span>
        <span>{{ state.liveCodings.length }} <em>Live Coding Sessions</em></span>
      </div>
    </nuxt-link>

    <nuxt-link tag="div" class="summary-item" tabindex="0" to="sobre">
      <picture>
        <i class="material-icons circle">airline_seat_recline_extra</i>
      </picture>
      <div class="info">
        <h3>{{ state.places.total }} lugares</h3>
        <span v-if="state.places.soldOut">Vagas esgotadas!</span>
        <span v-else>{{ state.places.talks }} nas <em>Talk Sessions</em></span>
        <span>{{ state.places.liveCodings }} nas <em>Live Coding Sessions</em></span>
      </div>
    </nuxt-link>
  </aside>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

.summary
  position: relative
  background: linear-gradient(rgba($color-secondary-50, 90%), rgba($color-secondary-50, 70%))
  text-align: center
  z-index: 2
  font-size: .625em
  display: flex
  flex-flow: row wrap
  justify-content: center
  padding: 4px 0
  @media (min-width: $breakpoint-tablet)
    font-size: .75em
  @media (min-width: $breakpoint-desktop)
    font-size: .875em

.summary-item
  display: inline-flex
  justify-content: center
  align-items: center
  text-align: left
  margin: 0 1em
  padding: 1em 0
  border-radius: 2px
  cursor: pointer
  outline: none
  transition: background 250ms ease
  flex: 1 1 calc(50% - 2em)
  &:hover, &:focus
    background: $color-secondary-100
  @media (min-width: $breakpoint-tablet)
    flex: 1 1 calc(25% - 2em)

.circle
  margin-right: .625rem

h3
  font-size: 1.25em
  font-weight: 400
  line-height: 1.5
  white-space: nowrap

span
  display: block
  font-size: .75em
  color: $text-color-secondary
  margin: 1px 0 0
  line-height: 1
  white-space: nowrap
</style>
