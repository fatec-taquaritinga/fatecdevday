<script>
export default {
  name: 'Sobre',
  components: {
    Logo: () => import('~/components/Logo'),
    MainMenu: () => import('~/components/Menu')
  },
  computed: {
    state () {
      return this.$store.state
    },

    verbs () {
      const willHappen = this.state.timelapse.willHappen
      const isToday = this.state.timelapse.isToday

      return [
        willHappen ? 'será' : isToday ? 'é' : 'foi',
        willHappen ? 'sediará' : isToday ? 'está sediando' : 'sediou',
        willHappen ? 'trará' : isToday ? 'está contando com' : 'trouxe',
        willHappen ? 'ocorrerão' : isToday ? 'ocorrem' : 'ocorreram',
        willHappen ? 'estão sendo' : isToday ? 'foram' : 'foram',
        willHappen ? 'vierem' : isToday ? 'estão' : 'vieram'
      ]
    }
  }
}
</script>

<template>
  <section class="page">
    <main-menu />

    <div class="container">
      <div>
        <h2 class="logo"><logo href="/">O evento</logo></h2>

        <div class="subtitle">
          <h3>Um dia dedicado a desenvolvimento</h3>
          <h4>Web, aplicativos e sistemas em geral</h4>
        </div>

        <p class="important">
          Em <strong>{{ state.date.long }}</strong>, a <a href="http://www.fatectq.edu.br/" target="_blank">Faculdade de Tecnologia de Taquaritinga</a>
          {{ verbs[1] }} o segundo encontro para discussão das últimas tendências do desenvolvimento de sistemas e aplicativos, o <strong>{{ state.name.short }}</strong>.
          Organizado pelos cursos de <a href="http://www.fatectq.edu.br/analise-e-desenvolvimento-de-sistemas" target="_blank">Análise e Desenvolvimento de Sistemas</a> e de <a href="http://www.fatectq.edu.br/sistemas-para-internet" target="_blank">Sistemas para Internet</a>,
          {{ verbs[2] }} profissionais de destaque para falar de novidades em
          <template v-for="(topic, index) of state.topics"><em :key="index">{{ topic }}</em>, </template>
          dentre outros assuntos de grande interesse a profissionais e estudantes da área.
        </p>

        <p>
          Estão edição {{ verbs[0] }} distribuída em <em>duas trilhas paralelas</em>:
          <strong>Talk Sessions</strong> (100 lugares), com várias palestras com duração aproximada de uma hora cada ao longo do dia;
          <strong>Live Coding Sessions</strong> (40 lugares), com duas sessões de acompanhamento ao vivo da construção de aplicativos móveis.
        </p>
      </div>

      <div class="action-buttons">
        <div class="buttons">
          <nuxt-link to="/convidados" class="button">Quem
            <span v-if="state.timelapse.willHappen">vai palestrar</span>
            <span v-if="state.timelapse.isToday">está palestrando</span>
            <span v-if="state.timelapse.hasPassed">palestrou</span>?</nuxt-link>
          <nuxt-link to="/local" class="button">Onde
            <span v-if="state.timelapse.willHappen">será</span>
            <span v-if="state.timelapse.isToday">está sendo</span>
            <span v-if="state.timelapse.hasPassed">foi</span>?</nuxt-link>

          <a :href="state.href" target="_blank" class="button primary">
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
  position: relative
  background: $color-background-primary
  .logo
    display: inline-block
    width: 90%
    max-width: 7em
  .subtitle
    margin: 1em 0 2em
  p
    font-size: 1.125em
  h3
    font-size: 1.75em
    line-height: 1
  h4
    display: none
  @media (min-width: $breakpoint-tablet)
    h4
      font-size: 1.625em
      display: block
      margin-top: .125em
</style>
