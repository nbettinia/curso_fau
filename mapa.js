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
      <h5>Comuna: ${feature.properties.COMUNA}</h5><br/>
      <span><b>Mujeres</b>: ${feature.properties.TOT_M}</span><br/>
      <span><b>Hombres</b>: ${feature.properties.TOTAL_H}</span><br/>
      <span><b>Total</b>: ${feature.properties.TOT_COM}</span><br/>
      </p>`
   layer.bindPopup(dato_a_mostrar);
  }
}

// Se agrega data al Mapa
d3.json('./mapa.json')
  .then((geojson) => {
    L.geoJSON(geojson, {
      onEachFeature: MostrarDato
      }).addTo(map)
  })


  //d3.json('./mapa.json')
  //.then((geojson) => {
    //L.geoJSON(geojson, {
      //onEachFeature: MostrarDato,

      //pointToLayer: function (geoJsonPoint, latlng) {
        //return L.circleMarker(latlng).bindPopup(`Mortalidad 2008: ${geoJsonPoint.mortalidad_2008}`)
      //},
      //style: function (geoJsonPoint) {
        //let color = (geoJsonPoint.mortalidad_2008 > 20) ? 'red' : 'green'
        //((return { fillColor: color}
      //}
    //}).addTo(map)
  //})
