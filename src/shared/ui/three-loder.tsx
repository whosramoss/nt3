"use client";

import React from "react";
import { useProgress, Html } from "@react-three/drei";

export default function ThreeLoader() {
  const { progress } = useProgress();
  return (
    <Html
      center
      className="mx-auto items-center text-sm font-bold text-[#f8fafc]"
    >
      {progress}%
    </Html>
  );
}
