
console.log(API_KEY);

let map = L.map('mapid').setView([40.7, -94.5], 4);

const mapStyle = {
    street: 'mapbox/streets-v11',
    outdoors: 'mapbox/outdoors-v11',
    light: 'mapbox/light-v10',
    dark: 'mapbox/dark-v10',
    satellite: 'mapbox/satellite-v9',
    satelliteStreet: 'mapbox/satellite-streets-v11'
};

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: mapStyle.street,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

// 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'