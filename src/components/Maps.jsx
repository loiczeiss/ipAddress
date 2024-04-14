import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "../maps.css"
export default function Maps({coord, passedData}) {
  const {  location } = passedData;
  return (
<MapContainer  center={coord} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={coord}>
{location &&     <Popup>
  {location.city} <br /> {location.region}
    </Popup>}
  </Marker>
</MapContainer>
  )
}
