
console.log(API_KEY);

let map = L.map('mapid').setView([40.7, -94.5], 4);

// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

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


//  cities.forEach(city => {
//     console.log(city);
//     L.circleMarker(city.location, { radius: city.population/200000})
//     .bindPopup(`<h2>${city.city}, ${city.state}</h2><hr/><h3>Population ${city.population.toLocaleString('en')}</h3>`)
//     .addTo(map);
// });

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ];

// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

const airports = {
    lax: [33.9416, -118.4085],
    aus: [30.1975, -91.6664],
    yyz: [43.6777, -79.6248],
    jfk: [40.6413, -73.7781]
};

let line = [
    airports.lax,
    airports.aus,
    airports.yyz,
    airports.jfk
];


L.polyline(line, {
    color: "yellow",
    dashArray: '5, 10'
  }).addTo(map);
