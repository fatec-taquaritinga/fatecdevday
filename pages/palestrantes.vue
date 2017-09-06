<script>
export default {
  name: 'Palestrantes',
  components: {
    MainMenu: () => import('~/components/Menu')
  },
  computed: {
    state () {
      return this.$store.state
    }
  }
}
</script>

<template>
  <section class="page">
    <main-menu />

    <div class="container">
      <h2 class="separator">Palestrantes</h2>
      <p class="important">Estamos acertando alguns detalhes técnicos com alguns palestrantes. Em breve, atualizaremos com todas as informações relevantes!</p>
      <p>Como de costume, os palestrantes estão sendo escolhidos por suas experiências profissionais e seus conhecimentos destacados nos temas respectivos, propiciando-se oportunidade ímpar de aperfeiçoamento profissional. Lembre-se que este é um evento multi-linguagem, não focando em apenas um ecossistema de programação, mas em diferentes técnicas e tecnologias que estão emergindo ou ganhando maior destaque no mercado tecnológico de desenvolvimento.</p>

      <div class="cards">
        <div class="card" v-for="speaker of state.speakers" :key="speaker.id">
          <picture>
            <img :src="speaker.avatar" :alt="speaker.name">
          </picture>

          <h3>{{ speaker.name }}</h3>

          <h4 v-if="speaker.job">
            <span>{{ speaker.job.title }}</span><br>

            <a v-if="speaker.job.url" :href="speaker.job.url" target="_blank">{{ speaker.job.company }}</a>
            <span v-else>{{ speaker.job.company }}</span>
          </h4>

          <p v-if="speaker.bio" v-html="speaker.bio" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

.page
  background: $color-secondary-50
  .cards
    width: 100%
    display: flex
    flex-flow: column
    justify-content: center
    .card
      margin: 8em 1em 0
      background: $color-secondary-100
      padding: 0 2em 2em
      picture
        display: inline-block
        position: relative
        margin: -5em 0 2em
        width: 70%
        max-width: 200px
        border: 5px solid #fff
        border-radius: 50%
        box-shadow: 0 2px 8px alpha(#000, 15%), 0 8px 50px alpha(#000, 5%)
        img
          display: block
          width: 100%
          border-radius: 50%
          object-fit: cover
      h3
        font-size: 1.5em
        line-height: .8
        margin-bottom: .5em
      h4
        font-size: 1.2em
        line-height: .9
        font-weight: 400
    @media(min-width: $breakpoint-tablet)
      flex-flow: row wrap
      .card
        flex: 0 1 calc(50% - 2em)
    @media(min-width: $breakpoint-desktop)
      .card
        flex: 0 1 calc(33.3333% - 2em)
</style>
