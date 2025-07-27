import React from "react";
import GeometryByIdPage from "src/modules/geometry/pages/GeometryPageById";
import { geometryIds } from "src/modules/geometry/schemas/geometry-schema";

interface GeometryByParamsProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return geometryIds.map((id) => ({
    id,
  }));
}

export default async function PageWithParams({
  params,
}: GeometryByParamsProps) {
  const { id } = await params;
  return <GeometryByIdPage id={id} />;
}
