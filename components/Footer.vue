<script>
import event from '~/content'

export default {
  name: 'Footer',
  components: {
    Logo: () => import('~/components/Logo')
  },
  data () {
    return {
      event
    }
  },
  methods: {
    backToTop () {
      document.querySelector('.menu .logo').click()
    }
  }
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <a class="logo" href="/" @click.prevent="backToTop"><logo class="inverse">Fatec Dev Day</logo></a>

      <p>
        © {{ event.edition.year }} <a href="http://www.fatectq.edu.br" target="_blank" rel="noopener">Fatec Taquaritinga</a>
        <br>Todos os direitos reservados
      </p>
    </div>
  </footer>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

.footer
  position: relative
  background: $color-secondary-50
  text-align: center
  padding: 4em 0 2em
  .logo
    display: inline-block
    width: 12em
  p
    font-size: .75em
    color: $text-color-secondary
  a
    color: $text-color-primary
    text-decoration: none
    &:hover, &:focus
      color: $color-primary-700
</style>
