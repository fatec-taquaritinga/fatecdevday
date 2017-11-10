<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Programacao',
  components: {
    Markdown: () => import('vue-markdown'),
    MainMenu: () => import('~/components/Menu')
  },
  computed: {
    ...mapGetters([ 'willHappen', 'isToday', 'hasPassed', 'soldOut' ]),

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
      <p v-if="willHappen || isToday">Fique por dentro da programação deste dia e não perca as atividades de seu interesse.</p>
      <p><span v-if="willHappen">Haverão</span><span v-else-if="isToday">Temos</span><span v-else-if="hasPassed">Houveram</span> {{ state.places.talks }} lugares nas <i>talk session</i>, com palestras distribuídas ao longo do dia, e {{ state.places.liveCodings }} lugares nas <i>live coding session</i>, cada sessão em um período.
        <span v-if="!hasPassed">Portanto, há vaga garantida para todos os participantes em uma das salas, mas não há vaga reservada para troca de sala durante uma atividade em andamento.</span></p>

      <div class="talk-sessions">
        <h3 class="separator">Talk Sessions</h3>

        <ol class="schedule">
          <li v-for="talk of talks" :key="talk.id">
            <div class="timeline" v-if="talk.icon">
              <i v-show="talk.icon" class="material-icons circle">{{ talk.icon }}</i>
            </div>
            <div class="timeline" v-else-if="talk.speaker && talk.speaker.avatar">
              <picture class="circle"><img :src="talk.speaker.avatar" :alt="talk.speaker.name"></picture>
            </div>
            <div class="timeline stack" v-else-if="talk.speakers">
              <picture class="circle" v-for="speaker of talk.speakers" :key="speaker.id"><img :src="speaker.avatar" :alt="speaker.name"></picture>
            </div>

            <div class="schedule-info">
              <h4 class="time" v-if="talk.time"><i class="material-icons">access_time</i> {{ talk.time }}</h4>
              <h3 class="title">{{ talk.title }}<small v-if="talk.subtitle" class="subtitle">: {{ talk.subtitle }}</small></h3>
              <markdown class="description" v-if="talk.description" :source="talk.description" />
              <nuxt-link class="speaker" v-if="talk.speaker" to="/convidados"><i class="material-icons">mic</i> {{ typeof talk.speaker === 'string' ? talk.speaker : talk.speaker.name }}</nuxt-link>
              <nuxt-link class="speaker" v-else-if="talk.speakers" to="/convidados"><i class="material-icons">mic</i>
                <span v-for="(speaker, index) of talk.speakers" :key="speaker.id">
                  {{ speaker.name }}<span v-if="index < talk.speakers.length - 2">, </span>
                  <span v-else-if="index === talk.speakers.length - 2"> e </span>
                </span>
              </nuxt-link>
            </div>
          </li>
        </ol>
      </div>

      <div class="live-coding-sessions">
        <h3 class="separator">Live Coding Sessions</h3>

        <ol class="schedule">
          <li v-for="talk of liveCodings" :key="talk.id">
            <div class="timeline" v-if="talk.icon">
              <i v-show="talk.icon" class="material-icons circle">{{ talk.icon }}</i>
            </div>
            <div class="timeline" v-else-if="talk.speaker && talk.speaker.avatar">
              <picture class="circle"><img :src="talk.speaker.avatar" :alt="talk.speaker.name"></picture>
            </div>
            <div class="timeline stack" v-else-if="talk.speakers">
              <picture class="circle" v-for="speaker of talk.speakers" :key="speaker.id"><img :src="speaker.avatar" :alt="speaker.name"></picture>
            </div>

            <div class="schedule-info">
              <h4 class="time" v-if="talk.time"><i class="material-icons">access_time</i> {{ talk.time }}</h4>
              <h3 class="title">{{ talk.title }}<small v-if="talk.subtitle" class="subtitle">: {{ talk.subtitle }}</small></h3>
              <markdown class="description" v-if="talk.description" :source="talk.description" />
              <nuxt-link class="speaker" v-if="talk.speaker" to="/convidados"><i class="material-icons">mic</i> {{ typeof talk.speaker === 'string' ? talk.speaker : talk.speaker.name }}</nuxt-link>
              <nuxt-link class="speaker" v-else-if="talk.speakers" to="/convidados"><i class="material-icons">mic</i>
                <span v-for="(speaker, index) of talk.speakers" :key="speaker.id">
                  {{ speaker.name }}<span v-if="index < talk.speakers.length - 2">, </span>
                  <span v-else-if="index === talk.speakers.length - 2"> e </span>
                </span>
              </nuxt-link>
            </div>
          </li>
        </ol>
      </div>

      <div class="action-buttons">
        <div class="buttons">
          <nuxt-link to="/sobre" class="button">Sobre o evento</nuxt-link>

          <nuxt-link v-if="willHappen" to="/local" class="button">Onde será?</nuxt-link>
          <nuxt-link v-if="isToday" to="/almoco" class="button">Onde almoçar?</nuxt-link>
          <nuxt-link v-if="hasPassed" to="/local" class="button">Onde foi?</nuxt-link>

          <a v-if="!soldOut" :href="state.href" target="_blank" class="button primary">
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
      &.stack .circle
        margin-bottom: -8px
        position: relative
        &:nth-child(2)
          z-index: 1
        &:nth-child(3)
          z-index: 2
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
            border-width: 1px
          &.stack .circle
            margin-bottom: -.25em
        .schedule-info
          padding-left: 0
          .title
            margin-top: 0
            font-size: 1.375em
            line-height: 1
            word-wrap: break-word
</style>
