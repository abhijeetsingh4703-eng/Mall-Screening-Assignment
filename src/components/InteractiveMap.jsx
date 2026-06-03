import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MINNESOTA_COORDS = [-93.2650, 44.9778];

const ORIGINS = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
  { name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { name: "Dallas", coordinates: [-96.797, 32.7767] },
  { name: "Seattle", coordinates: [-122.3321, 47.6062] },
  { name: "Miami", coordinates: [-80.1918, 25.7617] },
];

export default function InteractiveMap() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <ComposableMap projection="geoAlbersUsa" style={{ width: "100%", height: "100%" }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isMinnesota = geo.properties.name === "Minnesota";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isMinnesota ? "rgba(226, 192, 68, 0.4)" : "rgba(255,255,255,0.05)"}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "rgba(226, 192, 68, 0.2)", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {ORIGINS.map(({ name, coordinates }, i) => (
          <motion.g
            key={name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{
              duration: 2,
              delay: 1 + i * 0.2,
              ease: "easeInOut",
            }}
          >
            <Line
              from={coordinates}
              to={MINNESOTA_COORDS}
              stroke="#e2c044"
              strokeWidth={1.5}
              strokeLinecap="round"
              style={{
                strokeDasharray: "4 4",
              }}
            />
          </motion.g>
        ))}

        {ORIGINS.map(({ name, coordinates }, i) => (
          <Marker key={name} coordinates={coordinates}>
            <motion.circle
              r={3}
              fill="#fff"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.2 }}
            />
          </Marker>
        ))}

        <Marker coordinates={MINNESOTA_COORDS}>
          <circle r={6} fill="#e2c044" stroke="#000" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={-15}
            style={{ fontFamily: "Inter", fill: "#e2c044", fontSize: "14px", fontWeight: "bold" }}
          >
            MOA / MSP
          </text>
        </Marker>
      </ComposableMap>
    </div>
  );
}
