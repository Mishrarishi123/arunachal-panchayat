"use client";
import { motion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Image from "next/image";
import "./Map.css";
import { Mapmodal } from "../mapmodal/Mapmodal";
import { Suspense, useEffect, useRef, useState } from "react";

function RotatingMapGroup({ children }) {
  const groupRef = useRef();
  const { viewport } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const baseScale = Math.min(viewport.width, viewport.height) * 0.01;
    setScale(baseScale);
  }, [viewport]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Rotation effect
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y +=
        (mouse.x * 0.2 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x +=
        (mouse.y * 0.2 - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={scale} rotation={[0, 0, Math.PI / 210]}>
      {children}
    </group>
  );
}

export default function Map() {
  return (
    <div className="map-section">
      {/* Background Image */}
      <Image
        src="/images/map.jpg"
        alt="Map Background"
        fill={true}
        className="map-bg-image"
        priority
      />

      {/* Overlays */}
      <div className="map-overlay-white" />
      <div className="map-overlay-left" />
      <div className="map-overlay-right" />

      {/* Heading */}
      <motion.div
        className="map-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>PANCHAYATI RAAJ AT A GLANCE</h1>
      </motion.div>

      {/* 3D Model Canvas replacing static image */}
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
              position: [0, 120, 160],
              fov: 35,
              near: 0.1,
              far: 1000,
            }}
            shadows
            style={{ background: "transparent" }}
            onWheel={(e) => e.preventDefault()}
          >
            {/* Lights */}
            <ambientLight intensity={1.0} />
            <directionalLight
              position={[20, 60, 20]}
              intensity={1.8}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-far={200}
              shadow-camera-left={-100}
              shadow-camera-right={100}
              shadow-camera-top={100}
              shadow-camera-bottom={-100}
            />
            <pointLight position={[-20, 30, -20]} intensity={0.6} />

            {/* Suspense with rotating group */}
            <Suspense fallback="Loading...">
              <RotatingMapGroup>
                <Mapmodal />
              </RotatingMapGroup>
            </Suspense>

            {/* Orbit Controls */}
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              enableRotate={true}
              enableZoom={false}
              enablePan={false}
              enableDamping={true}
              dampingFactor={0.1}
              rotateSpeed={0.8}
              zoomSpeed={0.5}
              mouseButtons={{
                LEFT: 0,
                MIDDLE: 1,
                RIGHT: 2,
              }}
            />
          </Canvas>
        </div>
      </motion.div>
    </div>
  );
}
