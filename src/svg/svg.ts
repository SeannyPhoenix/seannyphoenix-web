const center = `<line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" stroke-width="5" />`;
const lines = [
  `<line x1="50" y1="3" x2="100" y2="3" stroke="currentColor" stroke-width="5" />`, // 0, 0x00, 00000000
  `<line x1="50" y1="50" x2="100" y2="3" stroke="currentColor" stroke-width="5" />`, // 1, 0x01, 00000001
  `<line x1="50" y1="50" x2="100" y2="97" stroke="currentColor" stroke-width="5" />`, // 2, 0x02, 00000010
  `<line x1="50" y1="97" x2="100" y2="97" stroke="currentColor" stroke-width="5" />`, // 0, 0x04, 00000100
  `<line x1="50" y1="3" x2="0" y2="3" stroke="currentColor" stroke-width="5" />`, // 4, 0x08, 00001000
  `<line x1="50" y1="50" x2="0" y2="3" stroke="currentColor" stroke-width="5" />`, // 8, 0x10, 00010000
  `<line x1="50" y1="97" x2="0" y2="3" stroke="currentColor" stroke-width="5" />`, // 16, 0x20, 00100000
  `<line x1="50" y1="0" x2="0" y2="97" stroke="currentColor" stroke-width="5" />`, // 32, 0x40, 01000000
  `<line x1="50" y1="0" x2="0" y2="97" stroke="currentColor" stroke-width="5" />`, // 64, 0x80, 10000000
] as const;

export default function buildSVG(num: number) {
  const selectedLines = lines.filter((_, index) => (num & (1 << index)) !== 0);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">${center}${selectedLines.join(
    ""
  )}</svg>`;
}
