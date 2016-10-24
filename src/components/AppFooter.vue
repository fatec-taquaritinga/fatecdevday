<script>
import Logo from './Logo'

export default {
  name: 'Footer',
  components: {
    Logo
  }
}
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <a class="logo" href="/" @click.prevent="navigate"><logo class="inverse">Fatec Dev Day</logo></a>

      <p>
        © 2016 <a href="http://www.fatectq.edu.br" target="_blank">Fatec Taquaritinga</a>
        <br>Todos os direitos reservados
      </p>
    </div>
  </footer>
</template>

<style lang="stylus">
@import '../stylus/variables'

.app-footer
  position: relative
  background-image: unquote('linear-gradient(' + alpha($color-secondary-900, 0) + ', ' + $color-secondary-900 + ' 60px)')
  text-align: center
  padding: 6em 0 2em
  margin-top: -60px
  .logo
    display: inline-block
    width: 10em
    &:hover, &:focus
      .fatec, .year
        fill: lighten(#878787, 20%)
      .day
        fill: lighten($color-secondary, 20%)
      .brackets
        fill: lighten($color-primary, 30%)
      .dev
        fill: lighten(red, 15%)
  p
    font-size: .75em
    color: $text-color-inverse-secondary
  a
    color: $text-color-inverse-primary
    text-decoration: none
    &:hover, &:focus
      color: $color-primary-100
</style>
