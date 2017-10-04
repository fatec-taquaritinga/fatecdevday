<script>
export default {
  name: 'Palestrantes',
  components: {
    Markdown: () => import('vue-markdown'),
    MainMenu: () => import('~/components/Menu')
  },
  computed: {
    state () {
      return this.$store.state
    },

    talks () {
      return this.$store.state.speakers.talks.filter(i => i !== false).sort(() => Math.random() - 0.5)
    },

    liveCodings () {
      return this.$store.state.speakers.liveCodings.filter(i => i !== false).sort(() => Math.random() - 0.5)
    }
  }
}
</script>

<template>
  <section class="page">
    <main-menu />

    <div class="container">
      <h2 class="separator">Convidados</h2>
      <p class="important">Estamos acertando alguns detalhes técnicos. Em breve, mais informações serão acrescentadas!</p>
      <p>Palestrantes escolhidos por suas experiências profissionais e seus conhecimentos destacados nos temas respectivos. Lembre-se: este é um evento multi-linguagem, não focando em apenas um ecossistema de programação, mas em diferentes técnicas e tecnologias que estão emergindo ou ganhando maior destaque.</p>

      <div class="talk-sessions">
        <h3 class="separator">Talk Sessions</h3>
        <div class="cards">
          <div class="card" v-for="person of talks" :key="person.id">
            <picture v-if="person.avatar">
              <img :src="person.avatar" :alt="person.name">
            </picture>

            <h4>{{ person.name }}</h4>

            <h5 v-if="person.job">
              <span>{{ person.job.title }}</span><br>

              <a v-if="person.job.url" :href="person.job.url" target="_blank">{{ person.job.company }}</a>
              <span v-else>{{ person.job.company }}</span>
            </h5>

            <markdown v-if="person.bio" :source="person.bio" />
          </div>
        </div>
      </div>

      <div class="live-coding-sessions">
        <h3 class="separator">Live Coding Sessions</h3>
        <div class="cards">
          <div class="card" v-for="person of liveCodings" :key="person.id">
            <picture v-if="person.avatar">
              <img :src="person.avatar" :alt="person.name">
            </picture>

            <h4>{{ person.name }}</h4>

            <h5 v-if="person.job">
              <span>{{ person.job.title }}</span><br>

              <a v-if="person.job.url" :href="person.job.url" target="_blank">{{ person.job.company }}</a>
              <span v-else>{{ person.job.company }}</span>
            </h5>

            <markdown v-if="person.bio" :source="person.bio" />
          </div>
        </div>
      </div>

      <div class="action-buttons">
        <div class="buttons">
          <nuxt-link to="/programacao" class="button">Quais os temas?</nuxt-link>
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
  background: $color-background-primary
  h3
    margin: 3em 0 -2em
  .cards
    width: 100%
    display: flex
    flex-flow: column
    justify-content: center
    .card
      margin: 8em 1em 0
      background: $color-secondary-50
      padding: 0 2em 2em
      picture
        display: inline-block
        position: relative
        margin: -5em 0 -.5em
        width: 70%
        max-width: 200px
        border: 1px solid $color-secondary-300
        border-radius: 50%
        box-shadow: 0 2px 8px alpha(#000, 15%), 0 8px 50px alpha(#000, 5%)
        img
          display: block
          width: 100%
          border-radius: 50%
          object-fit: cover
      h4
        font-size: 1.5em
        line-height: .8
        margin: 1.5em 0 .5em
      h5
        font-size: 1em
        line-height: .9
        font-weight: 400
    @media(min-width: $breakpoint-tablet)
      flex-flow: row wrap
      .card
        flex: 0 1 calc(50% - 2em)
</style>
