let lat
let long

function initMap(lat,long) {

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: lat, lng: long },
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

            for (var i=0; i < result.length-1;i++){
                //console.log(result[i].location)
                lat = result[i].location.coordinates[0]
                long = result[i].location.coordinates[1]

                initMap(lat,long);

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