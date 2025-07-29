export type Bit = 0 | 1

// bitArray assumes 
export function bitArrayFromByte(byte: number): Bit[] {
  const bits: Bit[] = []

  for (let i = 0; i < 8; i++, byte >>= 1)
  {
    bits.unshift(getLowestBit(byte))
  }
  return bits
}

// byteArray accepts any number and returns an array
// of 8-element arrays representing the number
// This is in big-endian order
export function byteArray(num: number): Bit[][] {
  const bytes: Bit[][] = []

  while (num > 0) {
    bytes.unshift(bitArrayFromByte(num))
    num >>= 8
  }

  return bytes
}

// getOffsetBit gets the value of the bit in the 0th lowest position (LSB first)
// Given 0b11010011
//  | Offset | Value
//  | 0      | 1  (LSB)
//  | 1      | 1
//  | 2      | 0
//  | 3      | 0
//  | 4      | 1
//  | 5      | 0
//  | 6      | 1
//  | 7      | 1  (MSB)
function getOffsetBit(n: number, o: number): Bit {
  return getLowestBit(n >> o)
}

function getLowestBit(n: number): Bit {
  // safe type assertion since (x & 1)
  // will always be 1 or 0
  return (n & 1) as Bit
}
