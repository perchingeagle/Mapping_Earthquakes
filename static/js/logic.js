
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
    id: mapStyle.dark,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

//  L.circleMarker([34.0522, -118.2437]).addTo(map);

 // An array containing each city's location, state, and population.

 cities.forEach(city => {
    console.log(city);
    L.circleMarker(city.location, { radius: city.population/200000})
    .bindPopup(`<h2>${city.city}, ${city.state}</h2><hr/><h3>Population ${city.population.toLocaleString('en')}</h3>`)
    .addTo(map);
});




// 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'