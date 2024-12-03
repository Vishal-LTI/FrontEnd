import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/Layout';

// Validation schema
const schema = yup.object().shape({
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
});

const SectionTitle = ({ title }) => (
  <h5 className="bg-danger text-white p-2 mt-3">{title}</h5>
);

const EditProfileForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  const onSubmit = data => {
    console.log(data);
    alert('Profile Updated!');
  };

  const handlePhotoChange = e => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Layout>
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={12}>
          <Card>
            <Card.Header as="h5">Edit Profile</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <SectionTitle title="Personal Information" />
                <Row>
                    <Form.Group controlId="photo" className="mb-3 col-md-6" as={Col}>
                      <Form.Label>Photo</Form.Label>
                      <Form.Control type="file" {...register('photo')} onChange={handlePhotoChange} />
                      {photoPreview && <Image src={photoPreview} roundedCircle width="150" height="150" alt="Preview" />}
                      <p className="text-danger">{errors.photo?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="fullName" className="mb-3 col-md-6" as={Col}>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" {...register('fullName')} />
                      <p className="text-danger">{errors.fullName?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="dob" className="mb-3" as={Col}>
                      <Form.Label>Date of Birth (DOB)</Form.Label>
                      <Form.Control type="date" {...register('dob')} />
                      <p className="text-danger">{errors.dob?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="age" className="mb-3" as={Col}>
                      <Form.Label>Age</Form.Label>
                      <Form.Control type="number" {...register('age')} />
                      <p className="text-danger">{errors.age?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="gender" className="mb-3" as={Col}>
                      <Form.Label>Gender</Form.Label>
                      <Form.Control as="select" {...register('gender')}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Control>
                      <p className="text-danger">{errors.gender?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="maritalStatus" className="mb-3" as={Col}>
                      <Form.Label>Marital Status</Form.Label>
                      <Form.Control as="select" {...register('maritalStatus')}>
                        <option value="">Select Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                      </Form.Control>
                      <p className="text-danger">{errors.maritalStatus?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="nationality" className="mb-3" as={Col}>
                      <Form.Label>Nationality</Form.Label>
                      <Form.Control as="select" {...register('nationality')}>
                        <option value="">Select Nationality</option>
                        <option value="Indian">Indian</option>
                        <option value="Other">Other</option>
                      </Form.Control>
                      <p className="text-danger">{errors.nationality?.message}</p>
                    </Form.Group>
                  
                    <SectionTitle title="Contact Information" />
                    
                    <Form.Group controlId="permanentAddress" className="mb-3" as={Col}>
                      <Form.Label>Permanent Address</Form.Label>
                      <Form.Control type="text" {...register('permanentAddress')} />
                      <p className="text-danger">{errors.permanentAddress?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="currentAddress" className="mb-3" as={Col}>
                      <Form.Label>Current Address</Form.Label>
                      <Form.Control type="text" {...register('currentAddress')} />
                      <p className="text-danger">{errors.currentAddress?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="phoneNumber" className="mb-3" as={Col}>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" {...register('phoneNumber')} />
                      <p className="text-danger">{errors.phoneNumber?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-3" as={Col}>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" {...register('email')} />
                      <p className="text-danger">{errors.email?.message}</p>
                    </Form.Group>
                    </Row>
                    <SectionTitle title="Identity Verification (KYC) Details" />
                    <Row>
                    <Form.Group controlId="panCardNumber" className="mb-3" as={Col}>
                      <Form.Label>PAN Card Number</Form.Label>
                      <Form.Control type="text" {...register('panCardNumber')} />
                      <p className="text-danger">{errors.panCardNumber?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="aadhaarNumber" className="mb-3" as={Col}>
                      <Form.Label>Aadhaar Number</Form.Label>
                      <Form.Control type="text" {...register('aadhaarNumber')} />
                      <p className="text-danger">{errors.aadhaarNumber?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="passportNumber" className="mb-3" as={Col}>
                      <Form.Label>Passport Number</Form.Label>
                      <Form.Control type="text" {...register('passportNumber')} />
                      <p className="text-danger">{errors.passportNumber?.message}</p>
                    </Form.Group>
                    </Row>
                    <SectionTitle title="Employment and Income Details" />
                    <Row>
                    <Form.Group controlId="annualIncome" className="mb-3" as={Col}>
                      <Form.Label>Annual Income</Form.Label>
                      <Form.Control type="number" {...register('annualIncome')} />
                      <p className="text-danger">{errors.annualIncome?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="employmentType" className="mb-3" as={Col}>
                      <Form.Label>Employment Type</Form.Label>
                      <Form.Control as="select" {...register('employmentType')}>
                        <option value="Salaried">Salaried</option>
                        <option value="Self-employed">Self-employed</option>
                      </Form.Control>
                      <p className="text-danger">{errors.employmentType?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="occupation" className="mb-3" as={Col}>
                      <Form.Label>Occupation</Form.Label>
                      <Form.Control type="text" {...register('occupation')} />
                      <p className="text-danger">{errors.occupation?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="employerName" className="mb-3" as={Col}>
                      <Form.Label>Employer Name</Form.Label>
                      <Form.Control type="text" {...register('employerName')} />
                      <p className="text-danger">{errors.employerName?.message}</p>
                    </Form.Group>
                    </Row>
                    <SectionTitle title="Emergency Contact Information" />
                    <Row>
                    <Form.Group controlId="emergencyContactName" className="mb-3" as={Col}>
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" {...register('emergencyContactName')} />
                      <p className="text-danger">{errors.emergencyContactName?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="emergencyContactRelationship" className="mb-3" as={Col}>
                      <Form.Label>Relationship</Form.Label>
                      <Form.Control type="text" {...register('emergencyContactRelationship')} />
                      <p className="text-danger">{errors.emergencyContactRelationship?.message}</p>
                    </Form.Group>

                    <Form.Group controlId="emergencyContactNumber" className="mb-3" as={Col}>
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control type="text" {...register('emergencyContactNumber')} />
                      <p className="text-danger">{errors.emergencyContactNumber?.message}</p>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit" className="mt-3">Save Changes</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </Layout>
  );
};

export default EditProfileForm;
