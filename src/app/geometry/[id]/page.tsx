import React from "react";
import Geometry from "src/modules/geometry/components/Geometry";
import { GeometryService } from "src/modules/geometry/services/geometry-service";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return GeometryService.getGeometryTypes();
}

export default async function PageById({ params }: Props) {
  const { id } = await params;

  return <Geometry type={id} />;
}
