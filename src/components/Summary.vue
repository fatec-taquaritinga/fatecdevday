<script>
import speakers from '../data/speakers'

export default {
  name: 'Summary',
  data() {
    return {
      speakers: speakers.length
    }
  }
}
</script>

<template>
  <aside id="summary">
    <div class="summary">
      <div class="summary-item" tabindex="0" @click="navigate('sobre')">
        <picture>
          <i class="material-icons circle">insert_invitation</i>
        </picture>
        <div class="info">
          <h3>5 de novembro</h3>
          <span>05/11/2016 às 7h30</span>
        </div>
      </div>

      <div class="summary-item" tabindex="0" @click="navigate('local')">
        <picture>
          <i class="material-icons circle">location_on</i>
        </picture>
        <div class="info">
          <h3>Taquaritinga - SP</h3>
          <span>Fatec Taquaritinga</span>
        </div>
      </div>

      <div class="summary-item" tabindex="0" @click="navigate('palestrantes')">
        <picture>
          <i class="material-icons circle">mic</i>
        </picture>
        <div class="info">
          <h3>{{ speakers }} palestrantes</h3>
          <span>Somente especialistas.</span>
        </div>
      </div>

      <div class="summary-item" tabindex="0" @click="navigate('sobre')">
        <picture>
          <i class="material-icons circle">airline_seat_recline_extra</i>
        </picture>
        <div class="info">
          <h3>100 lugares</h3>
          <span>Corra para se inscrever!</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

#summary
  background: $color-secondary-50
  .summary
    padding: 1.5em .25em 0
    text-align: center
    @media (min-width: $breakpoint-tablet)
      display: flex
      flex-flow: row wrap
      justify-content: center
      .summary-item
        flex: 1 1 calc(50% - 2em)
    .summary-item
      display: inline-flex
      justify-content: center
      align-items: center
      text-align: left
      margin: 0 1em 1.5em
      padding: 1em 0
      border-radius: 2px
      cursor: pointer
      outline: none
      transition: background 250ms ease
      @media (min-width: $breakpoint-desktop)
        flex: 1 1 calc(25% - 2em)
      .circle
        margin-right: .75rem
      h3
        font-size: 1.25em
        font-weight: 400
        line-height: .85
      span
        font-size: .75em
        color: $text-color-secondary
      &:hover, &:focus
        background: $color-secondary-100
</style>
