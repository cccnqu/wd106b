const Gmap = {
  center: {lat: 24.43, lng: 118.33},
  zoom: 13,
}

Gmap.html = `
<!--<button onclick="loadMap()">loadMap</button>-->
<div id="map" class="gmap">map</div>
`

var initMap = function () {
  Gmap.init()
}

Gmap.init = function () {
  var map = new google.maps.Map(Ui.id('map'), {
    zoom: Gmap.zoom,
    center: Gmap.center
  })
  for (let shop of shops) {
    let marker = new google.maps.Marker({
      title: shop.name,
      position: shop.at,
      map: map
    })
  }
}

Gmap.start = function (arg={}) {
  Gmap.arg = arg
  Ui.show(Gmap.html)
  Ui.loadJs('https://maps.googleapis.com/maps/api/js?key=AIzaSyC7q1j5qhyIKSzRs_86eNfKH-_HsGiRPH8').finally(initMap)
}
