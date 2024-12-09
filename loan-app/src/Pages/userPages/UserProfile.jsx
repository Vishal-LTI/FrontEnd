import React, {useState} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Image,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../Components/Layout";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../Styles/userProfile.css';

const UserProfileDetails = () => {
  const [key, setKey] = useState('PersonalInformation');
  return (
    <Layout>
      <Container className="mt-5">
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          id="fill-tab-example"
          className="profile-tabs"
          fill
    >
      <Tab eventKey="PersonalInformation" title={
        <span className="title-tab" title="Personal Information">
        Personal Information
        </span>
      }>
        <Row>
        <Col>
            <Card className="tabs-card-body">
              <Card.Body className="text-center">
                <Image
                  src="./Media.png"
                  roundedCircle
                  className="mb-3"
                  width="150"
                  height="150"
                  alt="User Image"
                />
                <Card.Title>Vishal Gholkar </Card.Title>
              </Card.Body>
              <Card.Body>
                <SectionTitle title="Personal Information" />
                <ListGroup className="mb-3 abc">
                  <ListGroup.Item>
                    Full Name: John Doe
                    </ListGroup.Item>
                  <ListGroup.Item>
                    Date of Birth (DOB): 01/01/1990
                  </ListGroup.Item>
                  <ListGroup.Item>Age: 34</ListGroup.Item>
                  <ListGroup.Item>Gender: Male</ListGroup.Item>
                  <ListGroup.Item>Marital Status: Single</ListGroup.Item>
                  <ListGroup.Item>Nationality: Indian</ListGroup.Item>
                </ListGroup>  
              </Card.Body>
            </Card>
        </Col>
        </Row>
      </Tab>
      <Tab eventKey="ContactInformation" title={
        <span className="title-tab" title="Contact Information">
        Contact Information
        </span>
      }>
        <Row>
          <Col>
          <Card className="tabs-card-body">
            <Card.Body>
            <SectionTitle title="Contact Information" />
                <ListGroup className="mb-3">
                  <ListGroup.Item>
                    Permanent Address: 123 Main St, City, Country
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Current Address: 456 Market St, City, Country
                  </ListGroup.Item>
                  <ListGroup.Item>Phone Number: +91 9876543210</ListGroup.Item>
                  <ListGroup.Item>
                    Email Address: johndoe@example.com
                  </ListGroup.Item>
                </ListGroup>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="IdentityVerification(KYC)Details"  title={
        <span className="title-tab" title="Identity Verification (KYC) Details">
        Identity Verification (KYC) Details
        </span>
      }>
        <Row>
        <Col>
            <Card className="tabs-card-body">
              <Card.Body>
                <SectionTitle title="Identity Verification (KYC) Details" />
                <ListGroup className="mb-3">
                  <ListGroup.Item>PAN Card Number: ABCDE1234F</ListGroup.Item>
                  <ListGroup.Item>
                    Aadhaar Number: 1234 5678 9012
                  </ListGroup.Item>
                  <ListGroup.Item>Passport Number: A1234567</ListGroup.Item>
                  <ListGroup.Item>KYC Status: Verified</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="EmploymentandIncomeDetails" title={
        <span className="title-tab" title="Employment and Income Details">
        Employment and Income Details
        </span>
      }>
        <Row>
          <Col>
          <Card className="tabs-card-body">
            <Card.Body>
            <SectionTitle title="Employment and Income Details" />
                <ListGroup className="mb-3">
                  <ListGroup.Item>Occupation: Software Engineer</ListGroup.Item>
                  <ListGroup.Item>Employer Name: ABC Corp</ListGroup.Item>
                  <ListGroup.Item>Employment Type: Salaried</ListGroup.Item>
                  <ListGroup.Item>Annual Income: $100,000</ListGroup.Item>
                </ListGroup>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="EmergencyContactInformation" title={
        <span className="title-tab" title="Emergency Contact Information">
        Emergency Contact Information
        </span>
      }>
        <Row>
          <Col>
          <Card className="tabs-card-body">
            <Card.Body>
            <SectionTitle title="Emergency Contact Information" />
                <ListGroup className="mb-3">
                  <ListGroup.Item>Name: Jane Doe</ListGroup.Item>
                  <ListGroup.Item>Relationship: Sister</ListGroup.Item>
                  <ListGroup.Item>
                    Contact Number: +91 9876543211
                  </ListGroup.Item>
                </ListGroup>

                <Button variant="primary" className="me-2">
                  Edit Profile
                </Button>
                <Button variant="danger">Delete Account</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Tab>
    </Tabs>
      </Container>
    </Layout>
  );
};

const SectionTitle = ({ title }) => (
  <h5 className="bg-danger text-white p-2 mt-3">{title}</h5>
);

export default UserProfileDetails;
