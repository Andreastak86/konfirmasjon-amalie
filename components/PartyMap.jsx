"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function PartyMap({
    location,
    zoom = 13,
    popupText = "Selskapet ligger her",
    mapId = "party", // Unik ID
}) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => {
            document.querySelector(`#map-${mapId}`)?.remove(); // Rydd opp Leaflet-container
        };
    }, [mapId]);

    if (!isMounted) {
        return <p>Laster kart...</p>; // Feedback til bruker
    }

    return (
        <div
            id={`map-${mapId}`} // Unik ID for container
            className='h-64 w-full border border-purple-200 rounded-lg overflow-hidden'
        >
            <MapContainer
                key={mapId} // Unik nøkkel
                center={location}
                zoom={zoom}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
                className='h-full w-full'
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={location}>
                    <Popup>{popupText}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
