<script>
export default {
  name: 'Layout-About'
}
</script>

<template>
  <section id="sobre" class="container two-columns in-menu">
    <div class="gutter">
      <h3>O que é <br class="hidden-on-large" /> <strong>Fatec Dev Day</strong>?</h3>

      <p>
        Realizado no segundo semestre de cada ano, o <strong>Fatec Dev Day</strong> é um
        evento dedicado a discutir o que há de <b>mais recente</b> nas tendências e
        tecnologias para o desenvolvimento de <b>sistemas</b> e de <b>aplicativos</b>.
        Trata-se de um dia inteiro de palestras e atrações, em que os estudantes e
        profissionais de Taquaritinga e região não apenas se atualizam sobre as
        novidades em TI, mas também podem <b>compartilhar conhecimento</b> e
        fazer contato com grandes profissionais do setor.
      </p>

      <p class="hidden-on-small">
        A <b>edição 2016</b> do <strong>Fatec Dev Day</strong> trouxe palestras
        relacionadas a Angular 2 e TypeScript, aplicações <i>web</i> modernas com Laravel,
        arquitetura de microserviços em Java, Bots e Machine Learning, Internet
        das Coisas (<i>IoT</i>), introdução ao Docker, <i>mobile</i> e <i>progressive web apps</i>. Já
        a <b>edição 2017</b> abordou temas como <i>deploy</i> de aplicações usando Docker,
        implementação de <i>pick up line generators</i> com JavaScript, Inteligência
        Artificial e reconhecimento óptico com PHP, migração do Java para o
        Node, operações HTTP com Python, uso do React, além de uma sessão
        especial de Live Coding, em que os participantes puderam acompanhar,
        ao vivo, o desenvolvimento de um aplicativo para Android e iOS.
      </p>

      <p>
        A <b>edição 2018</b> do <strong>Fatec Dev Day</strong> ocorreu neste dia
        <strong>10 de novembro</strong> e, assim como as das duas edições anteriores, foi um sucesso.
        Se você esteve conosco, relembre os palestrantes e as atividades que tivemos nesta página e
        contribua oferecendo sua <a href="https://goo.gl/forms/9emTsClhba6zro4E2"
          target="_blank" rel="noopener">opinião sobre o evento</a>, para nos ajudar
        a construir um <strong>Fatec Dev Day</strong> cada vez melhor!
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
  background-image: url('~/assets/backgrounds/edition-2017-1.jpg')

.photo-2
  background-image: url('~/assets/backgrounds/edition-2017-2.jpg')

.photo-3
  background-image: url('~/assets/backgrounds/edition-2017-3.jpg')
</style>
