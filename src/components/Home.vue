<script>
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import Featured from './Featured'
import EventSummary from './Summary'
import About from './About'
import Speakers from './Speakers'
import Sponsors from './Sponsors'
import Schedule from './Schedule'
import Location from './Location'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppFooter,
    Featured,
    EventSummary,
    About,
    Speakers,
    Sponsors,
    Schedule,
    Location
  }
}
</script>

<template>
  <div class="page">
    <app-header></app-header>

    <main>
      <featured></featured>

      <event-summary></event-summary>

      <about></about>

      <section class="auditory"></section>

      <speakers></speakers>

      <sponsors></sponsors>

      <schedule></schedule>

      <section>
        <h2 class="separator">Vamos?</h2>
        <p>O primeiro Dev Day da história das Fatecs acontecerá aqui! Vai ficar de fora?</p>

        <div class="action-button">
          <a href="https://www.eventbrite.com.br/e/fatec-dev-day-2016-tickets-28533957836" target="_blank" class="button primary transparent">Inscreva-se<span class="hidden-on-small"> agora</span>!</a>
        </div>
      </section>

      <location></location>
    </main>

    <app-footer></app-footer>
  </div>
</template>

<style lang="stylus" scoped>
.auditory
  background: url('../assets/auditory.jpg') fixed no-repeat center top
  background-size: cover
  height: 45vh
</style>
