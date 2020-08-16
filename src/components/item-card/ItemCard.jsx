import React from 'react';
import { Card } from 'react-bootstrap';
import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';

export default function ItemCard({ card, color }) {
  const { header, contents, footer } = card;
  return (
    <Card className={`m-3 item-card card-${color}`}>
      <ItemHeader header={header} color={color} />
      <ItemBody contents={contents} />
    </Card>
  );
}
