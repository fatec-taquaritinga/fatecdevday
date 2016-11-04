<script>
import marked from 'marked'
import event from '../data/event'
import activities from '../data/activities'

export default {
  name: 'Schedule',
  data() {
    return {
      activities,
      when: event.when
    }
  },
  methods: {
    markdown(value) {
      return marked(value)
    }
  }
}
</script>

<template>
  <section id="agenda" v-scrolled="'agenda'">
    <div class="container">
      <h2 class="separator">Agenda</h2>
      <p v-if="when.future || when.present">
        Fique por dentro da programação deste dia e não perca nenhuma atividade.
      </p>
      <p v-else>
        Veja como foram as atividades do Fatec Dev Day 2016.
      </p>

      <ol class="schedule">
        <li v-for="activity of activities">
          <div class="timeline">
            <i v-if="activity.icon" class="material-icons circle">{{ activity.icon }}</i>
            <picture v-if="activity.speaker && activity.speaker.avatar" class="circle"><img :src="activity.speaker.avatar" :alt="activity.speaker.name"></picture>
          </div>

          <div class="schedule-info">
            <h4 class="time"><i class="material-icons">access_time</i> {{ activity.time }}</h4>
            <h3 class="title">{{ activity.title }}<small v-if="activity.subtitle">: {{ activity.subtitle }}</small></h3>
            <p class="description" v-if="activity.description" v-html="markdown(activity.description)"/>
            <h5 class="speaker" v-if="activity.speaker"><i class="material-icons">mic</i> {{ activity.speaker.name }}</h5>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

#agenda
  background: $color-secondary-50
  .schedule
    background: #fff
    list-style: none
    margin: 3em 0 0
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
        margin: .75em 0 0
        small
          font-weight: 400
      .description
        margin: 0
      .speaker
        margin: 0
        color: $color-primary
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
