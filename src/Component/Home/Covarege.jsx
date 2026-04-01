import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const [centerData, setCenterData] = useState([]);

  useEffect(() => {
    fetch("/servicecenter.json") // ✅ correct path
      .then((res) => res.json())
      .then((data) => setCenterData(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold md:text-3xl text-[#0F75B8] pl-4">
          We are available in all major cities in Bangladesh
        </h1>
      </div>

      <div className="mt-5 border w-full h-[600px]">
        <MapContainer
          center={position}
          zoom={6.5}
          scrollWheelZoom={false}
          className="w-full h-[600px]"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* ✅ markers */}
          {centerData.map((center , id) => (
            <Marker
              key={id}
              position={[center.latitude, center.longitude]}
            >
              <Popup>{center.city} <br />
                service Area : {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;