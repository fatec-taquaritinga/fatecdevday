<script>
import agenda from '~/content/agenda'

export default {
  name: 'Layout-Agenda',
  data () {
    return {
      agenda
    }
  }
}
</script>

<template>
  <section id="agenda" class="container in-menu">
    <div class="gutter">
      <h3>Agenda</h3>
      <p>
        Fique por dentro da programação confirmada. <i>Observação: a ordem não está definida.</i>
      </p>

      <ol class="schedule">
        <li v-for="talk of agenda" :key="talk.id">
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
            <p class="description" v-if="talk.description">{{ talk.description }}</p>
            <a href="#palestrantes" class="speaker" v-if="talk.speaker">
              <img src="~/assets/icons/mic.svg" alt="Ícone de um microfone">
              {{ typeof talk.speaker === 'string' ? talk.speaker : talk.speaker.name }}
            </a>
            <a href="#palestrantes" class="speaker" v-else-if="talk.speakers"><i class="material-icons">mic</i>
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
  background: $color-primary
  border-color: $color-primary-900
  color: $text-color-inverse-primary
  border: 3px solid $text-color-secondary
  border-radius: 50%
  img
    display: block
    border-radius: 50%
    object-fit: cover

.schedule
  background-color: lighten($color-secondary-50, 90%)
  background-image: linear-gradient(transparent, transparent 24px, rgba(#5c5a55, 10%) 24px)
  background-position: 0 0
  background-repeat: repeat
  background-size: 25px 25px
  border: 1px solid lighten($color-secondary-50, 50%)
  box-shadow: 0 5px 20px rgba($color-secondary-50, 25%)
  list-style: none
  margin: 3em 0 0
  padding: 0 2em
  li
    display: flex
    border-left: 1px solid $color-primary-100
    padding: 20px 0 32px
    margin-left: 2em
    &:first-of-type
      padding-top: 50px
    &:last-of-type
      padding-bottom: 75px
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
    .time
      font-size: 1em
      color: $color-primary-700
    .title
      font-size: 25px
      line-height: 1
      margin-top: 0
      small
        font-weight: 400
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
      line-height: 1
      img
        display: inline
        height: 14px
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
