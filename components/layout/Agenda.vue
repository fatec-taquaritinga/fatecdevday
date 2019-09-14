<script>
import event from '~/content'
import agenda from '~/content/agenda'

export default {
  name: 'Layout-Agenda',
  data () {
    return {
      event,
      agenda
    }
  },
  props: {
    liked: {
      type: Object,
      default: null
    }
  }
}
</script>

<template>
  <section id="agenda" class="container in-menu">
    <div class="gutter">
      <h3>Agenda</h3>
      <p v-if="agenda.length === 0 || !event.scheduleCompleted">
        Em breve divulgaremos mais informações sobre as <i>talks</i><br>desta edição e a ordem prevista das atividades. Fique de olho!
      </p>
      <p v-else>
        Fique por dentro da programação do evento.<br>
        <i>Observação: a ordem pode sofrer alterações.</i>
      </p>

      <ol v-if="agenda.length" class="schedule">
        <li v-for="talk of agenda" :key="talk.id" :class="{ 'liked': liked && liked._id === talk.id }">
          <div class="timeline" v-if="talk.icon">
            <div class="circle icon"><img :src="talk.icon" :alt="talk.title"></div>
          </div>
          <div class="timeline" v-else-if="talk.speaker && talk.speaker.avatar">
            <picture class="circle" v-if="talk.speaker.avatar" @click="talk.speaker.bio ? toggleBio(person, true) : false" :class="talk.speaker.bio ? 'activable' : ''">
              <img v-if="!Array.isArray(talk.speaker.avatar)" :src="talk.speaker.avatar" :alt="talk.speaker.name">
              <source v-else v-for="avatar of talk.speaker.avatar" :key="avatar.type" :srcset="avatar.src"  :type="avatar.type" />
              <img v-if="Array.isArray(talk.speaker.avatar)" :src="talk.speaker.avatar[0].src" :alt="talk.speaker.name">
            </picture>
          </div>
          <div class="timeline stack" v-else-if="talk.speakers">
            <picture class="circle" v-for="speaker of talk.speakers" :key="speaker.id"><img :src="speaker.avatar" :alt="speaker.name"></picture>
          </div>
          <div class="timeline" v-else>
            <picture class="circle"><img src="~assets/persons/empty-avatar.png" alt="Foto indisponível"></picture>
          </div>

          <div class="schedule-info">
            <div class="label" v-if="talk.duration">{{ talk.duration }}</div>

            <h4 class="time" v-if="talk.time">
              <img src="~assets/icons/clock.svg" alt="Ícone de relógio">
              {{ talk.time }}
            </h4>
            <h3 v-if="talk.speaker || talk.speakers" class="title">{{ talk.title }}<small v-if="talk.subtitle" class="subtitle">: {{ talk.subtitle }}</small></h3>
            <h4 class="title" v-else>{{ talk.title }}</h4>
            <p class="description" v-if="talk.description">{{ talk.description }}</p>
            <code class="code" v-if="talk.code">{{ talk.code }}</code>
            <a href="#palestrantes" class="speaker" v-if="talk.speaker">
              <img src="~assets/icons/mic.svg" alt="Ícone de microfone">
              {{ typeof talk.speaker === 'string' ? talk.speaker : talk.speaker.name }}
            </a>
            <a href="#palestrantes" class="speaker" v-else-if="talk.speakers">
              <img src="~assets/icons/mic.svg" alt="Ícone de microfone">
              <span v-for="(speaker, index) of talk.speakers" :key="speaker.id">
                {{ speaker.name }}<span v-if="index < talk.speakers.length - 2">, </span>
                <span v-else-if="index === talk.speakers.length - 2"> e </span>
              </span>
            </a>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../../stylus/variables'

.container
  z-depth 8

.circle
  display: block
  font-size: 2.75em
  width: 1.5em
  height: 1.5em
  line-height: 1.25
  text-align: center
  background: radial-gradient(#fff, $color-secondary-50)
  color: $text-color-inverse-primary
  border: 2px solid alpha($color-primary-900, 40%)
  border-radius: 50%
  img
    display: block
    border-radius: 50%
    object-fit: cover
  &.icon
    display: flex
    align-items: center
    justify-content: center
    img
      width: 45%

.label
  position: absolute
  background: $color-primary
  border-radius: 6px
  padding: 2px 8px
  font-size: .75em
  color: #fff
  right: 2em

.schedule
  background: lighten($color-secondary-50, 90%)
  border: 1px solid lighten($color-secondary-50, 50%)
  box-shadow: 0 8px 20px rgba($color-secondary-50, 12%)
  list-style: none
  margin: 3em 0 0
  padding: 0 0 0 2em
  li
    position: relative
    display: flex
    border-left: 1px solid $color-primary-100
    padding: 20px 0 32px
    margin-left: 2em
    padding-right: 2em
    &:first-of-type
      padding-top: 50px
    &:last-of-type
      padding-bottom: 75px
    &:not(:last-of-type)
      border-bottom: 1px solid rgba(#5c5a55, 10%)
    &.likable
      cursor: pointer
      transition: background 250ms ease
      .title::after
        transition: all 250ms ease
        content: '★'
        margin-left: 4px
        color: alpha(#ffe200, 0)
        -webkit-text-stroke: 1px alpha(#ffe200, 0)
        text-stroke: 1px alpha(#ffe200, 0)
      &:hover
        background: mix(#fefeeb, lighten($color-secondary-50, 90%), 50%)
        .title::after
          color: alpha(#ffe200, 30%)
          -webkit-text-stroke: 1px #ffe200
          text-stroke: 1px #ffe200
    &.liked
      background: #fefeeb
      .title::after
        transition: all 250ms ease
        content: '★'
        margin-left: 4px
        color: #ffe200
        -webkit-text-stroke: 1px #ff9d0b
        text-stroke: 1px #ff9d0b
      &.likable:hover
        .title::after
          color: alpha(#ffe200, 10%)
          -webkit-text-stroke: 1px alpha(#ff9d0b, 10%)
          text-stroke: 1px alpha(#ff9d0b, 10%)
  .timeline
    margin-left: -2em
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
    min-height: 70px
    .time
      font-size: 1em
      font-weight: 400
      color: $color-primary-900
      display: inline-flex
      align-items: center
      height: 24px
      margin: 0
      img
        height: 1em
        margin-right: 5px
    .title
      font-size: 25px
      font-weight: 600
      line-height: 1
      margin-top: 0
      small
        font-weight: 400
    h4.title
      font-size: 23px
      font-weight: 500
    .description
      font-size: 17px
      line-height: 1.5
      margin: 0
      color: $color-secondary-900
    .speaker
      margin: 0 -6px
      color: $color-primary-700
      font-family: $font-secondary
      text-decoration: none
      font-weight: 600
      font-size: 14px
      display: inline-flex
      align-items: center
      height: 24px
      margin: 0
      img
        height: 1em
        margin-right: 5px
    .code
      color: #8f8080
  @media (max-width: $breakpoint-tablet - 1px)
    border-left: 1px solid $color-primary-100
    padding-left: 1em
    li
      display: block
      border-left: none
      margin-left: 0
      .timeline
        float: left
        margin: 0 1em 1.25em 0
        .circle
          border-width: 1px
          margin-left: -20px
        &.stack .circle
          margin-bottom: -.25em
      .schedule-info
        padding-left: 1em
        .title
          margin-top: 0
          word-wrap: break-word
</style>
