"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ThreeLoader from "@ui/three-loder";
import { useControls } from "leva";
import { Stats, Environment, OrbitControls } from "@react-three/drei";
import ThreeElementByType from "@ui/three-element-by-type";

interface Props {
  type: string;
}

export default function Geometry({ type }: Props) {
  const config = useControls({
    autoRotate: !0,
    gridHelper: !0,
    axesHelper: !0,
    stats: !0,
  });

  return (
    <div className="h-screen overflow-hidden bg-primary">
      <Canvas shadows camera={{ position: [-2, 2, 4] }}>
        <Suspense fallback={<ThreeLoader />}>
          <Environment
            files={"/images/venice_sunset_1k.hdr.jpg"}
            background
            backgroundBlurriness={0.8}
          />
          <gridHelper position-y={0} visible={config.gridHelper} />
          <mesh receiveShadow scale={1}>
            <ThreeElementByType type={type} />
            <meshStandardMaterial side={2} />
          </mesh>
          <OrbitControls autoRotate={config.autoRotate} target-y={0.5} />
          <axesHelper args={[5]} visible={config.axesHelper} />
          {config.stats && <Stats />}
        </Suspense>
      </Canvas>
    </div>
  );
}
