"use client";

import React from "react";
import OctagonGrid from "@/components/OctagonGrid";
import { useOctStore } from "@/store/octStore";

import HexagonGrid from "@/components/HexagonGrid";
import { useHexStore } from "@/store/hexStore";

const Home: React.FC = () => {
  const selectedOct = useOctStore((state) => state.selectedOct);
  const selectedHex = useHexStore((state) => state.selectedHex);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* <OctagonGrid size={50} /> Adjust size based on the desired grid size */}
      {/* {selectedOct && (
        <div className="fixed bottom-4 left-4 text-green-500">
          Selected Oct: {selectedOct.x}, {selectedOct.y}
        </div>
      )} */}
      <HexagonGrid size={50} /> {/* Adjust size based on the desired grid size */}
      {selectedHex && (
        <div className="fixed bottom-4 left-4 text-green-500">
          Selected Hex: {selectedHex.q}, {selectedHex.r}
        </div>
      )}
    </div>
  );
};

export default Home;
