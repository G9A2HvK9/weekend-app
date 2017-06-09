function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.517152, lng: -0.073356},
    zoom: 15
  })

  var infowindow = new google.maps.InfoWindow()
  var service = new google.maps.places.PlacesService(map)

  var types = {drinks: ['bar'],
    culture: ['art_gallery', 'book_store', 'church', 'cemetery', 'hindu_temple', 'library', 'mosque', 'museum', 'synagogue'],
    outdoors: ['amusement_park', 'camp_ground', 'park', 'zoo'],
    beauty: ['beauty_salon', 'department_store', 'hair_care', 'spa'],
    kids: ['amusement_park', 'aquarium', 'bowling_alley', 'camp_ground', 'movie_theater', 'stadium', 'zoo'],
    shopping: ['bakery', 'clothing_store', 'department_store', 'electronics_store', 'home_goods_store', 'jewelry_store', 'shoe_store', 'shopping_mall'],
    entertainment: ['amusement_park', 'aquarium', 'art_gallery', 'bowling_alley', 'casino', 'movie_theater', 'stadium'],
    fitness: ['gym', 'park', 'physiotherapist'],
    eating: ['bakery', 'cafe', 'restaurant'],
    nightOut: ['casino', 'night_club', 'bar'],
    dating: ['florist', 'jewelry_store', 'lodging', 'movie_theater', 'park', 'restaurant'],
   }

  service.nearbySearch({
    location: {lat: 51.517152, lng: -0.073356},
    radius: 1000,
    types: types.drinks,
  }, callback)

  var resultsArray = []
  var htmlArray = []
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++){
        var maxPrice = 3
        var minRating = 1.0
        if (!(results[i].name.includes('Hotel') || results[i].name.includes('Inn')) && (results[i].price_level <= maxPrice || results[i].price_level == undefined) && (results[i].rating >= minRating || results[i].rating == undefined)){
          createMarker(results[i])
          createPlaceHash(results[i])
        }
      }

      resultsArray.forEach(function(entry){
        var htmlString = "<div class='results-inner'>Name: " + entry.placeName + " Cost: " + entry.placeCost + "Rating: " + entry.placeRating + "</div>"
        htmlArray.push(htmlString)
      })
      var display = document.getElementById('results-inner')
      display.innerHTML = htmlArray.join('--')
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    })

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name)
      infowindow.open(map, this)
    })
  }

  function createPlaceHash(place) {

    var placeCost = function() {
    if (place.price_level === 1) {return '£'}
    else if (place.price_level === 2) {return '££'}
    else if (place.price_level === 3) {return '£££'}
    else if (place.price_level === 4) {return '££££'}
    else if (place.price_level === 0) {return 'Free'}
    else { return '-' }}

    var placeHash =
      {placeName: place.name,
      placeRating: place.rating,
      placeCost: placeCost(),
    }

    resultsArray.push(placeHash)
  }
}
