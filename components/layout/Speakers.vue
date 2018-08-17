<script>
export default {
  name: 'Layout-Speakers',
  computed: {
    talks () {
      return this.$store.state.talks.map(obj => {
        obj.showBio = false
        return obj
      })
    }
  },
  methods: {
    path (avatar) {
      return '/persons/' + avatar
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
        <div class="card" v-for="person of talks" :key="person.id" v-if="person.name">
          <div key="main-info" class="main-info" v-show="!person.showBio">
            <picture v-if="person.avatar" @click="person.showBio = true">
              <img :src="path(person.avatar)" :alt="person.name">
            </picture>

            <h4>{{ person.name }}</h4>

            <h5 v-if="person.job">
              <span>{{ person.job.title }}</span><br>

              <a v-if="person.job.url" :href="person.job.url" target="_blank">{{ person.job.company }}</a>
              <span v-else>{{ person.job.company }}</span>
            </h5>

            <div class="social" v-if="person.social">
              <a v-if="person.social.linkedin" :href="`https://www.linkedin.com/in/${ person.social.linkedin }/`" target="_blank">
                <img src="~/assets/logo-linkedin.svg" alt="Linkedin">
              </a>

              <a v-if="person.social.github" :href="`https://github.com/${ person.social.github }`" target="_blank">
                <img src="~/assets/logo-github.svg" alt="Github">
              </a>

              <a v-if="person.social.twitter" :href="`https://twitter.com/${ person.social.twitter }`" target="_blank">
                <img src="~/assets/logo-twitter.svg" alt="Twitter">
              </a>

              <button key="main-info-button" @click="person.showBio = true">Saiba mais</button>
            </div>
          </div>

          <div key="bio-details" class="bio-details" v-show="person.showBio">
            <h4>{{ person.name }}</h4>
            <p v-if="person.bio">{{ person.bio }}</p>
            <button @click="person.showBio = false">Voltar</button>
          </div>
        </div>

        <div class="card comming">
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
  @media (min-width: $breakpoint-desktop)
    flex-basis: 294px
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
  &:hover, &:focus
    background: @border-color
    outline: none
    color: #fff

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
</style>
