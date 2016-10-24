<script>
import event from '../data/event'
import sponsors from '../data/sponsors'

export default {
  data() {
    return {
      team: event.team.sort((a, b) => a.localeCompare(b)),
      sponsors
    }
  },
  mounted() {
    const self = this
    document.addEventListener('scroll', () => {
      const hash = window.location.hash.replace('#', '')
      const element = document.getElementById(self.hash)
      if (element && element.isScrolledTop() && hash !== self.hash) {
        window.history.replaceState(null, null, `/#${self.hash}`)
      }
    })
  },
  destroyed() {
    document.removeEventListener('scroll')
  }
}
</script>

<template>
  <section id="patrocinio" v-scrolled="'patrocinio'">
    <div class="container">
      <h2 class="separator">Patrocínio</h2>
      <p>
        Sem a ajuda destes incríveis parceiros o Fatec Dev Day 2016 não aconteceria.
      </p>

      <article v-if="sponsors.gold && sponsors.gold.length" class="gold">
        <h3>Gold</h3>

        <div>
          <a v-for="sponsor in sponsors.gold" :href="sponsor.url" target="_blank">
            <img :src="sponsor.logo" :title="sponsor.name">
          </a>
        </div>
      </article>

      <article v-if="sponsors.silver && sponsors.silver.length" class="silver">
        <h3>Silver</h3>

        <div>
          <a v-for="sponsor in sponsors.silver" :href="sponsor.url" target="_blank">
            <img :src="sponsor.logo" :title="sponsor.name">
          </a>
        </div>
      </article>

      <article v-if="sponsors.bronze && sponsors.bronze.length" class="bronze">
        <h3>Bronze</h3>

        <div>
          <a v-for="sponsor in sponsors.bronze" :href="sponsor.url" target="_blank">
            <img :src="sponsor.logo" :title="sponsor.name">
          </a>
        </div>
      </article>

      <article v-if="sponsors.backers && sponsors.backers.length" class="backers">
        <h3>Apoio</h3>

        <div>
          <a v-for="sponsor in sponsors.backers" :href="sponsor.url" target="_blank">
            <img :src="sponsor.logo" :title="sponsor.name">
          </a>
        </div>
      </article>
    </div>

    <div class="container organizers">
      <h2 class="separator">Organização</h2>
      <p>
        Responsáveis pela idealização e pela organização do Fatec Dev Day 2016.
      </p>

      <article>
        <div>
          <a href="http://www.fatectq.edu.br/analise-e-desenvolvimento-de-sistemas" target="_blank"><img src="../assets/logo-ads.svg" alt="Análise e Desenvolvimento de Sistemas"></a>
          <a href="http://www.fatectq.edu.br/sistemas-para-internet" target="_blank"><img src="../assets/logo-si.svg" alt="Sistemas para Internet"></a>
          <a href="http://www.fatectq.edu.br/" target="_blank"><img src="../assets/logo-fatec.svg" alt="Fatec Taquaritinga"></a>
        </div>
      </article>

      <div class="team">
        <h3>Equipe</h3>
        <ul>
          <li v-for="member of team">{{ member }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

#patrocinio
  min-height: 900px
  background: #fff
  article
    margin-top: 4rem
    div
      display: flex
      flex-flow: row wrap
      justify-content: center
      align-items: center
    a, img
      display: block
    a
      margin: 0 5px
      padding: 1rem 1.5rem
      border-radius: 2px
      &:hover, &:focus
        background: @color
        img
          filter: invert() grayscale(100%) brightness(300%)
    img
      height: 2em
  .gold
    font-size: 3em
    color: $color-gold
    a:hover, a:focus
      background: @color
  .silver
    font-size: 1.75em
    color: $color-silver
    a:hover, a:focus
      background: @color
  .bronze
    font-size: 1.375em
    color: $color-bronze
    a:hover, a:focus
      background: @color
  .backers
    font-size: 1.375em
    font-weight: 400
    a:hover, a:focus
      background: $color-secondary
  .organizers
    padding-top: 8em
    article
      margin-top: 1em
      font-size: 2.5em
      a
        padding: 0 .25em .5em
      a:hover, a:focus
        background: $color-secondary
      img
        margin: .75em .5em 0
  .team
    margin-top: 5em
    ul
      margin: 2em 0 0
      padding: 0
      list-style: none
      li
        display: inline-block
        margin: 0 1em
</style>
