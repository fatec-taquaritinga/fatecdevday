<script>
export default {
  name: 'Logo',
  props: {
    href: String,
    schema: String
  },
  methods: {
    navigate (event) {
      event.preventDefault()
      this.$router.push(this.href)
    }
  },
  render (createElement) {
    const svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 518.7 153.1">
      <title>{ this.$slots.default ? this.$slots.default : 'Fatec Dev Day 2017' }</title>
      <g class="fatec">
        <path d="M53.9 28.2h3.9V15.8h7.9v-3.5h-7.9V3.8h11.1V0h-15z" class="fatec-f"/>
        <path d="M83.1 8.8c-.6-1.4-2.7-3.4-6.1-3.4-4.3 0-7.3 3-7.3 8.8v5.6c0 5.7 2.8 8.8 7.3 8.8 3.4 0 5.5-2 6.1-3.4v3.1h3.5V5.7h-3.5v3.1zm-.2 10.4c0 4-1.6 6.2-4.7 6.2s-4.7-2.1-4.7-6.2v-4.6c0-4 1.6-6.1 4.7-6.1 3 0 4.7 2 4.7 6v4.7z" class="fatec-a"/>
        <path d="M96.2 19.3V9h4.9V5.8h-4.9V1.2h-2.3c0 3.7-1.2 4.9-3.7 4.9v2.8h2.2v10.9c0 5.4 1 8.7 6.8 8.7.6 0 1.4 0 2.1-.1V25c-4.9.3-5.1-.4-5.1-5.7z" class="fatec-t"/>
        <path d="M112 5.4c-5.4 0-8.5 3.4-8.5 8.9v5.4c0 5.4 3.1 8.8 8.5 8.8 5.3 0 8.4-3.4 8.4-7.5v-.2h-3.7v.4c0 2.5-1.9 4.2-4.7 4.2-2.7 0-4.8-1.8-4.8-5V18h13.2v-3.9c0-5.5-3.1-8.7-8.4-8.7zm4.7 9.9h-9.5v-1.7c0-3.3 1.9-5 4.8-5s4.7 1.6 4.7 5.3v1.4z" class="fatec-e"/>
        <path d="M132.7 8.9c3.2 0 4.7 1.9 4.7 5.6h3.7c0-5.7-3-9-8.4-9s-8.5 3.4-8.5 9v5.4c0 5.4 3.1 8.8 8.5 8.8s8.4-3.4 8.4-9h-3.7c0 3.7-1.6 5.6-4.7 5.6-3.2 0-4.8-2.1-4.8-5.4V15c0-4.3 1.5-6.1 4.8-6.1z" class="fatec-c"/>
      </g>
      <g class="dev">
        <path d="M90.7 39.7H53.9v73.7h36.9c20.4 0 36.9-16.5 36.9-36.9s-16.6-36.8-37-36.8zm0 62.3H65.2V51h25.5c14.1 0 25.5 11.4 25.5 25.5S104.8 102 90.7 102z" class="dev-d"/>
        <path d="M184.3 51h-39.7c-6.3 0-11.3 5.1-11.3 11.3V102c0 6.3 5.1 11.3 11.3 11.3H190v-5.7c0-3.1-2.5-5.7-5.7-5.7h-34c-3.1 0-5.7-2.5-5.7-5.7v-5.7h39.7c6.3 0 11.3-5.1 11.3-11.3v-17c0-6.1-5.1-11.2-11.3-11.2zm0 22.7c0 3.1-2.5 5.7-5.7 5.7h-34V68c0-3.1 2.5-5.7 5.7-5.7h28.3c3.1 0 5.7 2.5 5.7 5.7v5.7z" class="dev-e"/>
        <path d="M229.6 99.5l-18.4-45c-.9-2.1-2.9-3.5-5.2-3.5h-7.5l25.5 62.4h11.3L260.8 51h-7.5c-2.3 0-4.4 1.4-5.2 3.5l-18.5 45z" class="dev-v"/>
      </g>
      <g class="day">
        <path d="M343 76.5c0-20.4-16.5-36.9-36.9-36.9h-36.9v73.7h36.9c20.4.1 36.9-16.4 36.9-36.8zM306.1 102h-25.5V51h25.5c14.1 0 25.5 11.4 25.5 25.5S320.2 102 306.1 102z" class="day-d"/>
        <path d="M399.7 51h-45.4v5.7c0 3.1 2.5 5.7 5.7 5.7h34c3.1 0 5.7 2.5 5.7 5.7v5.7H360c-6.3 0-11.3 5.1-11.3 11.3v17c0 6.3 5.1 11.3 11.3 11.3h39.7c6.3 0 11.3-5.1 11.3-11.3V62.4c0-6.3-5.1-11.4-11.3-11.4zm0 45.4c0 3.1-2.5 5.7-5.7 5.7h-28.3c-3.1 0-5.7-2.5-5.7-5.7v-5.7c0-3.1 2.5-5.7 5.7-5.7h34v11.4z" class="day-a"/>
        <path d="M471.6 51c-2.3 0-4.4 1.4-5.3 3.6l-17.7 44.3-19.1-44.5c-.9-2.1-2.9-3.4-5.2-3.4h-7.6l26.6 61.1-6.4 20.4c-.9 2.2-2.9 3.6-5.3 3.6h-6.4c-3.1 0-5.7 2.5-5.7 5.7v5.7h15c4.6 0 8.8-2.8 10.5-7.1l34-89.3h-7.4z" class="day-y"/>
      </g>
      <g class="year">
        <path d="M338.4 153.1v-2.9c0-10.5 14.3-8.4 14.3-16.4 0-3.2-2.2-5.1-5.3-5.1-3.7 0-5.3 2.4-5.3 5.5h-3.7c0-5.5 3.7-9.2 9-9.2s9.1 3.6 9.1 8.7c0 10.3-14 8.7-14.3 15.6H356v3.7h-17.6z" class="year-y"/>
        <path d="M360.8 143.5v-9.3c0-5.6 3.7-9.6 9.2-9.6 5.4 0 9.2 3.9 9.2 9.6v9.3c0 5.6-3.8 9.5-9.2 9.5-5.4.1-9.2-3.8-9.2-9.5zm14.6-.7V135c0-4.6-2.3-6.6-5.4-6.6-3.1 0-5.3 1.9-5.3 6.6v7.8c0 4.6 2.2 6.6 5.3 6.6 3.1 0 5.4-2 5.4-6.6z" class="year-e"/>
        <path d="M386 131.1c-.8.6-1.8.8-3.3.8v-3.7c3 0 3.6-.7 3.6-2.7h3.6V153H386v-21.9z" class="year-a"/>
        <path d="M397.7 153.1l8.2-23.8h-11.5v-3.7H411l-9.4 27.5h-3.9z" class="year-r"/>
      </g>
      <g class="braces">
        <path d="M25.5 62.4V39.7c0-6.3 5.1-11.3 11.3-11.3v-5.7c-12.5 0-22.7 7.6-22.7 17v22.7c0 7.8-6.3 14.2-14.2 14.2 7.8 0 14.2 6.3 14.2 14.2v22.7c0 9.4 10.1 17 22.7 17v-5.7c-6.3 0-11.3-5.1-11.3-11.3V90.7c0-7.8-5.1-14.2-11.3-14.2 6.2 0 11.3-6.3 11.3-14.1z" class="braces-left"/>
        <path d="M504.6 62.4V39.7c0-9.4-10.1-17-22.7-17v5.7c6.3 0 11.3 5.1 11.3 11.3v22.7c0 7.8 5.1 14.2 11.3 14.2-6.3 0-11.3 6.3-11.3 14.2v22.7c0 6.3-5.1 11.3-11.3 11.3v5.7c12.5 0 22.7-7.6 22.7-17V90.7c0-7.8 6.3-14.2 14.2-14.2-7.9 0-14.2-6.3-14.2-14.1z" class="braces-right"/>
      </g>
    </svg>

    const className = this.schema ? 'logo ' + this.schema : 'logo'
    return this.href ? <a href={this.href} onClick={this.navigate} class={className}>{svg}</a> : <span class={className}>{svg}</span>
  }
}
</script>

<style lang="stylus">
@import '../stylus/variables'

.logo
  path, g
    transition: fill 250ms ease
  .fatec, .year
    fill: #878787
  .dev
    fill: #f00
  .day
    fill: #43545c
  .braces
    fill: #ad0f0a
  &[href]:hover
    .dev
      fill: lighten(#f00, 25%)
    .day
      fill: lighten(#43545c, 10%)

.logo.light
  .fatec, .year
    fill: alpha($color-secondary-50, 90%)
  .dev
    fill: alpha(#fff, 99%)
  .day
    fill: alpha(#f0f0f0, 92%)
  .braces
    fill: alpha($color-secondary-50, 80%)

.logo.dark
  .fatec, .year
    fill: $color-secondary-900
  .dev
    fill: darken($color-secondary-900, 30%)
  .day
    fill: darken($color-secondary-900, 60%)
  .braces
    fill: alpha($color-secondary-700, 90%)
</style>
