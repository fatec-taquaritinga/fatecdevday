import {
  brunoLichot,
  williamGrasel,
  richardJesus,
  wanderleyPanosso,
  ebersonOliveira,
  marcelSantos,
  lazaroMenezes
} from './speakers'

export default [
  {
    order: 1,
    icon: 'assignment_turned_in',
    time: '7h30 - 8h30',
    title: 'Credenciamento'
  },
  {
    order: 2,
    time: '8h20 - 9h30',
    title: 'Introdução ao Docker',
    description: 'Docker é a plataforma de “containerização” de software mais utilizada da atualidade, considerada sinônimo de aplicações distribuídas. A palestra abordará os princípios, vantagens e desvantagens do desenvolvimento de aplicações distribuídas em micro-serviços com Docker, percorrendo os conceitos básicos e a visão geral do ecossistema Docker, desde implementação de micro-serviços até orquestração de *containers* em *data centers*.',
    speaker: wanderleyPanosso
  },
  {
    order: 3,
    time: '9h30 - 10h40',
    title: 'Bots e Machine Learning',
    description: 'A área de inteligência artificial, mais especificamente em relação a assistentes pessoais, *bots* e aprendizagem de máquina, está fervilhando e dominando as conversas do Vale do Silício, da mídia de tecnologia e das feiras da área. A palestra abordará o que vem ocorrendo de mais inovador neste crescente, empolgante e promissor nicho da tecnologia da informação.',
    speaker: brunoLichot
  },
  {
    order: 4,
    time: '10h40 - 11h50',
    title: 'Mobile e Progressive Web Apps',
    subtitle: 'quando você não precisa de Nativo',
    description: 'O conceito de aplicativo progressivo começa como uma simples aba no navegador móvel, que se torna progressivamente "mais *app*” à medida em que você interage. Até chegar ao ponto onde basta você adicionar à sua tela inicial e pronto, adquire funções antes exclusivas de aplicativos nativos: geolocalização, notificações, uso *offline*, etc. A palestra explorará de forma aprofundada esta moderna possibilidade e apontará quando pode ser interessante.',
    speaker: richardJesus
  },
  {
    order: 5,
    icon: 'local_dining',
    time: '11h50 - 13h20',
    title: 'Almoço'
  },
  {
    order: 6,
    time: '13h20 - 14h30',
    title: 'Angular 2 e TypeScript',
    description: 'O Angular 2 está sensacional, muito mais performático e sincronizado com todas as últimas tecnologias da Web, porém as mudanças foram drásticas comparado ao seu antecessor. Além de tudo, ainda foi feito em TypeScript, opcional para os desenvolvedores, mas fortemente incentivada pelo Google. A palestra abordará tudo o que mudou, quais são as vantagens e como migrar para essa nova versão sem medo.',
    speaker: williamGrasel
  },
  {
    order: 7,
    time: '14h30 - 15h40',
    title: 'Arquitetura de Microserviços em Java',
    description: 'Com a convergência de diversos modelos sistêmicos para a nuvem, com o conceito de *containers* amplamente difundido e adotado, novos desafios surgem para os arquitetos e desenvolvedores de *software*. A arquitetura baseada em microserviços surge como solução nesse ambiente. A palestra discutirá aspectos da arquitetura baseada em microserviços e os desafios enfrentados tanto na arquitetura desses sistemas quanto no seu desenvolvimento, ambientados numa demonstração baseada no Netflix OSS.',
    speaker: ebersonOliveira
  },
  {
    order: 8,
    icon: 'free_breakfast',
    time: '15h40 - 16h',
    title: 'Coffee Break'
  },
  {
    order: 9,
    time: '16h - 17h10',
    title: 'Aplicações Web Modernas com Laravel',
    description: 'Laravel é um *framework* PHP moderno, com baixa curva de aprendizado, altamente produtivo, seguindo boas práticas de desenvolvimento de *software*. A palestra abordará o PHP moderno, o Composer e o Laravel em detalhes. Dentre os assuntos, será abordado a motivação do *framework*, rotas, *controllers*, *models* e *views*, validação de dados, banco de dados e *migrations*, comandos do Artisan, testes, gerenciamento de *assets* com o Elixir, ambientes de desenvolvimento e *deploy* e referências.',
    speaker: marcelSantos
  },
  {
    order: 10,
    time: '17h10 - 18h20',
    title: 'Internet das Coisas',
    subtitle: 'Conceitos e Aplicações',
    description: 'A palestra abordará os conceitos básicos sobre a emergente área da Internet das Coisas (IoT, do inglês *Internet of Things*) e explorará exemplos de aplicações práticas.',
    speaker: lazaroMenezes
  },
  {
    order: 11,
    icon: 'people',
    time: '18h20 - 18h30',
    title: 'Sorteios'
  },
  {
    order: 12,
    icon: 'time_to_leave',
    time: '18h30',
    title: 'Encerramento'
  }
]
