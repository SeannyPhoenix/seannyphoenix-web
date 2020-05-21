import React from 'react';
import {
  Form, Row, Button, Col,
} from 'react-bootstrap';
import MainSection from './MainSection';

export default function Contact() {
  function submitCorrespondence() {
    console.log('test');
  }

  return (
    <MainSection color="azure">
      <Row id="contact" className="justify-content-md-center">
        <Col md={8} onSubmit={submitCorrespondence}>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control type="textarea" />
            </Form.Group>
            <Form.Group>
              <Form.Control as={Button}>Send Message</Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </MainSection>
  );
}
