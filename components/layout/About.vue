<script>
export default {
  name: 'Layout-About',
  methods: {
    goToAgenda () {
      document.querySelector('.menu a[href="#agenda"]').click()
    }
  }
}
</script>

<template>
  <section id="sobre" class="container two-columns in-menu">
    <div class="gutter">
      <h3>O que é <br class="hidden-on-large" /> <strong>Fatec Dev Day</strong>?</h3>

      <p>
        Realizado no segundo semestre de cada ano, o <strong>Fatec Dev Day</strong> é um evento dedicado a discutir o que há de <b>mais recente</b> nas tendências e tecnologias para o desenvolvimento de <b>sistemas</b> e de <b>aplicativos</b>. Trata-se de um dia inteiro de palestras e atrações, em que os estudantes e profissionais de Taquaritinga e região não apenas se atualizam sobre as novidades em TI, mas também podem <b>compartilhar conhecimento</b> e fazer contato com grandes profissionais do setor.
      </p>

      <p class="hidden-on-small">
        A <b>edição 2016</b> do <strong>Fatec Dev Day</strong> inaugurou esta tradição anual com palestras relacionadas a Angular 2 e TypeScript, aplicações <i>Web</i> modernas com Laravel, arquitetura de microserviços em Java, Bots e Machine Learning, Internet das Coisas (<i>IoT</i>), introdução ao Docker, <i>mobile</i> e <i>Progressive Web Apps</i> (<i>PWA</i>). Na <b>edição 2017</b>, os participantes puderem acompanhar <i>talks</i> realacionadas a assuntos como <i>deploy</i> de aplicações usando Docker, implementação de <i>pick up line generators</i> com JavaScript, Inteligência Artificial e reconhecimento óptico com PHP, migração do Java para o Node, operações HTTP com Python, uso do React, além de uma sessão especial de <i>live coding</i>, em que os participantes puderam acompanhar, ao vivo, o desenvolvimento de um mesmo aplicativo em versões para Android e para iOS. Já a <b>edição 2018</b> abordou temas como desenvolvimento de <i>chat bots</i> utilizando IBM Watson, automação de testes de <i>software</i> com Selenium WebDriver, maximixação de resultados através de UX, desenvolvimento de aplicativos móveis com Flutter, conceitos de <i>machine learning</i>, criação de aplicações móveis nativas em Vue.js com NativeScript-Vue, aplicações REST em Go com Gin e GORM e aplicações <i>Web</i> com ASP.NET Core.
      </p>

      <p>
        <!-- A <b>edição 2019</b> do <strong>Fatec Dev Day</strong> acontecerá em <strong>9 de novembro</strong> e, assim como as edições anteriores, trará diversos profissionais renomados em suas áreas, apresentando temas e tecnologias de ponta no mercado de trabalho. -->
        <!-- A <b>edição 2019</b> do <strong>Fatec Dev Day</strong> está acontecendo hoje, <strong>9 de novembro</strong>! Assim como nas edições anteriores, recebemos diversos profissionais renomados em suas áreas, apresentando temas e tecnologias de ponta no mercado de trabalho. Está por aqui conosco? <a href="#agenda" @onclick.prevent="goToAgenda">Acompanhe a programação</a> e não perca nenhuma atividade de seu interesse. -->
        A <b>edição 2019</b> do <strong>Fatec Dev Day</strong> aconteceu em <strong>9 de novembro</strong> na <a href="http://www.fatectq.edu.br/" target="_blank" rel="noopener">Faculdade de Tecnologia de Taquaritinga</a> e, assim como nas edições anteriores, contou com diversos profissionais renomados em suas áreas, apresentando palestras relacionadas a Kotlin no desenvolvimento <i>back-end</i>, experiências práticas sobre DevOps, construção de algoritimo de Inteligência Artificial em Python, conceitos de programação funcional com Clojure, criação de aplicações móveis nativas com React Native e construção de um projeto Node.js utilizando o <i>framework</i> progressivo Nest.js.
      </p>

      <p>
        Se você esteve conosco, não se esqueça de contribuir oferecendo sua <a href="https://forms.gle/pwMXppAuGhVkeRvn7" target="_blank" rel="noopener">opinião sobre o evento</a>, para nos ajudar a construir um <strong>Fatec Dev Day</strong> cada vez melhor para a edição de 2020!
      </p>
    </div>

    <aside>
      <div class="photo photo-1"></div>
      <div class="photo photo-2"></div>
      <div class="photo photo-3"></div>
    </aside>
  </section>
</template>

<style lang="stylus" scoped>
.photo-1
  background-image: url('~assets/backgrounds/edition-2017-1.jpg')

.photo-2
  background-image: url('~assets/backgrounds/edition-2017-2.jpg')

.photo-3
  background-image: url('~assets/backgrounds/edition-2017-3.jpg')
</style>
