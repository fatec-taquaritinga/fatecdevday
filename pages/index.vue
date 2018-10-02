<script>
import event from '../content'

export default {
  name: 'Index',
  components: {
    AppMenu: () => import('~/components/Menu'),
    Logo: () => import('~/components/Logo'),
    Countdown: () => import('~/components/Countdown'),
    LayoutAbout: () => import('~/components/layout/About'),
    LayoutSponsors: () => import('~/components/layout/Sponsors'),
    LayoutSpeakers: () => import('~/components/layout/Speakers'),
    LayoutAgenda: () => import('~/components/layout/Agenda')
  },
  data () {
    return {
      event
    }
  },
  methods: {
    backToTop () {
      document.querySelector('.menu .logo').click()
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

      <a class="button inverse" href="https://www.sympla.com.br/fatec-dev-day-2018__297415" target="_blank" rel="noopener">Inscreva-se</a>
    </header>

    <countdown :target="event.date.full" />

    <div class="parallax"></div>

    <hr />

    <layout-about />

    <layout-sponsors />

    <hr />

    <layout-speakers />

    <layout-agenda />

    <hr />

    <div id="enroll" class="container enroll limit-width">
      <a class="button" href="https://www.sympla.com.br/fatec-dev-day-2018__297415" target="_blank" rel="noopener">Inscreva-se</a>
      <p>Terceiro lote: até <b>05/11</b>.</p>
    </div>

    <footer class="footer">
      <div class="container">
        <a class="logo" href="/" @click.prevent="backToTop"><logo class="inverse">Fatec Dev Day</logo></a>

        <p>
          © {{ event.edition.year }} <a href="http://www.fatectq.edu.br" target="_blank" rel="noopener">Fatec Taquaritinga</a>
          <br>Todos os direitos reservados
        </p>
      </div>
    </footer>
  </main>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

.featured
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
  padding: 1em 0 1.25em
  background: $background-secondary
  position: relative
  z-index: 2

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

.footer
  position: relative
  background: $color-secondary-50
  text-align: center
  padding: 4em 0 2em
  .logo
    display: inline-block
    width: 12em
  p
    font-size: .75em
    color: $text-color-secondary
  a
    color: $text-color-primary
    text-decoration: none
    &:hover, &:focus
      color: $color-primary-700
</style>
