function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.517152, lng: -0.073356},
    zoom: 15
  });

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  var drinks = ['bar']
  var culture = ['art_gallery', 'book_store', 'church', 'cemetery', 'hindu_temple', 'library', 'mosque', 'museum', 'synagogue']
  var outdoors = ['amusement_park', 'camp_ground', 'park', 'zoo']
  var beauty = ['beauty_salon', 'department_store', 'hair_care', 'spa']
  var kids = ['amusement_park', 'aquarium', 'bowling_alley', 'camp_ground', 'movie_theater', 'stadium', 'zoo']
  var shopping = ['bakery', 'clothing_store', 'department_store', 'electronics_store', 'home_goods_store', 'jewelry_store', 'shoe_store', 'shopping_mall']
  var entertainment = ['amusement_park', 'aquarium', 'art_gallery', 'bowling_alley', 'casino', 'movie_theater', 'stadium']
  var fitness = ['gym', 'park', 'physiotherapist']
  var eating = ['bakery', 'cafe', 'restaurant']
  var nightOut = ['casino', 'night_club']
  var dating = ['florist', 'jewelry_store', 'lodging', 'movie_theater', 'park', 'restaurant']

  service.nearbySearch({
    location: {lat: 51.517152, lng: -0.073356},
    radius: 5000,
    types: nightOut,
  }, callback);
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var htmlArray = [];
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
        htmlArray.push(displayName(results[i]));
      };
      var display = document.getElementById('results-inner');
      display.innerHTML = htmlArray.join('--');
    };
  };
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
    var placeRating = place.rating;
    
    placeCost = function() {
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
    return "<div class='results-inner'>Name: " + placeName + " Cost: " + placeCost() + "Rating: " + placeRating + "</div>";
  }
}
