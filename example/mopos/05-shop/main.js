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

