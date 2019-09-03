<script>
import speakers from '~/content/speakers'

export default {
  name: 'Layout-Speakers',
  data () {
    return {
      commingSoon: false,
      speakers: speakers.map((obj, i) => Object.assign({ index: i, showBio: false }, obj))
    }
  },
  methods: {
    path (avatar) {
      return '/persons/' + avatar
    },

    toggleBio (item, visible) {
      item.showBio = visible
    }
  }
}
</script>

<template>
  <section id="palestrantes" class="container in-menu">
    <div class="gutter">
      <h3>Palestrantes</h3>

      <p>
        Palestrantes escolhidos por suas experiências profissionais e seus conhecimentos destacados nos temas respectivos.
        Este é um evento multi-linguagem, não focando em apenas um ecossistema de programação, mas em diferentes técnicas e tecnologias que estão emergindo ou ganhando maior destaque no mercado.
      </p>

      <div class="cards">
        <div class="card" v-for="person of speakers" :key="person.id" v-if="person.name">
          <transition name="slide-fade" mode="out-in">
            <div key="main-info" class="main-info" v-if="!person.showBio">
              <picture v-if="person.avatar" @click="toggleBio(person, true)">
                <img :src="person.avatar" :alt="person.name">
              </picture>

              <h4>{{ person.name }}</h4>

              <h5 v-if="person.job">
                <span>{{ person.job.title }}</span><br>
                <a v-if="person.job.url" :href="person.job.url" target="_blank" rel="noopener">{{ person.job.company }}</a>
                <span v-else>{{ person.job.company }}</span>
              </h5>

              <div class="social" v-if="person.social">
                <a v-if="person.social.linkedin" :href="`https://www.linkedin.com/in/${ person.social.linkedin }/`" target="_blank" rel="noopener">
                  <img src="~assets/icons/linkedin.svg" alt="Linkedin">
                </a>
                <a v-if="person.social.github" :href="`https://github.com/${ person.social.github }`" target="_blank" rel="noopener">
                  <img src="~assets/icons/github.svg" alt="Github">
                </a>
                <a v-if="person.social.twitter" :href="`https://twitter.com/${ person.social.twitter }`" target="_blank" rel="noopener">
                  <img src="~assets/icons/twitter.svg" alt="Twitter">
                </a>
                <button @click="toggleBio(person, true)">Saiba mais</button>
              </div>
            </div>

            <div key="bio-details" class="bio-details" v-else>
              <h4>{{ person.name }}</h4>
              <p v-if="person.bio">{{ person.bio }}</p>
              <button @click="toggleBio(person, false)">Voltar</button>
            </div>
          </transition>

          <noscript v-if="person.bio">{{ person.bio }}</noscript>
        </div>

        <div class="card comming" v-if="commingSoon">
          <div>
            <h4>Em Breve</h4>
            <p>Mais informações<br>sobre palestrantes</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../../stylus/variables'

.container
  background: $color-secondary-50
  .gutter > p
    padding: 0 6vw

.cards
  display: flex
  justify-content: center
  flex-flow: row wrap
  gap: 2em
  margin-bottom: 3em

.card
  font-size: .875em
  margin: 9em 1em -2em
  background: #fff
  padding: 0 2em 2em
  flex: 1 0 280px
  max-width: 280px
  @media (min-width: $breakpoint-desktop)
    flex-basis: 294px
    max-width: 380px
  picture
    display: inline-block
    position: relative
    margin: -5em 0 -.5em
    width: 75%
    max-width: 220px
    border: 1em solid $color-secondary-50
    border-radius: 50%
    cursor: pointer
    overflow: hidden
    img
      display: block
      width: 100%
      border-radius: 50%
      object-fit: cover
      box-shadow: inset 0 0 10px $color-secondary-900
      transform-origin: top
      transition: all .25s ease
    &:hover img
      transform: scale(1.05)
      filter: sepia(.25)
  h4
    font-size: 1.5em
    line-height: .8
    margin: 1.5em 0 .5em
  h5
    font-size: 1em
    line-height: 1
    font-weight: 400
    color: $color-secondary-300

.social
  display: inline-flex
  margin-top: 1em
  a
    padding: 2px
    margin: 2px
  img
    display: block
    width: 1.5em
    height: 1.5em

button
  margin-left: 8px
  color: $color-secondary-300
  border-color: $color-secondary-100
  background: transparent
  z-depth 0
  &:hover, &:focus
    background: @border-color
    outline: none
    color: #fff
    z-depth 2

.bio-details
  font-size: .925em
  button
    margin-top: 1.25em

.card.comming
  background: $color-secondary-100
  display: flex
  align-items: center
  justify-content: center
  color: $color-secondary-300
  margin-top: 5em
  h4
    color: $color-secondary
  @media (min-width: $breakpoint-desktop-hd)
    margin-top: 9em

.slide-fade-enter-active
  transition: all .5s ease

.slide-fade-leave-active
  transition: all .3s cubic-bezier(1.0, .5, .8, 1.0)

.slide-fade-enter
  transform: translateX(10px)
  opacity: 0

.slide-fade-leave-to
  transform: translateX(-20px)
  opacity: 0
</style>
