let latitude, longitude, destination;

$(document).ready(function () {
    alert("Please allow the device to know your location!")
    initGeolocation();
})

$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})

function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}

function success(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude

    // Initializing Mapbox
    mapboxgl.accessToken='pk.eyJ1Ijoic2FuaWFkYW5pc2htYWRvbyIsImEiOiJjbGhqajcxanAwM21oM2VvZG41ZjdwZHJ2In0.09yFNwxloomdktribzYOTg';

    var map=new mapboxgl.Map({
        container:'map',
        style:'mapbox://styles/mapbox/streets-v11',
        center:[longitude,latitude],
        zoom:4
    });

    map.addControl(
        new MapboxGeocoder({
            accessToken:mapboxgl.accessToken,
            mapboxgl:mapboxgl
        }).on('result', function(e){
            destination=e.result.center
        })
    );

    var img1=document.querySelector("#amber");

    var marker1=new mapboxgl.Marker({element:img1}).setLngLat([75.78726016699184,26.912663181910883]).addTo(map);

    var img2=document.querySelector("#gateway");

    var marker2=new mapboxgl.Marker({element:img2}).setLngLat([72.83461138023326,18.92222765952163]).addTo(map);
   
    var img3=document.querySelector("#gate");

    var marker3=new mapboxgl.Marker({element:img3}).setLngLat([77.22950969589165,28.613100347058584]).addTo(map);

    var img4=document.querySelector("#lotus");

    var marker4=new mapboxgl.Marker({element:img4}).setLngLat([77.25886931123281,28.553689877441894]).addTo(map);

    var img5=document.querySelector("#victoria");

    var marker5=new mapboxgl.Marker({element:img5}).setLngLat([88.34260071102362,22.54505590273728]).addTo(map);

    var img6=document.querySelector("#taj");

    var marker6=new mapboxgl.Marker({element:img6}).setLngLat([77.97597772467239,27.154469180485872]).addTo(map);
}

