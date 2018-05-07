function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const main = document.querySelector('main')

function show(html) {
  main.innerHTML = html  
}

function init() {
  // Order.start()
  Shop.start()
}

function dateToString(date) {
  return date.getMonth()+'/'+date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}

