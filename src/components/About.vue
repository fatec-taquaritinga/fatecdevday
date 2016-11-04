<script>
import Logo from './Logo'
import event from '../data/event'

export default {
  name: 'About',
  components: {
    Logo
  },
  data() {
    return {
      when: event.when,
      soldOut: event.soldOut
    }
  }
}
</script>

<template>
  <section id="sobre" v-scrolled="'sobre'">
    <div class="container">
      <div>
        <h2 class="logo"><logo>O evento</logo></h2>

        <h3>Um dia dedicado a desenvolvimento</h3>
        <h4>Web, aplicativos e sistemas em geral</h4>

        <p class="important">
          O sábado de <strong>5 de novembro de 2016</strong> <template v-if="when.future">não será</template><template v-if="when.present">não está sendo</template><template v-if="when.past">não foi</template> um dia qualquer: a <a href="http://www.fatectq.edu.br/" target="_blank">Faculdade de Tecnologia de Taquaritinga</a> <template v-if="when.future">sediará</template><template v-if="when.present">está sediando</template><template v-if="when.past">sediou</template> o primeiro encontro para discussão das últimas tendências sobre tecnologias voltadas para o desenvolvimento de sistemas e aplicativos, o <strong>Fatec Dev Day 2016</strong>. Esta primeira edição, organizada em uma parceria entre os cursos de <a href="http://www.fatectq.edu.br/analise-e-desenvolvimento-de-sistemas" target="_blank">Análise e Desenvolvimento de Sistemas</a> e de <a href="http://www.fatectq.edu.br/sistemas-para-internet" target="_blank">Sistemas para Internet</a> da instituição, <template v-if="when.future">trará</template><template v-if="when.present">trouxe</template><template v-if="when.past">trouxe</template> profissionais de destaque para falar de novidades em <em>Desenvolvimento Web e Mobile</em>, <em>Progressive Web Apps</em>, <em>Single Page Applications</em>, <em>Microservices</em>, <em>Machine Learning</em>, <em>User Experience</em>, <em>Internet of Things</em>, dentre outros assuntos de grande interesse a profissionais e estudantes da área.
        </p>
        <p>
          O evento <template v-if="when.future">será</template><template v-if="when.present">é</template><template v-if="when.past">foi</template> distribuído em várias palestras, com duração aproximada de uma hora cada ao longo do sábado. No final, <template v-if="when.future">ocorrerão</template><template v-if="when.present">ocorrem</template><template v-if="when.past">ocorreram</template> <em>sorteios</em> com distribuição de descontos em cursos, livros, <i>squeezes</i>, etc. Os palestrantes foram escolhidos por suas experiências profissionais e seus conhecimentos destacados nos temas respectivos, propiciando-se oportunidade ímpar de aperfeiçoamento aos profissionais e estudantes que vierem ao evento. Ressalta-se que este é um evento multi-linguagem, não sendo focado em apenas uma linguagem de programação, mas em diferentes técnicas e tecnologias que estão emergindo ou ganhando maior destaque no mercado tecnológico de desenvolvimento, tanto localmente nas regiões de Taquaritinga, Araraquara e Ribeirão Preto, como no país e no mundo.
        </p>

        <div class="buttons">
          <a v-if="when.future && !soldOut" href="https://www.eventbrite.com.br/e/fatec-dev-day-2016-tickets-28533957836" target="_blank" class="button primary"><i class="material-icons">playlist_add_check</i> Garanta seu lugar</a>

          <a @click.prevent="navigate('/#agenda')" class="button"><i class="material-icons">access_time</i> Ver agenda</a>

          <a v-if="when.past" @click.prevent="navigate('/#patrocinio')" class="button primary"><i class="material-icons">thumb_up</i> Agradecimentos</a>

          <a v-if="when.present || (soldOut && when.future)" @click.prevent="navigate('/#local')" class="button primary"><i class="material-icons">my_location</i> Como chegar?</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../stylus/variables'

#sobre
  position: relative
  background: #fff
  box-shadow: 0 4px 10px alpha(#000, 12%), 0 8px 50px alpha(#000, 4%)
  .logo
    display: inline-block
    width: 90%
    max-width: 7em
  p
    font-size: 1.125em
  .important
    font-weight: 700
    margin-top: 2.5em
    strong
      color: $color-primary-900
  h4
    margin-top: -.25em
  .button
    margin: 1em 1em 0

@media (max-width: $breakpoint-tablet - 1px)
  #sobre
    .logo
      width: 90%
      max-width: 7em
    h3
      font-size: 2em
    h4
      display: none
</style>
