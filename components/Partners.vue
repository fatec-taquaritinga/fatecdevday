<script>
export default {
  name: 'Sponsors',
  props: {
    partners: Object,
    team: Array
  },
  computed: {
    sponsors () {
      return this.partners ? this.partners.sponsors : null
    },

    supporters () {
      return this.partners ? this.partners.supporters : null
    }
  }
}
</script>

<template>
  <section class="partners">
    <div class="container" v-if="sponsors || supporters">
      <h2 class="separator">Patrocínio</h2>

      <div class="sponsors">
        <article v-if="sponsors && sponsors.gold && sponsors.gold.length" class="gold">
          <h3>Gold</h3>

          <div>
            <a v-for="sponsor in sponsors.gold" :key="sponsor.id" :href="sponsor.url" target="_blank">
              <img :src="sponsor.logo" :title="sponsor.name">
            </a>
          </div>
        </article>

        <article v-if="sponsors && sponsors.silver && sponsors.silver.length" class="silver">
          <h3>Silver</h3>

          <div>
            <a v-for="sponsor in sponsors.silver" :key="sponsor.id" :href="sponsor.url" target="_blank">
              <img :src="sponsor.logo" :title="sponsor.name">
            </a>
          </div>
        </article>

        <article v-if="sponsors && sponsors.bronze && sponsors.bronze.length" class="bronze">
          <h3>Bronze</h3>

          <div>
            <a v-for="sponsor in sponsors.bronze" :key="sponsor.id" :href="sponsor.url" target="_blank">
              <img :src="sponsor.logo" :title="sponsor.name">
            </a>
          </div>
        </article>
      </div>

      <article v-if="supporters && supporters.length" class="supporters">
        <h3>Apoio</h3>

        <div>
          <a v-for="supporter in supporters" :key="supporter.id" :href="supporter.url" target="_blank">
            <img :src="supporter.logo" :title="supporter.name">
          </a>
        </div>
      </article>
    </div>

    <div class="container team" v-if="team">
      <h2 class="separator">Organização</h2>

      <article>
        <div>
          <a href="http://www.fatectq.edu.br/" target="_blank"><img src="~/assets/fatec.svg" alt="Fatec Taquaritinga"></a>
          <a href="http://www.fatectq.edu.br/analise-e-desenvolvimento-de-sistemas" target="_blank"><img src="~/assets/ads.svg" alt="Análise e Desenvolvimento de Sistemas"></a>
          <a href="http://www.fatectq.edu.br/sistemas-para-internet" target="_blank"><img src="~/assets/si.svg" alt="Sistemas para Internet"></a>
        </div>
      </article>

      <div>
        <h3>Equipe</h3>
        <ul>
          <li v-for="(member, index) of team" :key="index">{{ member }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

h2
  font-size: 2em

article
  margin-top: 4rem
  h3
    font-size: .75em
    margin-bottom: .5em
  div
    display: flex
    flex-flow: row wrap
    justify-content: center
    align-items: center
  a, img
    display: block
  a
    margin: 0 5px
    border-radius: 2px
    padding: 1rem
    @media(min-width: $breakpoint-tablet)
      padding: 1rem 1.75rem
    &:hover, &:focus
      background: @color
      img
        filter: invert() grayscale(100%) brightness(300%)
  img
    height: 2em
    object-fit: scale-down

@media(min-width: $breakpoint-tablet)
  .sponsors
    display: flex

.gold
  color: $color-gold
  a
    font-size: 3.5em
    &:hover, &:focus
      background: @color

.silver
  color: $color-silver
  a
    font-size: 1.5em
    &:hover, &:focus
      background: @color

.bronze
  color: $color-bronze
  a
    font-size: 1em
    &:hover, &:focus
      background: @color

.supporters
  font-weight: 400
  a:hover, a:focus
    background: $color-secondary

.team
  article
    margin-top: 1em
    font-size: 2.5em
    a
      padding: 0 .25em .5em
    a:hover, a:focus
      background: $color-secondary
    img
      margin: .75em .5em 0
  & > div
    margin-top: 5em
    ul
      margin: 2em 0 0
      padding: 0
      list-style: none
      li
        display: inline-block
        margin: 0 1em
</style>
