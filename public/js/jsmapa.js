function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: -33, lng: 151 },
    });
    const image =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const beachMarker = new google.maps.Marker({
        position: { lat: -33.89, lng: 151.274 },
        map,
        icon: image,
    });
}

window.initMap = initMap;

function Loc(){
    $.ajax({
        url: "https://imodream-api.herokuapp.com/api/proprety/one",
        type: "GET",
        dataType: 'json',
        success: function(result) {
            console.log(result);
        }
    });
}

const json =  {
    name:"leo",
    location: [
        10,
        30.1273,
        40
    ]
}

console.log(json.location[1])