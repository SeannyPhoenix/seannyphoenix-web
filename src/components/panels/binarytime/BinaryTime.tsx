import HorizontalGlyph from "binarytime/components/HorizontalGlyph";
import VerticalGlyph from "binarytime/components/VerticalGlyph";
import { Vert } from "components/common";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 20px;
  width: 30px;
  text-align: center;

  margin: 5px;
`

export default function BinaryTime() {
  const [num, setNum] = useState(0)

  function addFunc(by: number) {
    return (n: number) => {
      n += by
      if (n > 255 ){
        n %= 256
      }
      return n
    }
  }

  function subFunc(by: number) {
    return (n: number) => {
      n -= by
      if (n < 0) {
        n += 256
      }
      return n
    }
  }

  return (
    <Vert>
      <div>
        <Button onClick={() => setNum(addFunc(1))}>+ 1</Button>
        <Button onClick={() => setNum(addFunc(5))}>+ 5</Button>
      </div>
      <div>
        <Button onClick={() => setNum(subFunc(1))}>- 1</Button>
        <Button onClick={() => setNum(subFunc(5))}>- 5</Button>
      </div>
      <VerticalGlyph byte={num} />
      <HorizontalGlyph byte={num} />
    </Vert>
  )
}