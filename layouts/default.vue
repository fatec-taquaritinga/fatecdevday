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

html, body
  margin: 0
  padding: 0
  height: 100%

body
  font: 400 1em/1.4 $font-primary
  color: $text-color-primary

img, svg
  max-width: 100%

h2, h3, h4, h5, h6
  font-family: $font-secondary
  font-size: 2.5em
  margin: 0
  &.separator
    position: relative
    display: inline-block
    margin-bottom: 10px
    &::before
      position: absolute
      bottom: -3px
      display: block
      content: ''
      width: 80%
      margin-left: 10%
      height: 5px
      background: $color-primary
    &::after
      display: block
      content: ''
      width: 100%
      height: 3px
      background: $color-primary-900
      @media (min-width: $breakpoint-tablet)
        width: 150%
        margin-left: -25%

h3
  font-size: 1.75em

h4
  color: $text-color-secondary
  font-size: 2em

p
  margin: .75em 0 0
  &.important
    font-weight: 700
    strong
      color: $color-primary-900

a
  $tap-color: alpha($color-primary, 25%)
  transition: color .25s ease-in-out, background .25s ease-in-out, box-shadow .25s ease-in-out, text-shadow .25s ease-in-out
  outline: 0

p, h1, h2, h3, h4, h5, h6
  a
    color: $color-secondary
    line-height: 1.25
    &:hover, &:focus
      color: $color-primary

button, .button
  position: relative
  display: inline-block
  padding: .5em 1em
  font-size: .925em
  font-weight: 400
  letter-spacing: 1px
  cursor: pointer
  color: #fff
  background: $color-primary
  border: 1px solid @background
  box-shadow: 0 2px 15px alpha(#000, 10%), 0 8px 50px alpha(#000, 5%)
  transition: color .25s ease-in-out, background .25s ease ease-in-out, box-shadow .25s ease-in-out, border .25s ease-in-out
  text-align: center
  text-decoration: none
  $tap-color: none
  outline: 0
  &.primary
    background: $color-primary-300
    border-color: @background
  &:hover, &:focus
    background: #000
    border-color: @background
    box-shadow: 0 4px 15px alpha(#000, 25%), 0 8px 50px alpha(#000, 10%)
  &.active, &:active
    background: darken(@background, 38%)
    box-shadow: 0 2px 15px alpha(#000, 10%), 0 8px 50px alpha(#000, 5%)
  &.transparent
    &:hover, &:focus
      border-color: #fff
      background: alpha($color-primary-300, 0)
      box-shadow: 0 2px 15px alpha(#000, 20%), 0 8px 50px alpha(#000, 10%)
    &.active, &:active
      border-color: $color-primary-300
  .material-icons
    vertical-align: bottom
    position: relative
    font-size: 1.5em
    line-height: 1
    margin-right: .25em

.circle
  display: block
  font-size: 2em
  width: 1.5em
  height: 1.5em
  line-height: 1.25
  text-align: center
  color: $text-color-secondary
  border: 3px solid $text-color-secondary
  border-radius: 50%
  @media (min-width: $breakpoint-tablet)
    line-height: 1.35
  img
    display: block
    border-radius: 50%
    object-fit: cover

.buttons
  display: inline-flex
  margin: 0 -.25em
  .button
    margin: 0 .25em

.action-buttons
  text-align: center
  margin: 4em 0 2em
  font-size: .875em
  @media (min-width: $breakpoint-tablet)
    font-size: 1em
  .button
    font-size: 1.25em
    white-space: nowrap
  p
    font-size: .875em
    color: $text-color-inverse-secondary
    margin: 1.5em 0 0

#app
  position: relative
  background: #4a555c
  min-height: 100vh
  overflow: hidden

.page
  text-align: center
  position: relative
  min-height: 100vh
  display: flex
  flex-flow: column
  transform-origin: top center
  box-shadow: 0 2px 10px rgba(#000, 50%)

.page-enter-active
  transition: opacity .25s, transform .25s

.page-leave-active
  transition: opacity .5s ease-in, transform .5s ease-in

.page-enter, .page-leave-to
  opacity: 0
  transform: scale(.9)

.container
  position: relative
  flex: 1
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  text-align: center
  padding: 3em 1.5em
  @media(min-width: $breakpoint-tablet)
    padding-left: calc(1.5em + 2vw)
    padding-right: calc(1.5em + 2vw)
  @media(min-width: $breakpoint-desktop-hd)
    padding-left: 10vw
    padding-right: 10vw

@media (max-width: $breakpoint-tablet - 1px)
  .hidden-on-small
    display: none
</style>
