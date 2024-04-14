import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import "../maps.css";

export default function Maps({ coord, passedData }) {
  const { location } = passedData;
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    // Update the key when coord changes
    setMapKey(prevKey => prevKey + 1);
  }, [coord]);

  return (
    <MapContainer key={mapKey} center={coord} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coord}>
        {location && <Popup>{location.city} <br /> {location.region}</Popup>}
      </Marker>
    </MapContainer>
  );
}
