<script>
export default {
  name: 'Layout'
}
</script>

<template>
  <div id="app">
    <nuxt />
  </div>
</template>

<style lang="stylus">
@import '../stylus/variables'

*, *::before, *::after
  box-sizing: border-box

html
  height: 100%
  overflow: auto

body
  font: 500 1em/1.4 $font-primary
  color: $text-color-primary
  margin: 0; padding: 0
  height: 100%

img, svg
  max-width: 100%

h1, h2, h3, h4, h5, h6
  color: $color-primary-300
  font-family: $font-secondary
  font-size: 2.5em
  font-weight: 900
  line-height: 1
  margin: 0
  strong, b
    font-weight: 900

h2
  font-size: 2.25em

h3
  font-size: 2em

h4
  font-size: 1.75em

p
  margin: .75em 0 0
  font-size: 1.125em
  line-height: 1.25
  &.important
    font-weight: 700
  strong, b
    color: $color-primary-300

a
  $tap-color: alpha($color-primary, 25%)
  transition: color .25s ease, background .25s ease, box-shadow .25s ease, text-shadow .25s ease, border-color .25s ease
  outline: 0

button,
.button
  position: relative
  display: inline-block
  padding: .5em 1.5em
  font-size: .925em
  font-weight: 400
  letter-spacing: 1px
  cursor: pointer
  color: $text-color-inverse-primary
  background: $color-primary
  border: 2px solid @background
  box-shadow: 0 2px 15px alpha(#000, 10%), 0 8px 50px alpha(#000, 5%)
  text-align: center
  text-decoration: none
  text-transform: uppercase
  $tap-color: none
  &:hover, &:focus
    background: alpha($color-primary, 0%)
    border-color: $color-primary
    color: @border-color
    box-shadow: 0 4px 15px alpha(#000, 25%), 0 8px 50px alpha(#000, 10%)
  &.inverse
    background: alpha($text-color-inverse-primary, 0%)
    border-color: $text-color-inverse-primary
    box-shadow: none
    &:hover, &:focus
      background: $text-color-inverse-primary
      border-color: @background
      color: $color-primary
      box-shadow: 0 4px 15px alpha(#000, 25%), 0 8px 50px alpha(#000, 10%)
  &.active, &:active, &.inverse.active, &.inverse:active
    background: darken(@background, 38%)
    color: $text-color-inverse-primary
    box-shadow: 0 2px 15px alpha(#000, 10%), 0 8px 50px alpha(#000, 5%)

p, h1, h2, h3, h4, h5, h6
  a
    color: $color-secondary
    line-height: inherit
    &:hover, &:focus
      color: $color-primary

#app
  text-align: center

.container
  position: relative
  z-index: 1
  &.limit-width
    padding-left: 2em
    padding-right: 2em
    @media (min-width: $breakpoint-tablet)
      padding-left: 5vw
      padding-right: 5vw
    @media (min-width: $breakpoint-desktop)
      padding-left: 10vw
      padding-right: 10vw
    @media (min-width: $breakpoint-desktop-hd)
      padding-left: 15vw
      padding-right: 15vw
    @media (min-width: $breakpoint-desktop-fullhd)
      padding-left: 25vw
      padding-right: 25vw

.gutter
  padding: 5em 1em 3em
  @media (min-width: $breakpoint-tablet)
    padding: 5em 3em 3em
  @media (min-width: $breakpoint-desktop)
    padding: 5em calc(5em + 3vw)

hr
  background: $color-secondary-900
  border: none
  height: 2em
  margin: 0
  z-index: 2

@media (max-width: $breakpoint-tablet - 1px)
  .hidden-on-small
    display: none

@media (min-width: $breakpoint-tablet)
  .hidden-on-large
    display: none

.two-columns
  display: flex
  flex-flow: column
  padding: 0
  position: relative
  z-index: 2
  z-depth: 4
  & > div
    flex: 1 1 auto
  & > aside
    flex: 1 1 auto
    min-width: 15vw
    min-height: 15vh
    display: flex
    div
      flex: 1
      background: $color-secondary-700 center left \/ cover
      position: relative
      z-index: 2
      z-depth: 2
  @media (min-width: $breakpoint-desktop)
    flex-flow: row
    & > aside
      flex-flow: column
</style>
