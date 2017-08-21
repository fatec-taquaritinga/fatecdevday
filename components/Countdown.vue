<script>
export default {
  name: 'Countdown',
  props: {
    visible: Boolean,
    target: String
  },
  data () {
    return {
      interval: null,
      now: Math.trunc(new Date().getTime() / 1000)
    }
  },
  computed: {
    date () {
      return Math.trunc(Date.parse(this.target) / 1000)
    },
    seconds () {
      return (this.date - this.now) % 60
    },
    minutes () {
      return Math.trunc((this.date - this.now) / 60) % 60
    },
    hours () {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24)
    }
  },
  filters: {
    leftPad (value, size = 0, char = ' ') {
      let result = value + ''
      while (result.length < size) result = `${char}${result}`
      return result
    }
  },
  created () {
    this.interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  destroyed () {
    clearInterval(this.interval)
    this.interval = null
  }
}
</script>

<template>
  <div class="countdown" v-if="visible">
    <div class="unit days">
      <p>{{ days | leftPad(2, '0') }}</p>
      <span>dias</span>
    </div>

    <div class="unit hours">
      <p>{{ hours | leftPad(2, '0') }}</p>
      <span>horas</span>
    </div>

    <div class="unit minutes">
      <p>{{ minutes | leftPad(2, '0') }}</p>
      <span>minutos</span>
    </div>

    <div class="unit seconds">
      <p>{{ seconds | leftPad(2, '0') }}</p>
      <span>segundos</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

.countdown
  display: flex
  margin: 1.5em 0 0
  font-size: calc(.5em + 1vw)
  font-family: $font-secondary
  text-shadow: 0 2px 5px alpha(#000, 25%)
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
