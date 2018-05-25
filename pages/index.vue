<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Principal',
  components: {
    Logo: () => import('~/components/Logo'),
    Countdown: () => import('~/components/Countdown')
  },
  computed: {
    ...mapGetters([ 'willHappen', 'isToday' ]),

    state () {
      return this.$store.state
    }
  }
}
</script>

<template>
  <main id="index" class="page">
    <header id="featured" class="container featured limit-width">
      <h1><logo schema="light" :year="false">{{ state.name.long }}</logo></h1>

      <h2 class="hidden-on-large">{{ state.date.short }}</h2>
      <h2 class="hidden-on-small">{{ state.date.long }}</h2>

      <p>Um dia dedicado ao desenvolvimento <br /> web, aplicativos e sistemas em geral</p>

      <a class="button inverse" href="https://www.sympla.com.br/fatec-dev-day-2018__297415" target="_blank">Inscreva-se</a>
    </header>

    <countdown :target="state.date.full" :visible="willHappen" />

    <div class="parallax"></div>

    <hr />

    <div class="container two-columns">
      <div class="gutter">
        <h3>O que é <br class="hidden-on-large" /> <strong>Fatec Dev Day</strong>?</h3>

        <p>
          Realizado no segundo semestre de cada ano, o <strong>Fatec Dev Day</strong> é um
          evento dedicado a discutir o que há de <b>mais recente</b> nas tendências e
          tecnologias para o desenvolvimento de <b>sistemas</b> e de <b>aplicativos</b>.
          Trata-se de um dia inteiro de palestras e atrações, em que os estudantes e
          profissionais de Taquaritinga e região não apenas se atualizam das
          novidades em TI, mas também podem <b>compartilhar conhecimento</b> e
          fazer contato com grandes profissionais do setor.
        </p>

        <p class="hidden-on-small">
          A <b>edição 2016</b> do <strong>Fatec Dev Day</strong> trouxe palestras
          relacionadas a Angular 2 e TypeScript, aplicações <i>web</i> modernas com Laravel,
          arquitetura de microserviços em Java, Bots e Machine Learning, Internet
          das Coisas (<i>IoT</i>), introdução ao Docker, <i>mobile</i> e <i>progressive web apps</i>. Já
          a <b>edição 2017</b> abordou temas como deploy de aplicações usando Docker,
          implementação de <i>pick up line generators</i> com JavaScript, Inteligência
          Artificial e reconhecimento óptico com PHP, migração do Java para o
          Node, operações HTTP com Python, uso do ReactJS, além de uma sessão
          especial de Live Coding, em que os participantes puderam acompanhar,
          ao vivo, o desenvolvimento de um aplicativo para Android e iOS.
        </p>

        <p>
          A <b>edição 2018</b> do <strong>Fatec Dev Day</strong> já está marcada para
          <strong>10 de novembro</strong> e promete ser o mesmo sucesso das duas
          edições anteriores. Em breve traremos novidades aqui, fique ligado!
        </p>
      </div>

      <aside>
        <div class="photo photo-1"></div>
        <div class="photo photo-2"></div>
        <div class="photo photo-3"></div>
      </aside>
    </div>

    <hr />

    <div id="enroll" class="container enroll limit-width">
      <a class="button" href="https://www.sympla.com.br/fatec-dev-day-2018__297415" target="_blank">Inscreva-se</a>
      <p>Primeiro lote: <b>35 lugares</b>, ou até <b>29/06</b>.</p>
    </div>

    <footer class="footer">
      <div class="container">
        <a class="logo" href="/" @click.prevent="navigate"><logo class="inverse">Fatec Dev Day</logo></a>

        <p>
          © {{ state.edition.year }} <a href="http://www.fatectq.edu.br" target="_blank">Fatec Taquaritinga</a>
          <br>Todos os direitos reservados
        </p>
      </div>
    </footer>
  </main>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

.featured
  background: $background-primary
  min-height: 80vh
  display: flex
  flex-flow: column
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  &, h1, h2
    color: $text-color-inverse-primary
  h1
    font-size: 1.625em
    margin: 0
    width: 90%
    max-width: 20em
  h2
    font-weight: 700
    margin: .5em 0 0
    font-size: calc(1em + 1.5vw)
  p
    margin: 1.5em 0 0
    font-size: calc(.5em + 1.5vw)
  .button
    margin-top: 3em

.countdown
  z-depth-6dp()
  padding: 1em 0 1.25em
  background: $background-secondary
  position: relative
  z-index: 2

.parallax
  background: $color-secondary url('../assets/backgrounds/campus.jpg') 65% 75% \/ cover fixed
  min-height: 30vh

.enroll
  background: $background-secondary
  min-height: 40vh
  display: flex
  flex-flow: column
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  z-depth-1dp()
  p
    margin-top: 1.5em
    font-size: .875em
    font-weight: 300
    b
      font-weight: 500
      color: inherit

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

.photo-1
  background-image: url('~/assets/backgrounds/edition-2017-1.jpg')

.photo-2
  background-image: url('~/assets/backgrounds/edition-2017-2.jpg')

.photo-3
  background-image: url('~/assets/backgrounds/edition-2017-3.jpg')
</style>
