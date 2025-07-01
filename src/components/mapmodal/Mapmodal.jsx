"use client";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";

export function Mapmodal(props) {
  const { nodes, materials } = useGLTF("/modals/MAP_AP.glb"); // Make sure this path is correct

  const [hovered, setHovered] = useState(null);

  const handlePointerOver = (name) => {
    setHovered(name);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setHovered(null);
    document.body.style.cursor = "default";
  };

  const renderMesh = (name) => {
    const node = nodes[name];
    if (!node?.geometry) return null;

    return (
      <mesh
        key={name}
        geometry={node.geometry}
        material={materials.Material}
        scale={hovered === name ? [1, 1, 1] : [1, 1, 1]}
        onPointerOver={() => handlePointerOver(name)}
        onPointerOut={handlePointerOut}
      />
    );
  };






  

  const meshNames = [
    "polySurface44",
    "polySurface22",
    "polySurface51",
    "polySurface39",
    "polySurface37",
    "polySurface29",
    "Text001",
    "Text002",
    "Text003",
    "Text004",
    "Text007",
    "Text008",
    "Text010",
    "Text011",
    "Text012",
    "Text013",
    "Text014",
    "Text015",
    "Text018",
    "Text019",
    "Text020",
    "Text021",
    "Text022",
    "Text023",
    "Text025",
  ];

  return (
    <group {...props} dispose={null}>
      {meshNames.map(renderMesh)}
    </group>
  );
}
