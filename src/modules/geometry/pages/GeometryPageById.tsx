import React from "react";
import { GeometryCanvas } from "src/modules/geometry/components/geometry-canvas";

interface GeometryByIdProps {
  id: string;
}

export default function GeometryByIdPage({ id }: GeometryByIdProps) {
  return (
    <GeometryCanvas.Root>
      <GeometryCanvas.Loader>
        <GeometryCanvas.Config>
          <GeometryCanvas.Component id={id} />
        </GeometryCanvas.Config>
      </GeometryCanvas.Loader>
    </GeometryCanvas.Root>
  );
}
