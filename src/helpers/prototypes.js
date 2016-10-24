'use strict'

// eslint-disable-next-line no-undef
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

// eslint-disable-next-line no-undef
HTMLElement.prototype.isScrolledTop = function() {
  const boundaries = this.getBoundingClientRect()
  const halfWindow = Math.floor(window.innerHeight / 3)
  const isScrolling = document.body.getAttribute('data-scrolling')
  return !isScrolling && boundaries.top >= -halfWindow && boundaries.top <= halfWindow
}
