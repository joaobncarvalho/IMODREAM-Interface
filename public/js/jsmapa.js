let marker, infoWindow, map;


function initMap(lat,long) {

    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const imagem = "./img/Imo/houseicon.png"
    const infowindow = new google.maps.InfoWindow();
    const propretiesUrl = 'https://imodream-api.herokuapp.com/api/proprety/one'
    const map = new google.maps.Map(document.getElementById("map"), {

        zoom: 13,
        center: {lat: 38.71196425733478, lng: -9.21110677356596},
    });

    infoWindow = new google.maps.InfoWindow();
    marker = new google.maps.Marker({
        // The below line is equivalent to writing:
        // position: new google.maps.LatLng(-34.397, 150.644)
        position: {lat: -34.397, lng: 150.644},
        map: map,
    });
    const locationButton = document.createElement("button");

    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    marker.setPosition(pos);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });


    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("btn").addEventListener("click", () => {
        calculateAndDisplayRoute(directionsService, directionsRenderer)
    });


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
            browserHasGeolocation
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
    }

    async function getPropreties() {
        const response = await fetch (propretiesUrl);
        const propreties = await response.json();
        console.log(propreties);

        for (var i = 0; i < propreties.length; i++){
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(propreties[i].location.coordinates[0], propreties[i].location.coordinates[1]),
                map,
                icon: imagem,
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent("Rua: " + propreties[i].StreetName + "<br>Preço: " + propreties[i].Price + "<br>Tipo de Propriedade: " + propreties[i].PropretyType + "<br>Medidas: " + propreties[i].Measurments + " - " + propreties[i].Dimension);
                    infowindow.open(map, marker);
                }
            }) (marker, i));
        }
    }

    getPropreties();

}


    var pos;
    var pos1 = {
        lat: 38.768738843853676,
        lng: -9.094049857109368,
    };



    async function calculateAndDisplayRoute(directionsService, directionsRenderer) {
        const selectedMode = document.getElementById("mode").value

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                },
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }

        console.log(pos)
        const propretiesUrl = 'https://imodream-api.herokuapp.com/api/proprety/one'
        const response = await fetch (propretiesUrl);
        const propreties = await response.json();
        console.log(propreties)

        directionsService
            .route({
                origin: pos,
                destination: new google.maps.LatLng(propreties[0].location.coordinates[0], propreties[0].location.coordinates[1]),

                travelMode: google.maps.TravelMode[selectedMode],

            })

            .then((response) => {
                directionsRenderer.setDirections(response);
            })

    }



window.initMap = initMap;


//);