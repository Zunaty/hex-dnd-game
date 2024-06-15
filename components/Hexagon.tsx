"use client";

import React from "react";
import { useHexStore } from "@/store/hexStore";
import { hexToPixel, HEX_SIZE } from "@/utils/hexMath";

interface HexagonProps {
  q: number;
  r: number;
}

const Hexagon: React.FC<HexagonProps> = ({ q, r }) => {
  const { x: px, y: py } = hexToPixel(q, r);
  const setSelectedHex = useHexStore((state) => state.setSelectedHex);

  return (
    <div
      onClick={() => setSelectedHex({ q, r })}
      style={{
        position: "absolute",
        width: HEX_SIZE * Math.sqrt(3),
        height: HEX_SIZE * 2,
        background: "rgba(0, 0, 0, 0.1)",
        border: "1px solid black",
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        transform: `translate(${px}px, ${py}px)`,
      }}
    />
  );
};

export default Hexagon;
