<script>
import Logo from './Logo'
import event from '../data/event'

export default {
  name: 'Featured',
  components: {
    Logo
  },
  data() {
    return {
      target: event.date,
      when: event.when,
      soldOut: event.soldOut,
      countdown: {
        interval: null,
        days: '-',
        hours: '-',
        minutes: '-',
        seconds: '-'
      }
    }
  },
  methods: {
    timeBetweenDates() {
      const difference = this.target.getTime() - new Date().getTime()

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
  created() {
    if (this.when.future) this.timeBetweenDates()
  },
  mounted() {
    if (this.when.future) this.countdown.interval = setInterval(this.timeBetweenDates, 1000)
  }
}
</script>

<template>
  <section id="principal" v-scrolled>
    <div class="container">
      <h1><logo class="inverse">Fatec Dev Day</logo></h1>
      <h2>5 de novembro de 2016</h2>

      <div class="countdown" v-if="when.future">
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

      <div class="action-button inverse" v-if="!soldOut">
        <a href="https://www.eventbrite.com.br/e/fatec-dev-day-2016-tickets-28533957836" target="_blank" class="button primary transparent">Inscreva-se<span class="hidden-on-small"> agora</span>!</a>
        <p>* Vagas limitadas: apenas 100 lugares disponíveis!</p>
      </div>

      <div class="action-button inverse" v-if="when.present">
        <p>É hoje! Está participando conosco?<br>Compartilhe o que estiver rolando com a <i>hashtag</i>: <a href="https://www.facebook.com/hashtag/fatecdevday" target="_blank">#fatecdevday</a></p><br>
        <a @click.prevent="navigate('/#agenda')" class="button primary transparent">Ver agenda</a>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

#principal
  background: $color-secondary-700 url('../assets/featured.jpg') fixed center center
  background-size: cover
  .container
    min-height: calc(100vh + 25px)
    margin-top: $app-header-height * -1
    padding-top: $app-header-height + 40px
    padding-bottom: 40px
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
