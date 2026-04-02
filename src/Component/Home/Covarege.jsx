import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const [centerData, setCenterData] = useState([]);
  const mapRef = useRef(null);
  useEffect(() => {
    fetch("/servicecenter.json") // ✅ correct path
      .then((res) => res.json())
      .then((data) => setCenterData(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e. target.location.value.toLowerCase();
    const district = centerData.find((center) =>
      center.city.toLowerCase().includes(location)  );

    if (district) {
      const cord = [district.latitude, district.longitude];
      mapRef.current.flyTo(cord, 12); // ✅ flyTo method
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold md:text-3xl text-[#0F75B8] pl-4">
          We are available in all major cities in Bangladesh
        </h1>
      </div>

      <div className="mt-5 w-full flex justify-end">
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="location" type="search" required placeholder="Search" />
          </label>
        </form>
      </div>

      <div className="mt-5 border w-full h-[600px]">
        <MapContainer
          center={position}
          zoom={6.5}
          scrollWheelZoom={false}
          className="w-full h-[600px]"
          ref={mapRef}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* ✅ markers */}
          {centerData.map((center, id) => (
            <Marker key={id} position={[center.latitude, center.longitude]}>
              <Popup>
                {center.city} <br />
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
