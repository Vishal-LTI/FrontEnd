import React from 'react';
import { Container, Row, Col, Card, ListGroup, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfileDetails = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Body className="text-center">
              <Image src="path-to-user-image" roundedCircle className="mb-3" width="150" height="150" alt="User Image" />
              <Card.Title>John Doe</Card.Title>
            </Card.Body>
            <Card.Body>
              <SectionTitle title="Personal Information" />
              <ListGroup className="mb-3">
                <ListGroup.Item>Full Name: John Doe</ListGroup.Item>
                <ListGroup.Item>Date of Birth (DOB): 01/01/1990</ListGroup.Item>
                <ListGroup.Item>Age: 34</ListGroup.Item>
                <ListGroup.Item>Gender: Male</ListGroup.Item>
                <ListGroup.Item>Marital Status: Single</ListGroup.Item>
                <ListGroup.Item>Nationality: Indian</ListGroup.Item>
              </ListGroup>

              <SectionTitle title="Contact Information" />
              <ListGroup className="mb-3">
                <ListGroup.Item>Permanent Address: 123 Main St, City, Country</ListGroup.Item>
                <ListGroup.Item>Current Address: 456 Market St, City, Country</ListGroup.Item>
                <ListGroup.Item>Phone Number: +91 9876543210</ListGroup.Item>
                <ListGroup.Item>Email Address: johndoe@example.com</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <SectionTitle title="Identity Verification (KYC) Details" />
              <ListGroup className="mb-3">
                <ListGroup.Item>PAN Card Number: ABCDE1234F</ListGroup.Item>
                <ListGroup.Item>Aadhaar Number: 1234 5678 9012</ListGroup.Item>
                <ListGroup.Item>Passport Number: A1234567</ListGroup.Item>
                <ListGroup.Item>KYC Status: Verified</ListGroup.Item>
              </ListGroup>

              <SectionTitle title="Employment and Income Details" />
              <ListGroup className="mb-3">
                <ListGroup.Item>Occupation: Software Engineer</ListGroup.Item>
                <ListGroup.Item>Employer Name: ABC Corp</ListGroup.Item>
                <ListGroup.Item>Employment Type: Salaried</ListGroup.Item>
                <ListGroup.Item>Annual Income: $100,000</ListGroup.Item>
              </ListGroup>

              <SectionTitle title="Emergency Contact Information" />
              <ListGroup className="mb-3">
                <ListGroup.Item>Name: Jane Doe</ListGroup.Item>
                <ListGroup.Item>Relationship: Sister</ListGroup.Item>
                <ListGroup.Item>Contact Number: +91 9876543211</ListGroup.Item>
              </ListGroup>

              <Button variant="primary" className="me-2">Edit Profile</Button>
              <Button variant="danger">Delete Account</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const SectionTitle = ({ title }) => (
  <h5 className="bg-danger text-white p-2 mt-3">{title}</h5>
);

export default UserProfileDetails;
