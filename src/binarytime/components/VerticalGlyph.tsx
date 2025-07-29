import { bitArrayFromByte, type Bit } from "binarytime/bits"
import styled from "styled-components"

const scale = 30;

function size(s: number) {
  return scale * s
}

//#region CSS
const VerticalBox = styled.div`
  display: flex;
  flex-direction: row;
  height: ${size(2)}px;
  width: ${size(2)}px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column-reverse;

  border-right: solid gray;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const BottomLeft = styled.div<SegmentProps>`
  width: ${size(1)}px;
  height: ${size(1)}px;

  ${({highBit}) => highBit && `
    border-bottom: solid gray ;
  `};
  ${({ lowBit }) => lowBit && `
    border-top-left-radius: 100%;
    border-top: solid gray;
    border-left: solid gray;
  `}
`;

const TopLeft = styled.div<SegmentProps>`
  width: ${size(1)}px;
  height: ${size(1)}px;

  ${({highBit}) => highBit && `
    border-bottom-left-radius: 100%;
    border-bottom: solid gray;
    border-left: solid gray;
  `};
  ${({ lowBit }) => lowBit && `
    border-top: solid gray;
  `}
`;

const BottomRight = styled.div<SegmentProps>`
  width: ${size(1)}px;
  height: ${size(1)}px;

  ${({highBit}) => highBit && `
    border-bottom: solid gray;
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

  ${({ highBit }) => highBit && `
    border-bottom-right-radius: 100%;
    border-bottom: solid gray;
    border-right: solid gray;
    `}
    ${({lowBit}) => lowBit && `
      border-top: solid gray;
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

export default function VerticalGlyph({ byte }: Props) {
  const bits = bitArrayFromByte(byte)

  return (
    <VerticalBox>
      <Left>
        <BottomLeft 
          highBit={bits[0]}
          lowBit={bits[1]}
        />
        <TopLeft
          highBit={bits[2]}
          lowBit={bits[3]}
        />
      </Left>
      <Right>
        <BottomRight
          highBit={bits[4]}
          lowBit={bits[5]}
        />
        <TopRight
          highBit={bits[6]}
          lowBit={bits[7]}
        />
      </Right>
    </VerticalBox>
  );
}
