export const OCT_SIZE = 50; // Adjust size as needed

interface OctPixel {
  x: number;
  y: number;
}

// Function to calculate positions for octagons in a connected grid
export function octToPixel(x: number, y: number): OctPixel {
  const width = OCT_SIZE * (1 + Math.SQRT2 / 2); // width of the octagon including overlap
  const height = OCT_SIZE * (1 + Math.SQRT2 / 2); // height of the octagon including overlap
  const px = x * width + (y % 2) * (width / 2); // staggered rows
  const py = y * height * 0.75; // 75% height for staggered rows
  return { x: px, y: py };
}

interface Oct {
  x: number;
  y: number;
}

export function generateOctGrid(size: number): Oct[] {
  const octs: Oct[] = [];
  for (let x = -size; x <= size; x++) {
    for (let y = -size; y <= size; y++) {
      octs.push({ x, y });
    }
  }
  return octs;
}
