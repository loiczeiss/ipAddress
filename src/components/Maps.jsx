import {MapContainer, TileLayer} from 'react-leaflet'

export default function Maps({coord}) {
  return (
<MapContainer center={[32.69922, -117.11281]} zoom={13}>
  <TileLayer
  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'/>

</MapContainer>
  )
}
