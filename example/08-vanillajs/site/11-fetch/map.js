const map = {}

map.simple = function () {
  var pos = {lat: 24.45, lng: 118.32};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: pos
  });
  var marker = new google.maps.Marker({
    position: pos,
    map: map
  });
}