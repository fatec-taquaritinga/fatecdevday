<script>
import marked from 'marked'
import speakers from '../data/speakers'

export default {
  data() {
    return {
      speakers: speakers.sort((a, b) => a.name.localeCompare(b.name))
    }
  },
  computed: {
    spplitedSpeakers() {
      const length = this.speakers.length

      if (length % 2 === 0) {
        return this.speakers
      } else {
        const result = []

        result.push(this.speakers.slice(0, 2))
        result.push(this.speakers.slice(2, 5))
        result.push(this.speakers.slice(5, 7))

        return result
      }
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
  <section id="palestrantes" v-scrolled="'palestrantes'">
    <div class="container">
      <h2 class="separator">Palestrantes</h2>
      <p>Profissionais de destaque, com experiências relevantes para compartilhar.</p>

      <div class="cards" v-for="speakersGroup of spplitedSpeakers">
        <div class="card" v-for="speaker of speakersGroup">
          <picture>
            <img :src="speaker.avatar" :alt="speaker.name">
          </picture>

          <h3>{{ speaker.name }}</h3>

          <h4 v-if="speaker.job">
            <span>{{ speaker.job.title }}</span><br>

            <a v-if="speaker.job.url" :href="speaker.job.url" target="_blank">{{ speaker.job.company }}</a>
            <span v-else>{{ speaker.job.company }}</span>
          </h4>

          <p v-if="speaker.bio" v-html="markdown(speaker.bio)"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

#palestrantes
  background: $color-secondary-50
  .cards
    display: flex
    flex-flow: column
    justify-content: center
    margin: 0 -1em
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
        font-size: 1.75em
        line-height: .8
        margin-bottom: .5em
      h4
        font-size: 1.2em
        line-height: .9
        font-weight: 400
    @media(min-width: $breakpoint-tablet)
      flex-flow: row wrap
      .card
        flex: 0 0 calc(70% - 2em)
    @media(min-width: $breakpoint-desktop)
      .card
        flex: 0 0 calc(33.3333% - 2em)
</style>
