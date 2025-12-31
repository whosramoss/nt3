import React from "react";

interface Props {
  type: string;
}

export default function ThreeElementByType({ type }: Props) {
  const map: { [key: string]: React.FC } = {
    box: () => <boxGeometry />,
    sphere: () => <sphereGeometry />,
    cone: () => <coneGeometry />,
    cylinder: () => <cylinderGeometry />,
    ring: () => <ringGeometry />,
    icosahedron: () => <icosahedronGeometry />,
    dodecahedron: () => <dodecahedronGeometry />,
    torus: () => <torusGeometry />,
    torusKnot: () => <torusKnotGeometry />,
  };

  const Component = map[type] || null;

  return Component ? <Component /> : <div>Component not found</div>;
}
