<script>
import event from '../content'

export default {
  name: 'Index',
  components: {
    AppMenu: () => import('~/components/Menu'),
    AppFooter: () => import('~/components/Footer'),
    Logo: () => import('~/components/Logo'),
    // Countdown: () => import('~/components/Countdown'),
    LayoutAbout: () => import('~/components/layout/About'),
    LayoutSponsors: () => import('~/components/layout/Sponsors'),
    // LayoutLunch: () => import('~/components/layout/Lunch'),
    LayoutSpeakers: () => import('~/components/layout/Speakers'),
    LayoutAgenda: () => import('~/components/layout/Agenda'),
    LayoutLocation: () => import('~/components/layout/Location')
  },
  data () {
    return {
      event,
      likedTalk: null
    }
  },
  methods: {
    goToAgenda () {
      document.querySelector('.menu a[href="#agenda"]').click()
    },

    goToLocal () {
      document.querySelector('.menu a[href="#local"]').click()
    }
  }
}
</script>

<template>
  <main id="index" class="page">
    <app-menu />

    <header id="inicio" class="container featured limit-width in-menu">
      <h1><logo schema="light" :year="false">{{ event.name.long }}</logo></h1>

      <h2 class="hidden-on-large">{{ event.date.short }}</h2>
      <h2 class="hidden-on-small">{{ event.date.long }}</h2>

      <p>Um dia dedicado ao desenvolvimento <br /> web, aplicativos e sistemas em geral</p>

      <!-- <a v-if="event.href" class="button inverse" :href="event.href" target="_blank" rel="noopener">Inscreva-se</a> -->
    </header>

    <!-- <countdown :target="event.date.full" /> -->

    <div class="countdown">
      <!-- <a class="button" href="#agenda" @onclick.prevent="goToAgenda">Veja a programação</a> -->
      <a class="button" href="https://forms.gle/pwMXppAuGhVkeRvn7" target="_blank" rel="noopener">Dê sua opinião</a>
    </div>

    <div class="parallax"></div>

    <hr />

    <layout-about />

    <layout-sponsors />

    <!-- <hr />

    <layout-lunch /> -->

    <hr />

    <layout-speakers />

    <layout-agenda :liked="likedTalk" />

    <hr />

    <!-- <div v-if="event.href" id="enroll" class="container enroll limit-width">
      <a class="button" :href="event.href" target="_blank" rel="noopener">Inscreva-se</a>
      <p>Corra! Apenas {{ event.places.talks }} vagas disponíveis.</p>
    </div> -->

    <div id="enroll" class="container enroll limit-width">
      <p><strong>Participou conosco?</strong><br>O que você achou do Fatec Dev Day 2019?</p>
      <a class="button" href="https://forms.gle/pwMXppAuGhVkeRvn7" target="_blank" rel="noopener">Dê sua opinião</a>
    </div>

    <layout-location />

    <app-footer />
  </main>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

.featured
  z-depth: 6
  background: $background-primary
  padding-top: 50px
  min-height: 80vh
  display: flex
  flex-flow: column
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  &, h1, h2
    color: $text-color-inverse-primary
  h1
    font-size: 1.625em
    margin: 0
    width: 90%
    max-width: 20em
  h2
    font-weight: 700
    margin: .5em 0 0
    font-size: calc(1em + 1.5vw)
  p
    margin: 1.5em 0 0
    font-size: calc(.5em + 1.5vw)
  .button
    margin-top: 3em

.countdown
  z-depth: 6
  padding: 0 0 1.25em
  background: $background-secondary
  position: relative
  z-index: 2
  .button
    margin: 1em .5em 0

.parallax
  background: $color-secondary url('../assets/backgrounds/campus.jpg') 65% 75% \/ cover fixed
  min-height: 30vh

.enroll
  background: $background-secondary
  min-height: 40vh
  display: flex
  flex-flow: column
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  z-depth: 2
  p
    margin-top: 1.5em
    font-size: .875em
    font-weight: 300
    b
      font-weight: 500
      color: inherit
  .button
    margin-top: 2em
</style>
