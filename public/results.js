function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.517152, lng: -0.073356},
    zoom: 15
  });

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.nearbySearch({
    location: {lat: 51.517152, lng: -0.073356},
    radius: 2000,
    type: ['cafe']
  }, callback);
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        if ( results[i].price_level != undefined ) {
          createMarker(results[i]);
          displayName(results[i]);
        }
      }
    }
    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }

    function displayName(place) {
      var placeName = place.name;
      var placeCost = function() {
        if (place.price_level === 1) {
          return '£';
        }
        else if (place.price_level === 2) {
          return '££';
        }
        else if (place.price_level === 3) {
          return '£££';
        }
        else {
          return '££££';
        };
      };
      var nameDisplay = document.getElementById('results');
      nameDisplay.innerHTML += "<div>Name: "+placeName+" Cost: "+placeCost()+"</div>";
    }
  }
};
