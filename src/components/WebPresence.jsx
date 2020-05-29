import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import MainSection from './MainSection';

export default function WebPresence() {
  return (
    <MainSection title="Find me Online" color="purpure">
      <Row>
        <Col xs={4}>
          <a href="https://github.com/SeannyPhoenix">
            <FontAwesomeIcon icon={faGithubSquare} />
            {' '}
            SeannyPhoenix
          </a>
        </Col>
        <Col xs={4}>
          <a href="https://linkedin.com/in/seannyphoenix">
            <FontAwesomeIcon icon={faLinkedin} />
            {' '}
            seannyphoenix
          </a>
        </Col>
        {/* <Col xs={4}>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </Col> */}
        <Col xs={4}>
          <a href="mailto:seannyphoenix@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
            {' '}
            Email Me
          </a>
        </Col>
      </Row>
    </MainSection>
  );
}
