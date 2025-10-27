import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

const MapView = ({ earthquakes }) => {
  const [mapCenter] = useState([20.5937, 78.9629]); // Center India

  const earthquakeIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
    iconSize: [30, 30],
  });

  // Define map bounds to prevent infinite panning
  const bounds = [
    [-90, -180],
    [90, 180],
  ];

  return (
    <div className="w-full h-[70vh] md:h-[75vh] border rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={mapCenter}
        zoom={3}
        minZoom={2}                // prevents zooming out too far
        maxZoom={8}                // limits zoom-in
        maxBounds={bounds}         // locks panning within world
        maxBoundsViscosity={1.0}   // makes bounds strict
        worldCopyJump={false}      // disables infinite horizontal wrap
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {earthquakes.map((eq) => (
          <Marker
            key={eq.id}
            position={[eq.geometry.coordinates[1], eq.geometry.coordinates[0]]}
            icon={earthquakeIcon}
          >
            <Popup>
              <strong>{eq.properties.place}</strong><br />
              Magnitude: {eq.properties.mag}<br />
              Time: {new Date(eq.properties.time).toLocaleString()}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
