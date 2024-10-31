// MapComponent.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./MapComponent.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Home from "./../Home/Home";
// Set up the default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = ({ styles }) => {
  const position = [31.4949212, 74.3262017];
  const branches = [
    { name: "Arcadian Cafe, Lahore", position: [31.4949212, 74.3262017] },
    { name: "Arcadian Cafe, Islamabad", position: [33.6844, 73.0479] },
    { name: "Arcadian Cafe, Karachi", position: [24.8607, 67.0011] },
    { name: "Arcadian Cafe, Multan", position: [30.1575, 71.5249] },
  ];

  return (
    <>
      <div className="mapContainer">
        <MapContainer
          center={position}
          zoom={5}
          style={{
            height: styles?.height || "35vh",
            width: styles?.width || "100vw",
          }}
          zoomControl={true}
          whenCreated={(mapInstance) => {
            window.map = mapInstance;
            L.control
              .zoom({
                position: "bottomright",
              })
              .addTo(mapInstance);
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {branches.map((branch, index) => (
            <Marker key={branch.name} position={branch.position}>
              <Popup>{branch.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default MapComponent;
