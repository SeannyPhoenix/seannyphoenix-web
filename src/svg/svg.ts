const svgStart = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">`;
// const center = `<line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" stroke-width="5" stroke-linecap="round" />`;
const lines = [
  // 1, 0x01, 00000001
  `<line x1="50" y1="2.5" x2="100" y2="2.5" stroke="currentColor" stroke-width="5" stroke-linecap="round" />`,
  // 2, 0x02, 00000010
  `<line x1="50" y1="50" x2="100" y2="2.5" stroke="currentColor" stroke-width="5" stroke-linecap="round" />`,
  // 4, 0x04, 00000100
  `<line x1="50" y1="50" x2="100" y2="97" stroke="currentColor" stroke-width="5" stroke-linecap="round" />`,
  // 8, 0x08, 00001000
  `<line x1="50" y1="97" x2="100" y2="97" stroke="currentColor" stroke-width="5" stroke-linecap="round" />`,

  // 16, 0x10, 00010000
  `<line x1="50" y1="2.5" x2="0" y2="2.5" stroke="currentColor" stroke-width="5" stroke-linecap="round" />`,
  // 32, 0x20, 00100000
  `<line x1="50" y1="50" x2="0" y2="2.5" stroke="currentColor" stroke-width="5" stroke-linecap="round" />`,
  // 64, 0x40, 01000000
  `<line x1="50" y1="50" x2="0" y2="97" stroke="currentColor" stroke-width="5" stroke-linecap="round" />`,
  // 128, 0x80, 10000000
  `<line x1="50" y1="97" x2="0" y2="97" stroke="currentColor" stroke-width="5" stroke-linecap="round" />`,
] as const;
const svgEnd = `</svg>`;

export function glyph(num: number) {
  const selectedLines = lines
    .filter((_, index) => (num & (1 << index)) !== 0)
    .join("");
  return `${svgStart}${center}${selectedLines}${svgEnd}`;
}

export function dot() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="100"><circle cx="12.5" cy="75" r="5" fill="currentColor" />${svgEnd}`;
}

export default function glyphs(num: Uint8Array) {
  if (num.length !== 16) throw new Error("Invalid input length");
  return [
    Array.from(num.slice(6, 8)).map(glyph).join(""),
    Array.from(num.slice(8, 10)).map(glyph).join(""),
  ].join(dot());
}

type coords = { x: number; y: number };
const topRight = { x: 97.5, y: 2.5 };
const bottomRight = { x: 97.5, y: 97.5 };
const bottomLeft = { x: 2.5, y: 97.5 };
const topLeft = { x: 2.5, y: 2.5 };
const topCenter = { x: 50, y: 2.5 };
const center = { x: 50, y: 50 };
const bottomCenter = { x: 50, y: 97.5 };

type lineCoords = { from: coords; to: coords };
const linesCoords: lineCoords[] = [
  // 1, 0x01, 00000001
  { from: topCenter, to: topRight },
  // 2, 0x02, 00000010
  { from: center, to: topRight },
  // 4, 0x04, 00000100
  { from: center, to: bottomRight },
  // 8, 0x08, 00001000
  { from: bottomCenter, to: bottomRight },
  // 16, 0x10, 00010000
  { from: topCenter, to: topLeft },
  // 32, 0x20, 00100000
  { from: center, to: topLeft },
  // 64, 0x40, 01000000
  { from: center, to: bottomLeft },
  // 128, 0x80, 10000000
  { from: bottomCenter, to: bottomLeft },
] as const;
const verticalLineCoords = { from: topCenter, to: bottomCenter };

const spacer = `<svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="100"></svg>`;

export function glyphsV2(num: Uint8Array) {
  if (num.length !== 16) throw new Error("Invalid input length");
  return [
    Array.from(num.slice(6, 8)).map(glyphV2).join(""),
    Array.from(num.slice(8, 10)).map(glyphV2).join(""),
  ].join(dot());
}

export function glyphV2(num: number) {
  const selectedLines =
    linesCoords
      .filter((_, index) => (num & (1 << index)) !== 0)
      .map((lineCoords) => line(lineCoords))
      .join("") + line(verticalLineCoords);
  return `${svgStart}${selectedLines}${svgEnd}`;
}

function line({ from, to }: lineCoords) {
  return `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" stroke="currentColor" stroke-width="5" stroke-linecap="round" />`;
}

type Glyph = {
  num: number;
  clear: {
    left: boolean;
    right: boolean;
  };
};
