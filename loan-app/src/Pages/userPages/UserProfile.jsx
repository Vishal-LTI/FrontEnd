import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../Components/Layout";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../Styles/userProfile.css";
import EditProfileForm from "./EditProfile";
import { useParams } from "react-router-dom";
import { useGetUserDetailsMutation, useUpdateUserDetailsMutation } from "../../services/userServices";

const UserProfileDetails = () => {
  const [key, setKey] = useState("PersonalInformation");
  const [profileSection, setProfileSection] = useState("PersonalInformation");
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [getUserDetails] = useGetUserDetailsMutation();
  const [userDetails, setUserDetails] = useState();
  const { id } = useParams();
  const [updatedDetails, setUpdatedDetails] = useState({}); 
  const [updateUserDetails, { isLoading: isUpdating, error: updateError }] = useUpdateUserDetailsMutation();
  useEffect(() => { 
    if (id) { 
      getUserDetails(id).unwrap().then((data) => { 
        setUserDetails(data); 
      }).catch((error) => { 
        console.error('Failed to fetch user details:', error); }); 
      } 
    }, [id, getUserDetails]);
  const handleClick = (event) => {
    if (event.currentTarget.name === "Edit") {
      if (event.currentTarget.value === "PersonalInformation") {
        setProfileSection("PersonalInformation");
        setShowEditProfile(true);
      }
      if (event.currentTarget.value === "ContactInformation") {
        setProfileSection("ContactInformation");
        setShowEditProfile(true);
      }
      if (event.currentTarget.value === "EmploymentandIncomeDetails") {
        setProfileSection("EmploymentandIncomeDetails");
        setShowEditProfile(true);
      }
      if (event.currentTarget.value === "EmergencyContactInformation") {
        setProfileSection("EmergencyContactInformation");
        setShowEditProfile(true);
      }
    }
  };
  function handleDataFromChild(data) {
    setShowEditProfile(data);
  }
  const handleUpdatedProfileData = async(data) =>{
    data.userId = id;
    try { 
      const updatedData = await updateUserDetails(data).unwrap(); 
      setUpdatedDetails((prevDetails) => ({ ...prevDetails, ...data, })); 
      setUserDetails(updatedData.data);
    } catch (updateError) { 
      console.error('Failed to update profile:', updateError); 
    }
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
          <Tab
            eventKey="PersonalInformation"
            title={
              <span className="title-tab" title="Personal Information">
                Personal Information
              </span>
            }
          >
            <Row>
              <Col>
               {userDetails && ( <Card className="tabs-card-body">
                  <Card.Body className="text-center">
                    <Image
                      src="./Media.png"
                      roundedCircle
                      className="mb-3"
                      width="150"
                      height="150"
                      alt="User Image"
                    />
                    <Card.Title>{userDetails[0].firstName} {userDetails[0].lastName}</Card.Title>
                  </Card.Body>
                  <Card.Body>
                    <div className="bg-danger text-white d-flex p-2 justify-content-between section_header">
                      <h5 className="section_title">Personal Information</h5>
                      <div>
                        <button
                          className="btn btn-danger text-white"
                          name="Edit"
                          value="PersonalInformation"
                          onClick={handleClick}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button className="btn btn-danger text-white">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                    {showEditProfile && (
                      <EditProfileForm
                        profileSection={profileSection}
                        showEditProfile={showEditProfile}
                        userDetails={userDetails}
                        sendDataToParent={handleDataFromChild}
                        sendModifiedData={handleUpdatedProfileData}
                      />
                    )}
                    <ListGroup className="mb-3 abc">
                      <ListGroup.Item>Full Name: {userDetails[0].firstName} {userDetails[0].lastName}</ListGroup.Item>
                      <ListGroup.Item>
                        Date of Birth (DOB): {userDetails[0].dateOfBirth}
                      </ListGroup.Item>
                      <ListGroup.Item>Age:  {userDetails[0].age}</ListGroup.Item>
                      <ListGroup.Item>Gender:  {userDetails[0].gender}</ListGroup.Item>
                      <ListGroup.Item>Marital Status:  {userDetails[0].maritalStatus}</ListGroup.Item>
                      <ListGroup.Item>Nationality: {userDetails[0].nationality}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>)}
              </Col>
            </Row>
          </Tab>
          <Tab
            eventKey="ContactInformation"
            title={
              <span className="title-tab-even" title="Contact Information">
                Contact Information
              </span>
            }
          >
            <Row>
              <Col>
                {userDetails && (
                  <Card className="tabs-card-body">
                  <Card.Body>
                    <div className="bg-danger text-white d-flex p-2 justify-content-between section_header">
                      <h5 className="section_title">Contact Information</h5>
                      <div>
                        <button
                          className="btn btn-danger text-white"
                          name="Edit"
                          value="ContactInformation"
                          onClick={handleClick}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button className="btn btn-danger text-white">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                    {showEditProfile && (
                      <EditProfileForm
                        profileSection={profileSection}
                        showEditProfile={showEditProfile}
                        userDetails={userDetails}
                        sendDataToParent={handleDataFromChild}
                        sendModifiedData={handleUpdatedProfileData}
                      />
                    )}
                    <ListGroup className="mb-3">
                      <ListGroup.Item>
                        Permanent Address: {userDetails[0].permanentAddress}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Current Address: {userDetails[0].currentAddress}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Phone Number: {userDetails[0].mobNumber}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Email Address: {userDetails[0].email}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
                )}
              </Col>
            </Row>
          </Tab>
          <Tab
            eventKey="IdentityVerification(KYC)Details"
            title={
              <span
                className="title-tab"
                title="Identity Verification (KYC) Details"
              >
                Identity Verification (KYC) Details
              </span>
            }
          >
            <Row>
              <Col>
               {userDetails && (
                 <Card className="tabs-card-body">
                 <Card.Body>
                   <div className="bg-danger text-white d-flex p-2 justify-content-between section_header">
                     <h5 className="section_title">
                       Identity Verification (KYC) Details
                     </h5>
                   </div>
                   <ListGroup className="mb-3">
                     <ListGroup.Item>
                       PAN Card Number: {userDetails[0].panNo}
                     </ListGroup.Item>
                     <ListGroup.Item>
                       Aadhaar Number: {userDetails[0].aadharNo}
                     </ListGroup.Item>
                     <ListGroup.Item>KYC Status: {userDetails[0].isKYCCompleted}</ListGroup.Item>
                   </ListGroup>
                 </Card.Body>
               </Card>
               )}
              </Col>
            </Row>
          </Tab>
          <Tab
            eventKey="EmploymentandIncomeDetails"
            title={
              <span
                className="title-tab-even"
                title="Employment and Income Details"
              >
                Employment and Income Details
              </span>
            }
          >
            <Row>
              <Col>
                {userDetails && (
                  <Card className="tabs-card-body">
                  <Card.Body>
                    <div className="bg-danger text-white d-flex p-2 justify-content-between section_header">
                      <h5 className="section_title">
                        Employment and Income Details
                      </h5>
                      <div>
                        <button
                          className="btn btn-danger text-white"
                          name="Edit"
                          value="EmploymentandIncomeDetails"
                          onClick={handleClick}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button className="btn btn-danger text-white">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                    {showEditProfile && (
                      <EditProfileForm
                        profileSection={profileSection}
                        showEditProfile={showEditProfile}
                        userDetails={userDetails}
                        sendDataToParent={handleDataFromChild}
                        sendModifiedData={handleUpdatedProfileData}
                      />
                    )}
                    <ListGroup className="mb-3">
                      <ListGroup.Item>
                        Occupation: {userDetails[0].occupation}
                      </ListGroup.Item>
                      <ListGroup.Item>Employer Name: {userDetails[0].employerName}</ListGroup.Item>
                      <ListGroup.Item>Employment Type: {userDetails[0].employmentType}</ListGroup.Item>
                      <ListGroup.Item>Annual Income: ${userDetails[0].annualIncome}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
                )}
              </Col>
            </Row>
          </Tab>
          <Tab
            eventKey="EmergencyContactInformation"
            title={
              <span className="title-tab" title="Emergency Contact Information">
                Emergency Contact Information
              </span>
            }
          >
            <Row>
              <Col>
                <Card className="tabs-card-body">
                  <Card.Body>
                    <div className="bg-danger text-white d-flex p-2 justify-content-between section_header">
                      <h5 className="section_title">
                        Emergency Contact Information
                      </h5>
                      <div>
                        <button
                          className="btn btn-danger text-white"
                          name="Edit"
                          value="EmergencyContactInformation"
                          onClick={handleClick}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button className="btn btn-danger text-white">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                    {showEditProfile && (
                      <EditProfileForm
                        profileSection={profileSection}
                        showEditProfile={showEditProfile}
                        userDetails={userDetails}
                        sendDataToParent={handleDataFromChild}
                        sendModifiedData={handleUpdatedProfileData}
                      />
                    )}
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
