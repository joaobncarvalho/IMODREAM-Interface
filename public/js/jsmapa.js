let lat
let long

function initMap(lat,long) {

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 38.71196425733478, lng:-9.21110677356596 },
    });
    console.log(lat,long)
    $.ajax({
        url: "https://imodream-api.herokuapp.com/api/proprety",
        type: "GET",
        dataType: 'json',
        success: function(result) {
            //console.log(result);
            $('#DimensionPro').text(result)
            var down = document.getElementById("map");
            //console.log(obj);

            var res = [""];
            var marker
            const infowindow = new google.maps.InfoWindow()

            for (var i = 0; i < result.length-1; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(result[i].location.coordinates[0], result[i].location.coordinates[1]),
                    map: map
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent("Rua: " + result[i].StreetName + "<br>Preço: " + result[i].Price  + "<br>Tipo de Propriedade: "+  result[i].PropretyType);

                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }


        }

    })
    const image =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const beachMarker = new google.maps.LatLng({
        position: { lat: lat, lng: long },
        map,
        icon: image,
    });
}




window.initMap = initMap;








//);