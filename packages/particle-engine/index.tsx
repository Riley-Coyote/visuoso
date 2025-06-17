"use client";
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

export function ParticleField({ variant = "ambient" }: { variant?: "ambient"|"interactive" }) {
  // tiny PoC; sampled points and slow drift
  const count = variant === "ambient" ? 800 : 2000;
  return (
    <Canvas style={{ position: "fixed", inset: 0, zIndex: 0 }}>
      <Points limit={count}>
        <PointMaterial color="white" size={0.5} sizeAttenuation depthWrite={false}/>
      </Points>
    </Canvas>
  );
}
