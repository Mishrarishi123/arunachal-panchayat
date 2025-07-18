"use client";
import { motion } from "framer-motion";
import { Canvas, useThree } from "@react-three/fiber";
import Image from "next/image";
import "./Map.css";
import { Mapmodal } from "../mapmodal/Mapmodal";
import { Suspense, useEffect, useRef, useState } from "react";
import DistrictReportCard from "../ui/DistrictReportCard";

const DISTRICT_DATA = [
  {
    name: "Lower Siang",
    modelId: "polySurface29",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Upper Siang",
    modelId: "Text013",
    score: 15,
    rank: "7th",
    topCriteria: "Water, Health, Education",
    totalSchemes: 60,
    completedSchemes: 25,
    ongoingSchemes: 35,
    completedBudget: "₹30.0 Cr",
    ongoingBudget: "₹45.0 Cr",
    tags: [
      { name: "Health", color: "blue" },
      { name: "Education", color: "yellow" },
    ],
    panchayatBhawans: 8,
    assets: 12,
    revenue: "₹7.8L",
    lastUpdated: "10 July 2025",
  },
  {
    name: "Anjaw",
    modelId: "Text019",
    score: 22,
    rank: "1st",
    topCriteria: "Tourism, Roads, Power",
    totalSchemes: 30,
    completedSchemes: 15,
    ongoingSchemes: 15,
    completedBudget: "₹18.0 Cr",
    ongoingBudget: "₹20.0 Cr",
    tags: [
      { name: "Tourism", color: "orange" },
      { name: "Roads", color: "gray" },
    ],
    panchayatBhawans: 3,
    assets: 7,
    revenue: "₹6.5L",
    lastUpdated: "15 July 2025",
  },
  {
    name: "Diang Valley",
    modelId: "Text014",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Papum Pare",
    modelId: "polySurface44",
    score: 22,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Changlang",
    modelId: "Text020",
    score: 22,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Tirap",
    modelId: "Text021",
    score: 24,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "East Siang",
    modelId: "polySurface22",
    score: 23,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Namsai",
    modelId: "Text025",
    score: 17,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Lower Dibang Valley",
    modelId: "Text015",
    score: 19,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "West Kameng",
    modelId: "Text003",
    score: 17,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Papum Pare",
    modelId: "Text003",
    score: 87,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Longding",
    modelId: "Text022",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Kamle",
    modelId: "Text008",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Keyi Panyor",
    modelId: "Text023",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Siang",
    modelId: "Text012",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Upper Subansiri",
    modelId: "polySurface37",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Kra Daadi",
    modelId: "Text007",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Pakke- Kessang",
    modelId: "Text004",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Shi Yomi",
    modelId: "Text010",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Kurung Kumey",
    modelId: "polySurface39",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Bichom",
    modelId: "Text001",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "West Siang",
    modelId: "Text011",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "East Kameng",
    modelId: "polySurface51",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Tawang",
    modelId: "Text002",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
  {
    name: "Lohit",
    modelId: "Text018",
    score: 20,
    rank: "3rd",
    topCriteria: "UC, GeoTag, SHG",
    totalSchemes: 44,
    completedSchemes: 11,
    ongoingSchemes: 33,
    completedBudget: "₹23.5 Cr",
    ongoingBudget: "₹23.5 Cr",
    tags: [
      { name: "Infra", color: "purple" },
      { name: "Green", color: "green" },
      { name: "Livelihood", color: "red" },
    ],
    panchayatBhawans: 5,
    assets: 9,
    revenue: "₹5.2L",
    lastUpdated: "12 July 2025",
  },
];

function RotatingMapGroup({ children }) {
  const groupRef = useRef();
  const { viewport } = useThree();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const baseScale = Math.min(viewport.width, viewport.height) * 0.01;
    setScale(baseScale);
  }, [viewport]);

  return (
    <group ref={groupRef} scale={scale} rotation={[0, 0, Math.PI / 210]}>
      {children}
    </group>
  );
}

export default function Map() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleDistrictClick = (meshName) => {
    const found = DISTRICT_DATA.find((d) => d.modelId === meshName);
    setSelectedDistrict(found || null);
  };

  return (
    <div className="map-section">
      {selectedDistrict && (
        <div className="popup-overlay">
          <div className="popup-top-left">
            <DistrictReportCard
              districtData={selectedDistrict}
              onClose={() => setSelectedDistrict(null)}
            />
          </div>
        </div>
      )}

      <Image
        src="/images/map.jpg"
        alt="Map Background"
        fill={true}
        className="map-bg-image"
        priority
      />

      <div className="map-overlay-white" />
      <div className="map-overlay-left" />
      <div className="map-overlay-right" />

      <motion.div
        className="map-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>PANCHAYATI RAAJ AT A GLANCE</h1>
      </motion.div>

      <motion.div
        className="map-canvas-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="map-container">
          <Canvas
            className="map-canvas"
            camera={{
              position: [0, 120, 0],
              fov: 35,
              near: 0.1,
              far: 1000,
            }}
            shadows
            style={{ background: "transparent" }}
            onWheel={(e) => e.preventDefault()}
          >
            <ambientLight intensity={1.0} />
            <directionalLight
              position={[20, 60, 20]}
              intensity={1.8}
              castShadow
            />
            <pointLight position={[-20, 30, -20]} intensity={0.6} />

            <Suspense fallback="Loading...">
              <RotatingMapGroup>
                <Mapmodal onDistrictClick={handleDistrictClick} />
              </RotatingMapGroup>
            </Suspense>
          </Canvas>
        </div>
      </motion.div>
    </div>
  );
}
