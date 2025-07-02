"use client";
import React, { useState, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

export const Mapmodal = forwardRef(function Mapmodal(props, ref) {
  const { nodes, materials } = useGLTF("/modals/MAP_AP.glb");
  const [hoveredName, setHoveredName] = useState(null);

  const handlePointerOver = (name) => {
    setHoveredName(name);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setHoveredName(null);
    document.body.style.cursor = "default";
  };

  const renderMesh = (name) => {
    const node = nodes[name];
    const geometry = node?.geometry;

    if (!geometry) return null;

    const isHovered = hoveredName === name;
    const isAnyHovered = hoveredName !== null;

    // Apply spring **per mesh** based on its own hovered state
    const { scale } = useSpring({
      scale: isHovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
      config: { mass: 1, tension: 180, friction: 18 },
    });

    return (
      <a.mesh
        key={name}
        geometry={geometry}
        material={materials.Material}
        scale={scale}
        onPointerOver={(e) => {
          handlePointerOver(name);
          e.stopPropagation();
        }}
        onPointerOut={(e) => {
          handlePointerOut();
          e.stopPropagation();
        }}
        onClick={(e) => {
          e.stopPropagation();
          props.onMeshClick?.(node);
        }}
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
    <group ref={ref} {...props} dispose={null}>
      {meshNames.map(renderMesh)}
    </group>
  );
});
