<script>
import event from '~/content'

export default {
  name: 'Layout-Sponsors',
  data () {
    return {
      sponsors: event.sponsors,
      team: event.team.slice().sort((a, b) => a.localeCompare(b))
    }
  }
}
</script>

<template>
  <section id="patrocinio" class="container">
    <div class="gutter">
      <div class="block">
        <h3>Patrocínio</h3>

        <article class="gold">
          <h4>Ouro</h4>

          <div v-if="sponsors.gold && sponsors.gold.length">
            <a v-for="sponsor in sponsors.gold" :key="sponsor.id" :href="sponsor.url" :title="sponsor.name" target="_blank" rel="noopener">
              <img :src="sponsor.logo" :alt="sponsor.name" :style="{ width: sponsor.width }">
            </a>
          </div>
          <div v-else>
            <a class="button" href="mailto:comunicacao@fatectq.edu.br?subject=Patrocinar o Fatec Dev Day 2018" rel="noopener">Seja um Patrocinador!</a>
          </div>
        </article>

        <article v-if="sponsors.silver && sponsors.silver.length" class="silver">
          <h4>Prata</h4>

          <div>
            <a v-for="sponsor in sponsors.silver" :key="sponsor.id" :href="sponsor.url" :title="sponsor.name" target="_blank" rel="noopener">
              <img :src="sponsor.logo" :alt="sponsor.name" :style="{ width: sponsor.width }">
            </a>
          </div>
        </article>

        <article v-if="sponsors.bronze && sponsors.bronze.length" class="bronze">
          <h4>Bronze</h4>

          <div>
            <a v-for="sponsor in sponsors.bronze" :key="sponsor.id" :href="sponsor.url" :title="sponsor.name" target="_blank" rel="noopener">
              <img :src="sponsor.logo" :alt="sponsor.name" :style="{ width: sponsor.width }">
            </a>
          </div>
        </article>
      </div>

      <div class="block backers">
        <h4>Apoio</h4>

        <article v-if="sponsors.backers && sponsors.backers.length">
          <div>
            <a v-for="backer in sponsors.backers"  :key="backer.id" :href="backer.url" :title="backer.name" target="_blank" rel="noopener">
              <img :src="backer.logo" :alt="backer.name" :style="{ width: backer.width }">
            </a>
          </div>
        </article>
      </div>

      <div class="block organizers">
        <h3>Organização</h3>

        <article>
          <div>
            <a href="http://www.fatectq.edu.br/analise-e-desenvolvimento-de-sistemas" target="_blank" rel="noopener">
              <img src="~/assets/logo-ads.svg" alt="Análise e Desenvolvimento de Sistemas">
            </a>
            <a href="http://www.fatectq.edu.br/sistemas-para-internet" target="_blank" rel="noopener">
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
  margin-top: 2rem
  div
    display: flex
    flex-flow: row wrap
    justify-content: center
    align-items: center
    margin-top: .75rem
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
    height: auto
    max-width: 100%

.gold
  font-size: 2.25em
  color: $color-gold
  margin-top: 2rem
  h4
    color: $color-gold
  a
    border: 5px solid transparent
  a:hover, a:focus
    background: $color-gold
    border-color: darken($color-gold, 15%)
  .button
    font-size: .875rem
    padding: .5em 1em
    color: $color-gold
    border: 2px solid $color-gold
    border-radius: 2px
    background: transparent
    margin-bottom: 1.5em
    &:hover, &:focus
      background: $color-gold
      color: #fff

.silver
  font-size: 2.25em
  color: $color-silver
  h4
    color: $color-silver
  a
    border: 5px solid transparent
  a:hover, a:focus
    background: $color-silver
    border-color: darken($color-silver, 15%)

.bronze
  font-size: 1.375em
  color: $color-bronze
  h4
    color: $color-bronze
  a
    border: 5px solid transparent
  a:hover, a:focus
    background: $color-bronze
    border-color: darken($color-bronze, 15%)

.backers
  margin-top: 5em
  font-size: .75em
  font-weight: 400
  a:hover, a:focus
    background: $color-secondary
  img
    max-width: 9em

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
      min-height: auto
      max-height: auto
      height: 1.325em

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
