<script>
import Logo from '~/components/Logo'
import Countdown from '~/components/Countdown'

export default {
  name: 'Index',
  components: {
    Logo,
    Countdown
  },
  data () {
    return {
      slider: {
        current: -1,
        images: [
          {
            animation: 'zoom-center',
            src: require('../assets/featured/campus.jpg')
          },
          {
            animation: 'zoom-left',
            src: require('../assets/featured/last-edition-01.jpg')
          },
          {
            animation: 'zoom-right',
            src: require('../assets/featured/last-edition-02.jpg')
          },
          {
            animation: 'zoom-right',
            src: require('../assets/featured/last-edition-03.jpg')
          },
          {
            animation: 'zoom-left',
            src: require('../assets/featured/last-edition-04.jpg')
          },
          {
            animation: 'zoom-left',
            src: require('../assets/featured/last-edition-05.jpg')
          },
          {
            animation: 'zoom-right',
            src: require('../assets/featured/last-edition-06.jpg')
          }
        ]
      }
    }
  },
  computed: {
    state () {
      return this.$store.state
    }
  },
  mounted () {
    const img = new Image()

    img.onload = () => {
      setTimeout(() => {
        this.slider.current = 0

        setInterval(() => {
          if (this.slider.current === this.slider.images.length - 1) this.slider.current = 0
          else this.slider.current++
        }, 10000)
      }, 2000)
    }

    img.src = this.slider.images[0].src
  }
}
</script>

<template>
  <main id="index" class="page">
    <div class="slider">
      <transition name="slider" mode="in-out">
        <div v-for="(image, index) of slider.images" :key="index" class="slide" :class="[ image.animation ]"
          :style="{ 'background-image': `url('${image.src}')` }" v-if="slider.current === index"></div>
      </transition>
    </div>

    <div class="container">
      <h1><logo schema="light">{{ state.name.long }}</logo></h1>
      <h2>{{ state.date.long }}</h2>

      <countdown :target="state.date.full" :visible="state.timelapse.willHappen"/>

      <div class="action-button inverse" v-if="!state.places.soldOut">
        <a :href="state.href" target="_blank" class="button primary transparent">Inscreva-se<span class="hidden-on-small"> agora</span>!</a>
        <p>* Vagas limitadas: apenas {{ state.places.total }} lugares disponíveis!</p>
      </div>

      <div class="action-button inverse" v-if="state.timelapse.isToday">
        <p>É hoje! Está participando conosco?<br>Compartilhe o que estiver rolando com a <i>hashtag</i>: <a href="https://www.facebook.com/hashtag/fatecdevday" target="_blank">#fatecdevday</a></p><br>
        <nuxt-link to="agenda" class="button primary transparent">Ver agenda</nuxt-link>
      </div>
    </div>
  </main>
</template>

<style lang="stylus">
@import '../stylus/variables'

.slider, .slider .slide, .slider::after
  content: ''
  position: absolute
  top: 0; right: 0; bottom: 0; left: 0

.slider
  overflow: hidden
  background: $color-secondary-700 url('../assets/featured/campus.jpg') fixed center center
  background-size: cover
  &::after
    background: alpha(#000, 80%) url('../assets/overlay.png') repeat
    opacity: .75
    z-index: 2
  .slide
    background-position: center center
    background-attachment: fixed
    background-size: cover

.slide.zoom-center
  transform: scale(1.15)

.slide.zoom-center.slider-enter
  transform: scale(1)

.slide.zoom-center.slider-enter-to
  transform: scale(1.15)

.slide.zoom-left
  transform: scale(1) translate(0, 0)

.slide.zoom-left.slider-enter
  transform: scale(1.5) translate(10vw, 10vh)

.slide.zoom-left.slider-enter-to
  transform: scale(1) translate(0, 0)

.slide.zoom-right
  transform: scale(1) translate(0, 0)

.slide.zoom-right.slider-enter
  transform: scale(1.5) translate(-10vw, -10vh)

.slide.zoom-right.slider-enter-to
  transform: scale(1) translate(0, 0)

.slider-enter-active
  transition: transform 10s linear
  z-index: 1

#index
  position: relative
  .container
    position: relative
    min-height: 100vh
    color: $text-color-inverse-primary
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    text-align: center
    z-index: 3
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
</style>
