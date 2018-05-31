const Ui = {
  jsLoaded: {}
}

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

Ui.title = function (title) {
  Ui.id('title').innerHTML = title
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

// ==================== Table ===========================
Ui.tbodyHtml = function (records, recordHtml) {
  var list = []
  let i=0;
  for (let r of records) {
    let rowHtml = recordHtml(++i, r)
    list.push(rowHtml)
  }
  return list.join('\n')
}

// ==================== Router ===========================

Ui.goto = function (url) {
  window.location.href = url
}

// ==================== Load CSS/JS =====================
// load CSS
Ui.loadCss = function (url) {
  var ss = document.createElement('link')
  ss.type = 'text/css'
  ss.rel = 'stylesheet'
  ss.href = url
  Ui.one('head').appendChild(ss)
}

// load script (JS)
Ui.loadJs = function (url) {
  return new Promise(function (resolve, reject) {
    var urlLoaded = Ui.jsLoaded[url]
    if (urlLoaded === true) {
      resolve(url)
      return
    }
    var script = document.createElement('script')
    script.onload = function () {
      console.log('onload:', url)
      Ui.jsLoaded[url] = true
      resolve()
    }
    script.onerror = function () {
      Ui.jsLoaded[url] = false
      reject(new Error('Could not load script at ' + url))
    }
    script.src = url
    Ui.one('head').appendChild(script)
  })
}