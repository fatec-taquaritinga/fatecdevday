<script>
export default {
  name: 'Countdown',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    target: {
      type: String,
      default () {
        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        return tomorrow.toString()
      }
    }
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
      return this.date - this.now > 0 ? (this.date - this.now) % 60 : 0
    },
    minutes () {
      return this.date - this.now > 0 ? Math.trunc((this.date - this.now) / 60) % 60 : 0
    },
    hours () {
      return this.date - this.now > 0 ? Math.trunc((this.date - this.now) / 60 / 60) % 24 : 0
    },
    days () {
      return this.date - this.now > 0 ? Math.trunc((this.date - this.now) / 60 / 60 / 24) : 0
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
  justify-content: center
  font-size: calc(.375em + 1vw)
  font-family: $font-secondary
  @media (min-width: $breakpoint-desktop-hd)
    font-size: 1em
  .unit
    flex: 0 0 auto
    width: 5.5em
    margin: 0 .5em
    p
      font-size: 3em
      letter-spacing: 0
      margin: 0
    span
      display: block
      font-size: .875em
      margin-top: .25em
      opacity: .65
</style>
