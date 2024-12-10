import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../Components/Layout";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../Styles/userProfile.css';
import EditProfileForm from "./EditProfile";

const UserProfileDetails = () => {
  const [key, setKey] = useState('PersonalInformation');
  const [profileSection, setProfileSection] = useState('PersonalInformation');
  const [showEditProfile, setShowEditProfile] = useState(false);
  const handleClick = (event) => {
    if (event.currentTarget.name === 'Edit') {
      if (event.currentTarget.value === 'PersonalInformation') {
        setProfileSection('PersonalInformation');
        setShowEditProfile(true);
      }
      if (event.currentTarget.value === 'ContactInformation') {
        setProfileSection('ContactInformation');
        setShowEditProfile(true);
      }
      if (event.currentTarget.value === 'EmploymentandIncomeDetails') {
        setProfileSection('EmploymentandIncomeDetails');
        setShowEditProfile(true);
      }
      if (event.currentTarget.value === 'EmergencyContactInformation') {
        setProfileSection('EmergencyContactInformation');
        setShowEditProfile(true);
      }
    }
  }
  function handleDataFromChild(data) {
    setShowEditProfile(data);
  }
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
                    <div className="bg-danger text-white d-flex p-2 justify-content-between section_header">
                      <h5 className="section_title">Personal Information</h5>
                      <div>
                        <button className="btn btn-danger text-white"
                          name="Edit"
                          value="PersonalInformation"
                          onClick={handleClick}>
                          <i className='bi bi-pencil'></i>
                        </button>
                        <button className="btn btn-danger text-white">
                          <i className='bi bi-trash'></i>
                        </button>
                      </div>
                    </div>
                    {showEditProfile && <EditProfileForm
                      profileSection={profileSection}
                      showEditProfile={showEditProfile}
                      sendDataToParent={handleDataFromChild} />}
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
                    <div className="bg-danger text-white d-flex p-2 justify-content-between section_header">
                      <h5 className="section_title">Contact Information</h5>
                      <div>
                        <button className="btn btn-danger text-white"
                          name="Edit"
                          value="ContactInformation"
                          onClick={handleClick}>
                          <i className='bi bi-pencil'></i>
                        </button>
                        <button className="btn btn-danger text-white">
                          <i className='bi bi-trash'></i>
                        </button>
                      </div>
                    </div>
                    {showEditProfile && <EditProfileForm
                      profileSection={profileSection}
                      showEditProfile={showEditProfile}
                      sendDataToParent={handleDataFromChild} />}
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
          <Tab eventKey="IdentityVerification(KYC)Details" title={
            <span className="title-tab" title="Identity Verification (KYC) Details">
              Identity Verification (KYC) Details
            </span>
          }>
            <Row>
              <Col>
                <Card className="tabs-card-body">
                  <Card.Body>
                    <div className="bg-danger text-white d-flex p-2 justify-content-between section_header">
                      <h5 className="section_title">Identity Verification (KYC) Details</h5>
                    </div>
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
                    <div className="bg-danger text-white d-flex p-2 justify-content-between section_header">
                      <h5 className="section_title">Employment and Income Details</h5>
                      <div>
                        <button className="btn btn-danger text-white"
                          name="Edit"
                          value="EmploymentandIncomeDetails"
                          onClick={handleClick}>
                          <i className='bi bi-pencil'></i>
                        </button>
                        <button className="btn btn-danger text-white">
                          <i className='bi bi-trash'></i>
                        </button>
                      </div>
                    </div>
                    {showEditProfile && <EditProfileForm
                      profileSection={profileSection}
                      showEditProfile={showEditProfile}
                      sendDataToParent={handleDataFromChild} />}
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
                    <div className="bg-danger text-white d-flex p-2 justify-content-between section_header">
                      <h5 className="section_title">Emergency Contact Information</h5>
                      <div>
                        <button className="btn btn-danger text-white"
                          name="Edit"
                          value="EmergencyContactInformation"
                          onClick={handleClick}>
                          <i className='bi bi-pencil'></i>
                        </button>
                        <button className="btn btn-danger text-white">
                          <i className='bi bi-trash'></i>
                        </button>
                      </div>
                    </div>
                    {showEditProfile && <EditProfileForm
                      profileSection={profileSection}
                      showEditProfile={showEditProfile}
                      sendDataToParent={handleDataFromChild} />}
                    <ListGroup className="mb-3">
                      <ListGroup.Item>Name: Jane Doe</ListGroup.Item>
                      <ListGroup.Item>Relationship: Sister</ListGroup.Item>
                      <ListGroup.Item>
                        Contact Number: +91 9876543211
                      </ListGroup.Item>
                    </ListGroup>
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
