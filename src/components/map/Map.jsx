"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Map.css";


export default function MapInteractive() {
  return (
    <div className="map-section">
      {/* Background Image */}
      <Image
        src="/images/map.jpg"
        alt="Map Background"
        fill="true"
        className="map-bg-image"
        priority
      />

      {/* Overlays */}
      <div className="map-overlay-white" />
      <div className="map-overlay-left" />
      <div className="map-overlay-right" />

      {/* Text Content */}
      <motion.div
        className="map-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // trigger when 30% visible
      >
        <h1>PANCHAYATI RAAJ AT A GLANCE</h1>
      </motion.div>

      <motion.div
        className="map-image"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src="./images/mapcity.png" alt="Map" />
      </motion.div>
    </div>
  );
}
