window.onload = function () {
  window.onhashchange()
}

window.onhashchange = function () {
  let hash = window.location.hash.substring(1).toLowerCase()
  console.log('hash=', hash)
  ui.show(page[hash])
  switch (hash) {
    case 'chart_simple': chart.simple(); break;
  }
}