const Ui = {}

Ui.id = function(path) {
  return document.getElementById(path)
}

Ui.one = function(path) {
  return document.querySelector(path)
}

Ui.html = function (path, html) {
  document.querySelectorAll(path).forEach((node)=>node.innerHTML = html)
}

Ui.show = function (html) {
  Ui.id('main').innerHTML = html
}

Ui.showPanel = function(name) {
  document.querySelectorAll('.panel').forEach((node)=>node.style.display='none')
  Ui.id(name).style.display = 'block'
}

Ui.openNav = function () {
  Ui.id('leftNav').style.width = '250px'
}

Ui.closeNav = function () {
  Ui.id('leftNav').style.width = '0'
}

Ui.title = function (title) {
  Ui.id('title').innerHTML = title
}

