import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import "../../Styles/editProfile.css";

const errors = {
  fullName: yup.string().required('Full Name is required'),
  dob: yup.date().required('Date of Birth is required'),
  age: yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
  gender: yup.string().required('Gender is required'),
  maritalStatus: yup.string().required('Marital Status is required'),
  nationality: yup.string().required('Nationality is required'),
  permanentAddress: yup.string().required('Permanent Address is required'),
  currentAddress: yup.string().required('Current Address is required'),
  phoneNumber: yup.string().required('Phone Number is required').matches(/^[0-9]+$/, 'Phone Number must be numeric'),
  email: yup.string().required('Email Address is required').email('Email Address is not valid'),
  panCardNumber: yup.string().required('PAN Card Number is required'),
  aadhaarNumber: yup.string().required('Aadhaar Number is required'),
  passportNumber: yup.string().required('Passport Number is required'),
  kycStatus: yup.string().required('KYC Status is required'),
  occupation: yup.string().required('Occupation is required'),
  employerName: yup.string().required('Employer Name is required'),
  employmentType: yup.string().required('Employment Type is required'),
  annualIncome: yup.number().required('Annual Income is required').positive('Annual Income must be positive'),
  emergencyContactName: yup.string().required('Emergency Contact Name is required'),
  emergencyContactRelationship: yup.string().required('Emergency Contact Relationship is required'),
  emergencyContactNumber: yup.string().required('Emergency Contact Number is required').matches(/^[0-9]+$/, 'Contact Number must be numeric'),
  photo: yup.mixed().required('Photo is required'),
};

const SectionTitle = ({ title }) => (
  <h5 className="bg-danger text-white p-2 mt-3">{title}</h5>
);

const EditProfileForm = ({ profileSection, showEditProfile, userDetails, sendDataToParent, sendModifiedData }) => {
  const [photoPreview, setPhotoPreview] = useState(null);
  const handlePhotoChange = e => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };
  const handleClose = () => {
    sendDataToParent(false);
  }
  const [updateDetails, setUpdatedDetails] = useState(userDetails);
  useEffect(()=>{
   setUpdatedDetails(userDetails[0]);
  },[userDetails]);
  const handleInputChange = (event) =>{
    setUpdatedDetails((prevDetails) => ({
      ...prevDetails,
      [event.target.name]:event.target.value
    }))
  }
  const handleChanges = () =>{
    sendModifiedData(updateDetails);
    handleClose();
  }
  return (
    <>
      <Modal
        show={showEditProfile}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {updateDetails && (
            <Container>
            <Row className="justify-content-md-center">
              <Col md={12}>
                <div>
                  {profileSection === 'PersonalInformation' && <>
                    <Row>
                      <SectionTitle title="Personal Information" />
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>First Name</label>
                        <input className='inputCmp' type="text" 
                        name="firstName" placeholder='Enter your First Name' 
                        onChange={handleInputChange}
                        value={updateDetails.firstName}
                        disabled
                        />
                        <p className="text-danger">{errors.fullName?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Last Name</label>
                        <input className='inputCmp' type="text" name="lastName" 
                        placeholder='Enter your Last Name'
                        value={updateDetails.lastName} 
                        onChange={handleInputChange} disabled />
                        <p className="text-danger">{errors.fullName?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Date of Birth (DOB)</label>
                        <input className='inputCmp' type="date" placeholder='Enter your Date of Birth' 
                        name='dateOfBirth' value={updateDetails.dateOfBirth}
                        onChange={handleInputChange} disabled/>
                        <p className="text-danger">{errors.dob?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Age</label>
                        <input className='inputCmp' type="number" 
                        placeholder='Enter your age' name="age" value={updateDetails.age}
                        onChange={handleInputChange} disabled/>
                        <p className="text-danger">{errors.age?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Gender</label>
                        <select className='inputCmp' name="gender" value={updateDetails.gender}
                        onChange={handleInputChange}>
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        <p className="text-danger">{errors.gender?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Marital Status</label>
                        <select className='inputCmp' name="maritalStatus"
                        value={updateDetails.maritalStatus}
                         onChange={handleInputChange}>
                          <option value="">Select Status</option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>
                        </select>
                        <p className="text-danger">{errors.maritalStatus?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column" as={Col}>
                        <label className='inputLabel'>Nationality</label>
                        <select className='inputCmp' name="nationality"
                        value={updateDetails.nationality}
                        onChange={handleInputChange}>
                          <option value="">Select Nationality</option>
                          <option value="Indian">Indian</option>
                          <option value="Other">Other</option>
                        </select>
                        <p className="text-danger">{errors.nationality?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Photo</label>
                        <input type="file" name='photo' onChange={handlePhotoChange} />
                        {photoPreview && <Image src={photoPreview} roundedCircle width="150" height="150" alt="Preview" />}
                        <p className="text-danger">{errors.photo?.message}</p>
                      </div>

                    </Row>
                  </>}

                  {profileSection === 'ContactInformation' && <>
                    <Row>
                      <SectionTitle title="Contact Information" className="mb-3" />
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Permanent Address</label>
                        <input type="text" className='inputCmp' name='permanentAddress'  
                        onChange={handleInputChange} />
                        <p className="text-danger">{errors.permanentAddress?.message}</p>
                      </div>

                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Current Address</label>
                        <input type="text" className='inputCmp' name='currentAddress'  onChange={handleInputChange}/>
                        <p className="text-danger">{errors.currentAddress?.message}</p>
                      </div>

                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Phone Number</label>
                        <input className='inputCmp' type="text" placeholder='Enter you Number' 
                        name='mobNumber'  onChange={handleInputChange} />
                        <p className="text-danger">{errors.phoneNumber?.message}</p>
                      </div>

                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Email Address</label>
                        <input type="email" className='inputCmp' placeholder='abc@gmail.com' 
                        name='email'  onChange={handleInputChange} />
                        <p className="text-danger">{errors.email?.message}</p>
                      </div>
                    </Row>
                  </>}

                  {profileSection === 'EmploymentandIncomeDetails' && <>
                    <SectionTitle title="Employment and Income Details" />
                    <Row>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Annual Income</label>
                        <input type="number" className='inputCmp' placeholder='Rs.1000000' 
                        name='annualIncome'  onChange={handleInputChange} />
                        <p className="text-danger">{errors.annualIncome?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Employment Type</label>
                        <select className='inputCmp' name='employmentType'  
                        onChange={handleInputChange}>
                          <option value="Salaried">Salaried</option>
                          <option value="Self-employed">Self-employed</option>
                        </select>
                        <p className="text-danger">{errors.employmentType?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Occupation</label>
                        <input type="text" className='inputCmp' name='occupation'  onChange={handleInputChange} />
                        <p className="text-danger">{errors.occupation?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Employer Name</label>
                        <input type="text" className='inputCmp' name='employerName'  onChange={handleInputChange} />
                        <p className="text-danger">{errors.employerName?.message}</p>
                      </div>
                    </Row>
                  </>}

                  {profileSection === 'EmergencyContactInformation' && <>
                    <SectionTitle title="Emergency Contact Information" />
                    <Row>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Name</label>
                        <input type="text" className='inputCmp' name='emergencyContactName'  onChange={handleInputChange} />
                        <p className="text-danger">{errors.emergencyContactName?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Relationship</label>
                        <input type="text" className='inputCmp' name='emergencyContactRelationship'  onChange={handleInputChange} />
                        <p className="text-danger">{errors.emergencyContactRelationship?.message}</p>
                      </div>
                      <div className="mb-3 col-md-6 col-sm-12 d-flex flex-column">
                        <label className='inputLabel'>Contact Number</label>
                        <input type="text" className='inputCmp' name='emergencyContactNumber'  onChange={handleInputChange} />
                        <p className="text-danger">{errors.emergencyContactNumber?.message}</p>
                      </div>
                    </Row>
                  </>}
                </div>
              </Col>
            </Row>
          </Container>
          )}
        </Modal.Body>
        <Modal.Footer className='justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChanges}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProfileForm;
