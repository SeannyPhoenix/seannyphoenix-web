import React from 'react';
import { CardColumns } from 'react-bootstrap';
import ItemCard from '../item-card/ItemCard';

export default function SectionCards({ cards, color }) {
  if (!cards) {
    return null;
  }

  const displayCards = cards
    .map((card) => <ItemCard key={Math.random()} card={card} color={color} />);

  return (
    <CardColumns>
      {displayCards}
    </CardColumns>
  );
}
