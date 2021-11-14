
console.log(API_KEY);

// let map = L.map('mapid').setView([40.7, -94.5], 4);

// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);



const mapStyle = {
    street: 'mapbox/streets-v11',
    outdoors: 'mapbox/outdoors-v11',
    light: 'mapbox/light-v10',
    dark: 'mapbox/dark-v10',
    satellite: 'mapbox/satellite-v9',
    satelliteStreet: 'mapbox/satellite-streets-v11'
};

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: mapStyle.dark,
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
    Streets: streets,
    Dark: dark,
    Light: light,
    "Satellite Streets": satelliteStreets
  };

  // Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
//     center: [30, 30],
//     zoom: 2,
//     layers: [light]
// })

let map = L.map('mapid', {
    center: [43.68108112399995, -79.39119482699992],
    zoom: 11,
    layers: [satelliteStreets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


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

// const airports = {
//     lax: [33.9416, -118.4085],
//     aus: [30.1975, -91.6664],
//     yyz: [43.6777, -79.6248],
//     jfk: [40.6413, -73.7781]
// };

// let line = [
//     airports.lax,
//     airports.aus,
//     airports.yyz,
//     airports.jfk
// ];


// L.polyline(line, {
//     color: "yellow",
//     dashArray: '5, 10'
//   }).addTo(map);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/perchingeagle/Mapping_Earthquakes/main/majorAirports.json";

// let torontoData = "https://raw.githubusercontent.com/perchingeagle/Mapping_Earthquakes/main/torontoRoutes.json";

let torontoHoods = "https://raw.githubusercontent.com/perchingeagle/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//       pointToLayer:function(feature, latlng){
//           return L.marker(latlng)
//                   .bindPopup(`<h3>Airport Code: ${feature.properties.faa}</h3>
//                   <hr/><h4>Airport Name: ${feature.properties.name}</h4>`);
//       }
//   }).addTo(map);
// });

// d3.json(torontoData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//       pointToLayer:function(feature, latlng){
//           return L.marker(latlng)
//                   .bindPopup(`<h3>Airline: ${feature.properties.airline}</h3>
//                   <hr/><h4>Destination: ${feature.properties.dst}</h4>`);
//       }
//   }).addTo(map);
// });

d3.json(torontoHoods).then(function(data) {
    //console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
      pointToLayer:function(feature, latlng){
          console.log(feature);
          return L.marker(latlng)
                  .bindPopup(`<h3>Neighborhood: ${feature.properties.AREA_NAME}</h3>
                  <hr/>${feature.properties.AREA_S_CD}</h4>`);
      }
  }).addTo(map);
});
