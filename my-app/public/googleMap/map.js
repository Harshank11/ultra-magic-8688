function initialize() {
    var mapOptions, map, marker, searchBox, city,
        infoWindow = '',
        addressEl = document.querySelector('#map-search'),
        element = document.getElementById('map');


    mapOptions = {

        zoom: 12,

        center: new google.maps.LatLng(21.3755507, 74.24276439999994),

        disableDefaultUI: false, 
        scrollWheel: true, 
        draggable: true, 
    };


    map = new google.maps.Map(element, mapOptions);

    marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,

        draggable: true
    });


    /**
     * Creates a search box
     */
    searchBox = new google.maps.places.SearchBox(addressEl);

    let selectLocation = JSON.parse(localStorage.getItem("selectLocation"))[0];

    /**
     * When the place is changed on search box, it takes the marker to the searched location.
     */
    google.maps.event.addListener(searchBox, 'places_changed', function () {
        var places = searchBox.getPlaces(),
            bounds = new google.maps.LatLngBounds(),
            i, place, lat, long, resultArray,
            address = places[0].formatted_address;

        for (i = 0; place = places[i]; i++) {
            bounds.extend(place.geometry.location);
            marker.setPosition(place.geometry.location);  // Set marker position new.
        }

        map.fitBounds(bounds);  // Fit to the bound
        map.setZoom(12); // This function sets the zoom to 12, meaning zooms to level 15.
        // console.log( map.getZoom() );

        lat = marker.getPosition().lat();
        long = marker.getPosition().lng();


        resultArray = places[0].address_components;

        if (infoWindow) {
            infoWindow.close();
        }
    
        infoWindow = new google.maps.InfoWindow({
            content: address
        });

        infoWindow.open(map, marker);

        if(selectLocation=="pickup"){
            localStorage.setItem("pickUpLocation",JSON.stringify([address]));
        }else{
            localStorage.setItem("dropOffLocation",JSON.stringify([address]));
        }


    });

    google.maps.event.addListener(marker, "dragend", function (event) {
        var lat, long, address, resultArray, citi;

        lat = marker.getPosition().lat();
        long = marker.getPosition().lng();

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ latLng: marker.getPosition() }, function (result, status) {
            if ('OK' === status) {  
                address = result[0].formatted_address;
                resultArray = result[0].address_components;

                addressEl.value = address;

            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }

            if (infoWindow) {
                infoWindow.close();
            }

          
            infoWindow = new google.maps.InfoWindow({
                content: address
            });

            infoWindow.open(map, marker);


            if(selectLocation=="pickup"){
                localStorage.setItem("pickUpLocation",JSON.stringify([address]));
            }else{
                localStorage.setItem("dropOffLocation",JSON.stringify([address]));
            }
        });
    });

}