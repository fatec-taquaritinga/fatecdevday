<script>
export default {
  name: 'Sponsors',
  computed: {
    sponsors () {
      return this.$store.state.sponsors
    },

    team () {
      const team = this.$store.state.team.slice()
      return team.sort((a, b) => a.localeCompare(b))
    }
  }
}
</script>

<template>
  <section id="patrocinio" class="container">
    <div class="gutter">
      <div class="block">
        <h3>Patrocínio</h3>

        <article v-if="sponsors.gold && sponsors.gold.length" class="gold">
          <!-- <h4>Gold</h4> -->

          <div>
            <a v-for="sponsor in sponsors.gold" :key="sponsor.id" :href="sponsor.url" target="_blank">
              <img :src="sponsor.logo" :title="sponsor.name">
            </a>
          </div>
        </article>

        <article v-if="sponsors.silver && sponsors.silver.length" class="silver">
          <!-- <h4>Silver</h4> -->

          <div>
            <a v-for="sponsor in sponsors.silver" :key="sponsor.id" :href="sponsor.url" target="_blank">
              <img :src="sponsor.logo" :title="sponsor.name">
            </a>
          </div>
        </article>

        <article v-if="sponsors.bronze && sponsors.bronze.length" class="bronze">
          <!-- <h4>Bronze</h4> -->

          <div>
            <a v-for="sponsor in sponsors.bronze" :key="sponsor.id" :href="sponsor.url" target="_blank">
              <img :src="sponsor.logo" :title="sponsor.name">
            </a>
          </div>
        </article>
      </div>

      <div class="block backers">
        <h4>Apoio</h4>

        <article v-if="sponsors.backers && sponsors.backers.length">
          <div>
            <a v-for="backer in sponsors.backers"  :key="backer.id" :href="backer.url" target="_blank">
              <img :src="backer.logo" :title="backer.name">
            </a>
          </div>
        </article>
      </div>

      <div class="block organizers">
        <h3>Organização</h3>

        <article>
          <div>
            <a href="http://www.fatectq.edu.br/analise-e-desenvolvimento-de-sistemas" target="_blank">
              <img src="~/assets/logo-ads.svg" alt="Análise e Desenvolvimento de Sistemas">
            </a>
            <a href="http://www.fatectq.edu.br/sistemas-para-internet" target="_blank">
              <img src="~/assets/logo-si.svg" alt="Sistemas para Internet">
            </a>
          </div>
        </article>

        <div class="team">
          <h4>Equipe</h4>
          <ul>
            <li v-for="(member, index) of team" :key="index">{{ member }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../../stylus/variables'

.container
  background-color: lighten($color-secondary-50, 75%)
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAR0lEQVQoU2NkQAMREX5SK1ZseoYuzogsAFOETTFcIbokOh+sEFkQF5sRmwQ2MaKsBmnEsBqb50BiKFajBwmy+1GCB5tCmGIAb2NKOq+gGDsAAAAASUVORK5CYII=')
  background-repeat: repeat

h3, h4
  color: $color-secondary
  font-size: 1.25rem
  font-weight: 500

article
  margin-top: 1rem
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
        filter: grayscale(100%) invert() contrast(0) brightness(500%)
  img
    height: 2em

.gold
  font-size: 3.5em
  color: $color-gold
  a:hover, a:focus
    background: @color

.silver
  font-size: 2.25em
  color: $color-silver
  a
    border: 5px solid transparent
  a:hover, a:focus
    background: @color
    border-color: darken(@color, 15%)

.bronze
  font-size: 1.375em
  color: $color-bronze
  a:hover, a:focus
    background: @color

.backers
  margin-top: 5em
  font-size: .875em
  font-weight: 400
  a:hover, a:focus
    background: $color-secondary

.organizers
  padding-top: 8em
  article
    margin-top: .5em
    font-size: 2.5em
    a
      padding: .25em .5em
    a:hover, a:focus
      background: $color-secondary
    img
      height: 1.5em

.team
  margin-top: 3em
  text-align: center
  ul
    display: inline-block
    margin: 1.25em 0 0
    padding: 0 15vw
    list-style: none
    li
      display: inline-block
      margin: 0 .75em
      font-size: .875em
</style>
