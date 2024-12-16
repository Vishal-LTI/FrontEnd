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
import Layout from "../../../Components/Layout";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../../Styles/userProfile.css';
import EditProfileForm from "./../../userPages/EditProfile";

const UserProfileReadOnly = ({ isOpen, onClose, data }) => {
  const [reason, setReason] = useState("");
  const [documentStatus, setDocumentStatus] = useState(
    Array.isArray(data?.uploadedDocuments)?data.uploadedDocuments.map((doc) => ({
      name: doc.name,
      status: doc.status,
    })) : []
    
  );


  
    console.log("Loan Application Number:", data);
    console.log("User ID:", data?.userId);
    console.log("PAN Card Number:", data.pan);
    console.log("Aadhaar Card Number:", data.aadhaar);
    console.log("OTP Verified:", data.otpVerified);
    console.log("Document Status:", documentStatus);
    console.log("Reason for Unapproval:", reason);

  // Handle document status change
  const handleDocumentStatusChange = (index, status) => {
    const updatedStatus = [...documentStatus];
    updatedStatus[index].status = status;
    setDocumentStatus(updatedStatus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Loan Application Number:", data.loanApplicationNumber);
    console.log("User ID:", data.userId);
    console.log("PAN Card Number:", data.pan);
    console.log("Aadhaar Card Number:", data.aadhaar);
    console.log("OTP Verified:", data.otpVerified);
    console.log("Document Status:", documentStatus);
    console.log("Reason for Unapproval:", reason);
    onClose(); // Close the popup
  };

  
  const renderDocuments = (documents) => {
    if (Array.isArray(documents)) {
      return (
        <ul>
          {documents.map((doc, index) => (
            <li key={index}>
              {doc.name} - {doc.status}
            </li>
          ))}
        </ul>
      );
    }
    return "No documents available"; // Fallback message
  };
  if (!isOpen) return null;
  return (
    <div style={overlayStyle}>
      <div style={cardContainerStyle}>
        <div style={leftSectionStyle}>
          <h2 style={headerStyle}>User Loan Application Detail</h2>
          <Card>
          <Card.Header style={headerStyle}><button
              style={closeButtonStyle}
              onClick={onClose}
            >
              &times;
            </button></Card.Header>
          <Card.Body>
          <Tabs defaultActiveKey="personalInformation" id="profile-tabs" className="mb-3">
              {/* Tab 1: Personal Details */}
              <Tab eventKey="personalInformation" title="Personal Information">
                <div style={tabContentStyle}>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>User ID:</label>
                    <input
                      type="text"
                      value={data?.userId || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Application ID:</label>
                    <input
                      type="text"
                      value={data.loanApplicationNumber || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Full Name:</label>
                    <input
                      type="text"
                      value={data.fullName || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}> Date of Birth:</label>
                    <input
                      type="text"
                      value={data.dob || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Gender:</label>
                    <input
                      type="text"
                      value={data.gender || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Email Addresss:</label>
                    <input
                      type="text"
                      value={data.email || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Phone Number:</label>
                    <input
                      type="text"
                      value={data.phoneNumber || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Residential Address:</label>
                    <input
                      type="text"
                      value={data.residentialAddress || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Nationality:</label>
                    <input
                      type="text"
                      value={data.nationality || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                </div>
              </Tab>

              {/* Tab 2: Loan Details */}
              <Tab eventKey="employmentDetails" title="Employment Details">
                <div style={tabContentStyle}>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Employment Type:</label>
                    <input
                      type="text"
                      value={data.employmentType || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Company Name:</label>
                    <input
                      type="text"
                      value={data.companyName || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Job Title:</label>
                    <input
                      type="text"
                      value={data.jobTitle || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Year Of Experience:</label>
                    <input
                      type="text"
                      value={data.yoe || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div><div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Monthly Income:</label>
                    <input
                      type="text"
                      value={data.monthlyIncome || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div><div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Business Details:</label>
                    <input
                      type="text"
                      value={data.businessDetails || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                </div>
              </Tab>

              {/* Tab 3: Financial Details */}
              <Tab eventKey="financialDetails" title="Financial Details">
                <div style={tabContentStyle}>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Bank Account Number:</label>
                    <input
                      type="text"
                      value={data.bankAccountNumber || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Bank Name:</label>
                    <input
                      type="text"
                      value={data.bankName || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Income Proof:</label>
                    <input
                      type="text"
                      value={data.incomeProof || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Existing Loans:</label>
                    <input
                      type="text"
                      value={data.existingLoans || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div><div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Credit Score:</label>
                    <input
                      type="text"
                      value={data.creditScore || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                </div>
              </Tab>

              {/* Tab 4: Loan Details */}
              <Tab eventKey="loanDetails" title="Loan Details">
                <div style={tabContentStyle}>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Loan Amount:</label>
                    <input
                      type="text"
                      value={data.loanAmount || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Loan Type:</label>
                    <input
                      type="text"
                      value={data.loanType || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Loan Tenure:</label>
                    <input
                      type="text"
                      value={data.loanTenure || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Rate of Interest:</label>
                    <input
                      type="text"
                      value={data.roi || ""}
                      readOnly
                      style={inputStyle}
                    />

                  </div><div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Purpose of Loan:</label>
                    <input
                      type="text"
                      value={data.purposeOfLoan || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div><div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Preferred Emi Date:</label>
                    <input
                      type="text"
                      value={data.preferredEmiDate || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                </div>
              </Tab>

                {/* Tab 5:	Co-Applicant Details*/}
                <Tab eventKey="coApplicantDetails" title="Co-Applicant Details">
                <div style={tabContentStyle}>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Co-Applicant Name:</label>
                    <input
                      type="text"
                      value={data.partnerName || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Co-Applicant Relationship:</label>
                    <input
                      type="text"
                      value={data.partnerRelationship || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Co-Applicant Income:</label>
                    <input
                      type="text"
                      value={data.partnerIncome || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Co-Applicant Employment Details:</label>
                    <input
                      type="text"
                      value={data.partnerEmploymentDetails || ""}
                      readOnly
                      style={inputStyle}
                    />
                  </div>
                </div>
              </Tab>
              {/* Tab 6: Documents */}
              <Tab eventKey="documents" title="Uploaded Documents">
                <div style={tabContentStyle}>
                  <h5>Documents</h5>
                  {renderDocuments(documentStatus)}
                </div>
              </Tab>

              {/* Tab 7: Approval Details */}
              <Tab eventKey="approvalDetails" title="Approval Details">
                <div style={tabContentStyle}>
                  <div className="form-group" style={formRowStyle}>
                    <label style={labelStyle}>Reason for Unapproval:</label>
                    <textarea
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Enter reason"
                      style={{ ...inputStyle, height: "80px" }}
                    />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Card.Body>
          </Card>
        </div>

      </div>
    </div>
  );
  
};
export default UserProfileReadOnly;
// // Styles

const leftSectionStyle = {
  flex: 1,
  padding: "20px",
};

const rightSectionStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f9f9f9",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  backgroundColor: "#db0011",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};


const cardContainerStyle = {
  display: "flex",
  width: "80%",
  maxWidth: "1200px",
  maxHeight: "90%",
  backgroundColor: "white",
  borderRadius: "10px",
  overflowY: "auto",
  padding:"7px",
  //maxHeight: "250vh",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  fontSize: "clamp(10px, 2vw, 11px)",
  fontWeight: "bold",
};

const headerStyle = {
  backgroundColor: "#f7f7f7",
  borderBottom: "1px solid #ddd",
  fontSize: "clamp(16px, 2vw, 20px)",
  fontWeight: "bold",
  padding: "0px 0px",
  position: "relative",
  textAlign: "center",
  color: "#db0011",
  marginBottom: "20px",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "15px",
  background: "none",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
};

const tabContentStyle = {
  padding: "12px",
  width:"100%",
};

const formRowStyle = {
  marginBottom: "15px",
  display: "flex",
  alignItems: "center",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "10px",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  width: "250px",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};
