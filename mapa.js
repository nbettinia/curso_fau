// Definir atributos iniciales para el Mapa
const MAP_ZOOM = 7
const MAP_CENTER = [-19.9949018,-69.3224149]

// Crear instancia del Mapa
var map = L.map('myMap').setView(MAP_CENTER, MAP_ZOOM)

// Crear capa de sectores y Copyright del Mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

function MostrarDato(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties) {
   let dato_a_mostrar = `<p>
      <h5><b>Comuna: ${feature.properties."Comuna"}</h5><br/>
      <span><b>Mujeres</b>: ${feature.properties."Mujeres"}</span><br/>
      <span><b>Hombres</b>: ${feature.properties."Hombres"}</span><br/>
      </p>`
   layer.bindPopup(dato_a_mostrar);
  }
};

function estiloMarker(feature, latlng) {
    return L.marker(latlng, {
        alt: feature.properties.coordinates
    })
};

// Se agrega data al Mapa
d3.json('./mapa.json')
  .then((geojson) => {
  
 }).addTo(map);
  
  L.geoJSON(geojson, {
      onEachFeature: MostrarDato
      pointToLayer: estiloMarker // Función de estilo
      }).addTo(map)
  });
