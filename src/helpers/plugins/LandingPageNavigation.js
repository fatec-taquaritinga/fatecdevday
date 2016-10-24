const LandingPageNavigation = {
  install(Vue) {
    Vue.prototype.navigate = function (path) {
      const element = document.getElementById(path.replace('/#', ''))
      this.scrollTo(element ? element.offsetTop : 0)
      window.history.replaceState(null, null, path)
    }
  }
}

export default LandingPageNavigation
