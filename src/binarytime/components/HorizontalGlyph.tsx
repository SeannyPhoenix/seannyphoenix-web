import { bitArrayFromByte, type Bit } from "binarytime/bits"
import styled from "styled-components"

const scale = 30;

function size(s: number) {
  return scale * s
}

//#region CSS
const HorizontalBox = styled.div`
  display: flex;
  flex-direction: column;
  height: ${size(2)}px;
  width: ${size(2)}px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;

  border-bottom: solid gray;
`;


const Bottom = styled.div`
  display: flex;
  flex-direction: row;
`;

const TopLeft = styled.div<SegmentProps>`
  width: ${size(1)}px;
  height: ${size(1)}px;

  ${({highBit}) => highBit && `
    border-left: solid gray;
  `};
  ${({ lowBit }) => lowBit && `
    border-top-right-radius: 100%;
    border-top: solid gray;
    border-right: solid gray;
  `}
`;

const TopRight = styled.div<SegmentProps>`
  width: ${size(1)}px;
  height: ${size(1)}px;

  ${({highBit}) => highBit && `
    border-top-left-radius: 100%;
    border-top: solid gray;
    border-left: solid gray;
  `};
  ${({ lowBit }) => lowBit && `
    border-right: solid gray;
  `}
`;

const BottomLeft = styled.div<SegmentProps>`
  width: ${size(1)}px;
  height: ${size(1)}px;

  ${({highBit}) => highBit && `
    border-left: solid gray;
  `};
  ${({ lowBit }) => lowBit && `
    border-bottom-right-radius: 100%;
    border-bottom: solid gray;
    border-right: solid gray;
  `}
`;

const BottomRight = styled.div<SegmentProps>`
  width: ${size(1)}px;
  height: ${size(1)}px;

  ${({ highBit }) => highBit && `
    border-bottom-left-radius: 100%;
    border-bottom: solid gray;
    border-left: solid gray;
    `}
    ${({lowBit}) => lowBit && `
      border-right: solid gray;
    `};
`;
//#endregion

type SegmentProps = {
  highBit: Bit;
  lowBit: Bit;
}

type Props = {
  byte: number
}

export default function HorizontalGlyph({ byte }: Props) {
  const bits = bitArrayFromByte(byte)

  return (
    <HorizontalBox>
      <Top>
        <TopLeft
          highBit={bits[0]}
          lowBit={bits[1]}
        />
        <TopRight
          highBit={bits[2]}
          lowBit={bits[3]}
        />
      </Top>
      <Bottom>
        <BottomLeft
          highBit={bits[4]}
          lowBit={bits[5]}
        />
        <BottomRight
          highBit={bits[6]}
          lowBit={bits[7]}
        />
      </Bottom>
    </HorizontalBox>
  );
}
