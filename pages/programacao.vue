<script>
export default {
  name: 'Programacao',
  components: {
    Markdown: () => import('vue-markdown'),
    MainMenu: () => import('~/components/Menu')
  },
  computed: {
    state () {
      return this.$store.state
    },

    talks () {
      return this.$store.state.activities.talks.filter(i => i !== false)
    },

    liveCodings () {
      return this.$store.state.activities.liveCodings.filter(i => i !== false)
    }
  }
}
</script>

<template>
  <section class="page">
    <main-menu />

    <div class="container">
      <h2 class="separator">Programação</h2>
      <p class="important">Estamos acertando alguns detalhes técnicos. O horário das atividades ainda será divulgado!</p>
      <p>Fique por dentro da programação deste dia e não perca as atividades de seu interesse.
        Vale lembrar que há 100 lugares nas <i>talk session</i>, com palestras distribuídas ao longo do dia, e 40 lugares nas <i>live coding session</i>, sendo uma sessão pela manhã e outra à tarde.
        Portanto, há vaga garantida para todos os participantes em uma das salas em atividades concomitantes, mas não há vaga reservada para troca de sala durante uma atividade em andamento.</p>

      <div class="talk-sessions">
        <h3 class="separator">Talk Sessions</h3>

        <ol class="schedule">
          <li v-for="talk of talks" :key="talk.id">
            <div class="timeline">
              <i v-if="talk.icon" class="material-icons circle">{{ talk.icon }}</i>
              <picture v-if="talk.speaker && talk.speaker.avatar" class="circle"><img :src="talk.speaker.avatar" :alt="talk.speaker.name"></picture>
            </div>

            <div class="schedule-info">
              <h4 class="time" v-if="talk.time"><i class="material-icons">access_time</i> {{ talk.time }}</h4>
              <h3 class="title">{{ talk.title }}<small v-if="talk.subtitle" class="subtitle">: {{ talk.subtitle }}</small></h3>
              <markdown class="description" v-if="talk.description" :source="talk.description" />
              <nuxt-link class="speaker" v-if="talk.speaker" to="/convidados"><i class="material-icons">mic</i> {{ typeof talk.speaker === 'string' ? talk.speaker : talk.speaker.name }}</nuxt-link>
            </div>
          </li>
        </ol>
      </div>

      <div class="live-coding-sessions">
        <h3 class="separator">Live Coding Sessions</h3>

        <ol class="schedule">
          <li v-for="talk of liveCodings" :key="talk.id">
            <div class="timeline" v-show="talk.icon">
              <i v-show="talk.icon" class="material-icons circle">{{ talk.icon }}</i>
            </div>

            <div class="timeline" v-show="talk.speaker && talk.speaker.avatar">
              <picture class="circle"><img :src="talk.speaker.avatar" :alt="talk.speaker.name"></picture>
            </div>

            <div class="schedule-info">
              <h4 class="time" v-if="talk.time"><i class="material-icons">access_time</i> {{ talk.time }}</h4>
              <h3 class="title">{{ talk.title }}<small v-if="talk.subtitle" class="subtitle">: {{ talk.subtitle }}</small></h3>
              <markdown class="description" v-if="talk.description" :source="talk.description" />
              <nuxt-link class="speaker" v-if="talk.speaker" to="/convidados"><i class="material-icons">mic</i> {{ typeof talk.speaker === 'string' ? talk.speaker : talk.speaker.name }}</nuxt-link>
            </div>
          </li>
        </ol>
      </div>

      <div class="action-buttons">
        <div class="buttons">
          <nuxt-link to="/sobre" class="button">Sobre o evento</nuxt-link>
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
  .container > div
    width: 100%
  h3
    margin: 3em 0 0
  .schedule
    background: #fff
    box-shadow: 0 5px 20px rgba($color-secondary-100, 25%)
    list-style: none
    margin: 0
    padding: 0 2em
    li
      display: flex
      border-left: 1px solid $color-primary-100
      padding: 2em 0
      margin-left: 2em
      &:first-of-type
        padding-top: 5em
      &:last-of-type
        padding-bottom: 5em
    .timeline
      margin-left: -2em
      .circle
        background: $color-primary
        border-color: $color-primary-900
        color: $text-color-inverse-primary
        font-size: 2.5em
    .schedule-info
      text-align: left
      padding-left: 2em
      .material-icons
        vertical-align: bottom
      .time
        font-size: 1em
        color: $color-primary-700
      .title
        font-size: 1.75em
        line-height: .75
        margin: .5em 0 0
        small
          font-weight: 400
      .description
        margin: 0 0 .5em
      .speaker
        margin: 0 -6px
        color: $color-primary
        font-family: $font-secondary
        text-decoration: none
        font-weight: 600
    @media (max-width: $breakpoint-tablet - 1px)
      li
        display: block
        border-left: none
        margin-left: 0
        .timeline
          float: left
          margin: 0 1em 1.25em 0
          .circle
            font-size: 1.5em
        .schedule-info
          padding-left: 0
          .title
            font-size: 1.375em
            line-height: 1
            word-wrap: break-word
</style>
