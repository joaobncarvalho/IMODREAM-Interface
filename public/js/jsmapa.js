let marker, infoWindow, map;
let id = localStorage.getItem("pro_id")







function initMap(lat,long) {

    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const imagem = "./img/Imo/houseicon.png"
    const infowindow = new google.maps.InfoWindow();
    const propretiesUrl = 'https://imodream-api.herokuapp.com/api/proprety/'+id
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
        const propretiesUrl = 'https://imodream-api.herokuapp.com/api/proprety/'+id
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

$(document).ready(

    function proprety1(){
        $.ajax({
            url: 'https://imodream-api.herokuapp.com/api/proprety/'+id,
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("sagatsftsa"+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proprety1")
                let html = ""
                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].StreetName
                    let h3 = result[i].Dimension + " - " + result[i].Measurments
                    html += `<h2>${h2}</h2><span class="aa-price">${result[i].Price}</span>`

                }
                console.log("aaaaa"+html)

                teste.innerHTML=html
            }

        });
    }

);


$(document).ready(

    function proside1(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/11",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proside1")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].StreetName
                    let h3 = result[i].Dimension + " - " + result[i].Measurments
                    html += `
                    <h4 class="media-heading"><a onclick="goInfo(${result[i].PropId})">${h2}</a></h4>
                  <p>${h3}</p>                
                  <span>${result[i].Price}</span>
                </div>              
              </div>`

                }
                console.log("aaaaa"+html)

                teste.innerHTML=html
            }

        });
    }

);


$(document).ready(

    function proside2(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/7",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proside2")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].StreetName
                    let h3 = result[i].Dimension + " - " + result[i].Measurments
                    html += `
                    <h4 class="media-heading"><a onclick="goInfo(${result[i].PropId})">${h2}</a></h4>
                  <p>${h3}</p>                
                  <span>${result[i].Price}</span>
                </div>              
              </div>`

                }
                console.log("aaaaa"+html)

                teste.innerHTML=html
            }

        });
    }

);

$(document).ready(

    function proside3(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/6",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proside3")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].StreetName
                    let h3 = result[i].Dimension + " - " + result[i].Measurments
                    html += `
                    <h4 class="media-heading"><a onclick="goInfo(${result[i].PropId})">${h2}</a></h4>
                  <p>${h3}</p>                
                  <span>${result[i].Price}</span>
                </div>              
              </div>`

                }
                console.log("aaaaa"+html)

                teste.innerHTML=html
            }

        });
    }

);


//);