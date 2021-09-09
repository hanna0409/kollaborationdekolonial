// Die Karte und Grundeinstellungen

var bounds = [[0,0], [1000,1000]];

var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: 2,
    maxBounds: bounds,
    zoomDelta: 0.33,
    zoomSnap: 0.3,
    wheelPxPerZoomLevel: 100,
    maxBoundsViscosity: 0.75
});

var image = L.imageOverlay(
    './assets/bilder/WebsiteLayoutFINAL4.png', 
    bounds
    ).addTo(map);

map.fitBounds(bounds);

map.setView([500, 500], 1.5)

var makerLila = L.icon({
    iconUrl: './assets/marker/marker_lila.png',
    iconSize: [30, 30]
    
});

var makerRot = L.icon({
    iconUrl: './assets/marker/marker_rot.png',
    iconSize: [30, 30]
});

// Der helper Marker

var markerHelp = L.marker([500, 500], {
    draggable: true
}).addTo(map);

markerHelp.on("dragend", function(e) {alert(markerHelp.getLatLng().toString())})




// Text1: Spezifisches Wissen und spezifische Erfahrung; Punkt: [330, 370]

let text1;

fetch('../assets/txts/1.txt', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text1 = data)
    .then(() => L.marker([330, 370], {
        icon: makerRot
    }).addTo(map).bindPopup(text1, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }).openPopup())

// Verbindung zu: Diskurspraxis

//var punkte = [
///    [243, 370],
//    [450, 690]
//];

// var polyline = L.polyline(punkte, {color: 'red'}).addTo(map);

// Text2: 

var text2;

fetch('../assets/txts/2.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text2 = data)
    .then(() => 
        L.marker([450, 690], {
            icon: makerLila
    }).addTo(map).bindPopup(text2, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }).openPopup())

