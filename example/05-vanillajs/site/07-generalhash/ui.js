const ui = {}

ui.html = function (path, html) {
  document.querySelector(path).innerHTML = html
}

ui.show = function (html) {
  ui.html('#main', html)
}
