"use client";

import React from "react";
import GeometryByIdPage from "src/modules/geometry/pages/GeometryPageById";

interface GeometryByParamsProps {
  params: { id: string };
}

export default function PageWithParams({ params }: GeometryByParamsProps) {
  return <GeometryByIdPage id={params.id} />;
}
