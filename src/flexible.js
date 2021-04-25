(function flexible(window, document) {
  var docEel = document.documentElement
  var dpr = window.devicePixelRatio || 1
  function setRemUnit() {
    var rem = docEel.clientWidth / 10
    docEel.style.fontSize = rem + 'px'
  }
  setRemUnit()
  window.addEventListener('resize', setRemUnit)

  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()
}(window, document))