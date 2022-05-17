let map, infoWindow, marker;

function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    mapOptions ={
        center: { lat: -34.397, lng: 150.644 },
        zoom: 12,
    }
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    infoWindow = new google.maps.InfoWindow();

    marker = new google.maps.Marker({
        // The below line is equivalent to writing:
        // position: new google.maps.LatLng(-34.397, 150.644)
        position: { lat: -34.397, lng: 150.644 },
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
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(googleMap);
}

var pos;
var pos1 = {
    lat: 38.768738843853676,
    lng: -9.094049857109368,
};
function calculateAndDisplayRoute(directionsService, directionsRenderer){
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

    directionsService
        .route({
            origin: pos,
            destination: pos1,

            travelMode: google.maps.TravelMode[selectedMode],

        })

        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Direction request failed due to" + status));

}

window.initMap = initMap;