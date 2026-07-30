'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const cities = [
    { name: 'Samarinda', lat: -0.5022, lng: 117.1536 },
    { name: 'Balikpapan', lat: -1.2379, lng: 116.8529 },
    { name: 'Bontang', lat: 0.1324, lng: 117.5 },
    { name: 'Tarakan', lat: 3.3, lng: 117.6333 },
    { name: 'Tenggarong', lat: -0.4, lng: 116.967 },
    { name: 'Muara Wahau', lat: 1.0596, lng: 116.8408 },
    { name: 'Sangatta', lat: -0.4965, lng: 117.536 },
    { name: 'Nunukan', lat: 4.1367, lng: 117.6669 },
    { name: 'Tanahgrogot', lat: -1.9022, lng: 116.1892 },
    { name: 'Sebulu', lat: -0.1927, lng: 116.9895 },
    { name: 'Berau', lat: 2.0, lng: 117.3 },
    { name: 'Malinau', lat: 3.5881, lng: 116.6233 },
    { name: 'Melak', lat: -0.242321, lng: 115.802769 },
    { name: 'Tanjung Selor', lat: 2.85, lng: 117.3833 },
    { name: 'Tanjung Redeb', lat: 2.16, lng: 117.49265 },
];
const pinIcon = new L.DivIcon({
    className: '',
    html: `<div style="
    width:20px;height:20px;border-radius:50%;
    background:linear-gradient(135deg,#4f7dff,#8b5cf6);
    border:1px solid white;box-shadow:0 0 0 4px rgba(79,125,255,0.25);
  "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
});

export default function CityReachMap() {
    return (
        <div style={{zIndex:0, position:'relative'}}>
            <MapContainer
                center={[0.5, 117]}
                zoom={6}
                scrollWheelZoom={false}
                style={{ height: '500px', width: '100%', borderRadius: '16px' }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; OpenStreetMap &copy; CARTO'
                />
                {cities.map((city) => (
                    <Marker key={city.name} position={[city.lat, city.lng]} icon={pinIcon}>
                        <Popup>{city.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
