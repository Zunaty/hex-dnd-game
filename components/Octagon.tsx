"use client";

import React from "react";
import { useOctStore } from "../store/octStore";
import { octToPixel } from "../utils/octMath";

interface OctagonProps {
  x: number;
  y: number;
}

const Octagon: React.FC<OctagonProps> = ({ x, y }) => {
  const { x: px, y: py } = octToPixel(x, y);
  const setSelectedOct = useOctStore((state) => state.setSelectedOct);
  const OCT_SIZE = 75;

  return (
    <div
      onClick={() => setSelectedOct({ x, y })}
      style={{
        position: "absolute",
        width: OCT_SIZE,
        height: OCT_SIZE,
        background: "rgba(0, 0, 0, 0.1)",
        border: "1px solid black",
        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        transform: `translate(${px}px, ${py}px)`,
      }}
    />
  );
};

export default Octagon;
