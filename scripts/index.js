
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
    './assets/bilder/WebsiteLayoutFINAL2.png', 
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


L.marker([470, 525], {
    icon: makerRot
}).addTo(map).bindPopup('TestTest').openPopup();;