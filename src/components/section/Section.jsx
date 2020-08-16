import React from 'react';
import Contents from './SectionContents';
import SectionHeader from './SectionHeader';

export default function Section({ section }) {
  return (
    <div>
      <SectionHeader section={section} />
      <Contents contents={section.contents} color={section.color} />
    </div>
  );
}
