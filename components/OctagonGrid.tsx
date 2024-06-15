"use client";

import React from "react";
import Octagon from "./Octagon";
import { generateOctGrid } from "../utils/octMath";

interface OctagonGridProps {
  size: number;
}

const OctagonGrid: React.FC<OctagonGridProps> = ({ size }) => {
  const octs = generateOctGrid(size);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {octs.map(({ x, y }) => (
        <Octagon
          key={`${x},${y}`}
          x={x}
          y={y}
        />
      ))}
    </div>
  );
};

export default OctagonGrid;
