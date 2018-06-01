window.onload = function () {
  window.onhashchange()
}

window.onhashchange = function () {
  let hash = window.location.hash.substring(1).toLowerCase()
  console.log('hash=', hash)
  if (hash.length === 0) hash = 'home'
  fetch('page/' + hash + '.html').then(function(response) {
    console.log('response=', response)
    response.text().then(function (text) {
      console.log('text=', text)
      ui.show(text)
      switch (hash) {
        case 'chart_simple': chart.simple(); break;
        case 'map_simple': map.simple(); break;
      }      
    })
  })
}