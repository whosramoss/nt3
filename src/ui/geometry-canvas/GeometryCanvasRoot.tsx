import React from "react";
import { Canvas } from "@react-three/fiber";
import { CommonsProps } from "@utils/utils";

export default function GeometryCanvasRoot({ children }: CommonsProps) {
  return (
    <div className='overflow-hidden h-screen bg-primary'>
      <Canvas shadows camera={{ position: [-2, 2, 4] }}>
        {children}
      </Canvas>
    </div>
  )
}