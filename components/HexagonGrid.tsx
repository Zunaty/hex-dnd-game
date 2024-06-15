"use client";

import React from "react";
import Hexagon from "./Hexagon";
import { generateHexGrid } from "../utils/hexMath";

interface HexagonGridProps {
  size: number;
}

const HexagonGrid: React.FC<HexagonGridProps> = ({ size }) => {
  const hexes = generateHexGrid(size);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {hexes.map(({ q, r }) => (
        <Hexagon
          key={`${q},${r}`}
          q={q}
          r={r}
        />
      ))}
    </div>
  );
};

export default HexagonGrid;
