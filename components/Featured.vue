<script>
import Logo from './Logo'

export default {
  name: 'Featured',
  components: {
    Logo
  },
  data () {
    return {
      countdown: {
        interval: null,
        days: '-',
        hours: '-',
        minutes: '-',
        seconds: '-'
      }
    }
  },
  computed: {
    event () {
      return this.$store.state.event
    }
  },
  methods: {
    timeBetweenDates () {
      const difference = this.event.date.object.getTime() - new Date().getTime()

      if (difference < 1) {
        clearInterval(this.countdown.interval)

        this.countdown.days = 0
        this.countdown.hours = 0
        this.countdown.minutes = 0
        this.countdown.seconds = 0
      } else {
        let seconds = Math.floor(difference / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        const days = Math.floor(hours / 24)

        hours %= 24
        minutes %= 60
        seconds %= 60

        this.countdown.days = days
        this.countdown.hours = hours
        this.countdown.minutes = minutes
        this.countdown.seconds = seconds
      }
    }
  },
  created () {
    if (this.event.timelapse.willHappen) this.timeBetweenDates()
  },
  mounted () {
    if (this.event.timelapse.willHappen) this.countdown.interval = setInterval(this.timeBetweenDates, 1000)
  }
}
</script>

<template>
  <section id="featured">
    <div class="container">
      <h1><logo class="light">{{ event.name.long }}</logo></h1>
      <h2>{{ event.date.long }}</h2>

      <div class="countdown" v-if="event.timelapse.willHappen">
        <div class="unit days">
          <p>{{ countdown.days }}</p>
          <span>dias</span>
        </div>

        <div class="unit hours">
          <p>{{ countdown.hours }}</p>
          <span>horas</span>
        </div>

        <div class="unit minutes">
          <p>{{ countdown.minutes }}</p>
          <span>minutos</span>
        </div>

        <div class="unit seconds">
          <p>{{ countdown.seconds }}</p>
          <span>segundos</span>
        </div>
      </div>

      <div class="action-button inverse" v-if="!event.places.soldOut">
        <a :href="event.href" target="_blank" class="button primary transparent">Inscreva-se<span class="hidden-on-small"> agora</span>!</a>
        <p>* Vagas limitadas: apenas {{ event.places.total }} lugares disponíveis!</p>
      </div>

      <div class="action-button inverse" v-if="event.timelapse.isToday">
        <p>É hoje! Está participando conosco?<br>Compartilhe o que estiver rolando com a <i>hashtag</i>: <a href="https://www.facebook.com/hashtag/fatecdevday" target="_blank">#fatecdevday</a></p><br>
        <nuxt-link to="agenda" class="button primary transparent">Ver agenda</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

#featured
  background: $color-secondary-700 url('../assets/featured/campus.jpg') fixed center center
  background-size: cover
  .container
    min-height: 100vh
    color: $text-color-inverse-primary
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    text-align: center
  h1
    font-size: 1.25em
    margin: 0 0 1.5em
    width: 75%
    max-width: 22em
  h2
    display: inline-block
    background: $color-secondary-100
    color: $text-color-primary
    font-size: calc(.675em + 1vw)
    padding: .25em .825em .175em
    font-family: $font-secondary
    font-weight: 400
    letter-spacing: 3px
    box-shadow: 0 20px 120px alpha(#000, 25%)
    text-shadow: none
    @media (min-width: $breakpoint-desktop)
      font-size: 1.25em
  p a
    color: $color-primary-100
  .countdown
    display: flex
    margin: 1.5em 0 0
    font-size: calc(.5em + 1vw)
    font-family: $font-secondary
    @media (min-width: $breakpoint-desktop-hd)
      font-size: 1.125em
    .unit
      flex: 0 0 auto
      width: 5.5em
      margin: 0 .5em
      p
        font-size: 3em
        letter-spacing: 0
        margin: 0
        border-bottom: 1px solid alpha(#fff, 25%)
      span
        display: block
        font-size: .875em
        margin-top: .25em
        color: $text-color-inverse-secondary
</style>
