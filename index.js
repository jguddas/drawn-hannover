import { tileLayer, map } from 'leaflet'
import 'leaflet/dist/leaflet.css'

import './style.css'

tileLayer('https://raw.githubusercontent.com/jguddas/drawn-hannover/master/tiles/{z}/{x}/{y}.png', { maxZoom: 16, minZoom: 10 })
  .addTo(map(document.body, { zoomControl: false, attributionControl: false })
    .setView([52.3798, 9.7614], 14))

