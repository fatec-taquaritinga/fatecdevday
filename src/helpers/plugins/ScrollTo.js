const ScrollTo = {
  install(Vue) {
    Vue.prototype.scrollTo = function(to, duration = 750) {
      const element = document.body
      const start = element.scrollTop
      const change = to - start
      const increment = 20
      let currentTime = 0

      const animateScroll = () => {
        currentTime += increment
        element.scrollTop = Math.easeInOutQuad(currentTime, start, change, duration)
        if (currentTime < duration) setTimeout(animateScroll, increment)
        else element.scrollTop = to
      }

      document.body.setAttribute('data-scrolling', true)

      setTimeout(() => {
        document.body.removeAttribute('data-scrolling')
      }, duration + 50)

      animateScroll()
    }
  }
}

export default ScrollTo
