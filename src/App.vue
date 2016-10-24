<script>
export default {
  data() {
    return {
      scrolled: false
    }
  },
  methods: {
    scrollTop() {
      this.navigate('')
    }
  },
  mounted() {
    const self = this
    document.addEventListener('scroll', () => {
      const element = document.getElementById('principal')
      self.scrolled = !!element && document.body.scrollTop > element.offsetHeight / 1.5
    })
  },
  destroyed() {
    document.removeEventListener('scroll')
  }
}
</script>

<template>
  <div id="app">
    <router-view keep-alive></router-view>
    <a class="scroll-top" @click="scrollTop" v-show="scrolled">&#x25b2;</a>
  </div>
</template>

<style lang="stylus">
@import './stylus/app'
</style>
