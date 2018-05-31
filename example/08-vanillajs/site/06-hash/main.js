window.onhashchange = function () {
  let hash = window.location.hash.toLowerCase()
  console.log('hash=', hash)
  switch (hash) {
    case '#login': ui.show(page.login); break;
    case '#logout': ui.show(page.logout); break;
    case '#signin': ui.show(page.signin); break;
    case '#home': ui.show(page.home); break;
  }
}