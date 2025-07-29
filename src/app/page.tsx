'use client';

import { Page, Vert } from 'components/common';
import Form from 'components/form/Form';
import BinaryTime from 'components/panels/binarytime/BinaryTime';
import React, {ReactNode, useState} from 'react';

type PanelName = 'form' | 'binarytime'

const panels: Record<PanelName, () => ReactNode> = {
  'form': Form,
  'binarytime': BinaryTime,
}

export default function Home() {
  const [panelName, setPanelName] = useState<PanelName>('binarytime')

  const Panel = panels[panelName]

  return (
    <Page>
      <Vert>
      <button onClick={()=>setPanelName('form')}>Form</button>
      <button onClick={()=>setPanelName('binarytime')}>Binary Time</button>
      </Vert>
      <Panel />
    </Page>
  );
}
