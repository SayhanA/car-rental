// components/CarMap.jsx
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { twMerge } from "tailwind-merge";

// Fix for default marker icon (important!)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const CarMap = ({ className = "", latitude, longitude, carData }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={14}
      scrollWheelZoom={false}
      className={`h-full min-h-[400px] w-full ${twMerge(className)}`}
      // style={{ minHeight: "400px", height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='© <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          <strong>
            {carData?.make} {carData?.model}
          </strong>
          <br />
          {carData?.location}
          <br />
          Price: {carData?.price}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default CarMap;
