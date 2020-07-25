import dotenv from 'dotenv'

dotenv.config({
  path: '../../config/.env.dev',
})

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN
console.log('MAPBOX_ACCESS_TOKEN', MAPBOX_ACCESS_TOKEN)

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 9,
  center: [-71.157895, 42.707741],
})
