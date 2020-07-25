const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1Ijoic29kYWgxMTciLCJhIjoiY2tkMjgwMWt2MWFydjJxcXJ4Y3c3bTh1cCJ9.RK88I6XiiOu3j6cJQejuLA'

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 9,
  center: [-71.157895, 42.707741],
})

function loadMap() {
  map.on('load', function () {
    map.addLayer({
      id: 'points',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-71.157895, 42.707741],
            },
            properties: {
              storeId: '0001',
              icon: 'shop',
            },
          },
        },
      },
      layout: {
        'icon-image': '{icon}-15',
        'icon-size': 1.5,
        'text-field': '{storeId}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.9],
        'text-anchor': 'top',
      },
    })
  })
}
