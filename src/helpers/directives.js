import Vue from 'vue'

Vue.directive('scrolled', {
  bind(el, binding) {
    document.addEventListener('scroll', () => {
      const currentHash = window.location.hash.replace('#', '')
      const newHash = binding ? binding.value : ''

      if (el && el.isScrolledTop() && currentHash !== newHash) {
        window.history.replaceState(null, null, newHash ? `/#${newHash}` : '/')
      }
    })
  }
})
