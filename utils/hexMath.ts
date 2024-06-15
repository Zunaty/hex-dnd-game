export const HEX_SIZE = 50; // Adjust size as needed

interface HexPixel {
  x: number;
  y: number;
}

// Function to calculate positions for hexagons in a connected grid
export function hexToPixel(q: number, r: number): HexPixel {
  const width = HEX_SIZE * Math.sqrt(3); // width of the hexagon
  const height = HEX_SIZE * 2; // height of the hexagon
  const px = q * width + (r % 2) * (width / 2); // staggered columns
  const py = r * ((height * 3) / 4); // 75% height for staggered rows
  return { x: px, y: py };
}

interface Hex {
  q: number;
  r: number;
}

export function generateHexGrid(size: number): Hex[] {
  const hexes: Hex[] = [];
  for (let q = -size; q <= size; q++) {
    for (let r = -size; r <= size; r++) {
      if (Math.abs(q + r) <= size) {
        hexes.push({ q, r });
      }
    }
  }
  return hexes;
}
