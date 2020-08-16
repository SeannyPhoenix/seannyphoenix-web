import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ItemIcon({ icon, color }) {
  if (!icon) {
    return null;
  }

  if (icon.icon) {
    return <FontAwesomeIcon icon={icon} size="lg" color={color} />;
  }

  return (
    <img src={icon} className="icon" />
  );
}
