import React from 'react';
import { Card } from 'react-bootstrap';

export default function PortfolioItem(props) {
  const { item } = props;

  return (
    <Card
      className="m-4 item-card"
      style={item.style}
    >
      <Card.Img
        src={item.logo}
        alt={item.name}
        className="pl-4 pt-4 pr-4"
      />
      <Card.Body>
        <Card.Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="stretched-link"
        >
          <Card.Title style={item.style}>
            {item.name}
          </Card.Title>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
