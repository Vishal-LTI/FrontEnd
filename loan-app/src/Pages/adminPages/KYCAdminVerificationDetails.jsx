import React, { useState } from "react"; 
import { useForm } from "react-hook-form";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";

const KYCAdminVerificationDetails = ({ isOpen, onClose, data }) => {
  const [reason, setReason] = useState("");
  const [documentStatus, setDocumentStatus] = useState(
    (data?.uploadedDocuments || []).map((doc) => ({
      name: doc.name,
      status: doc.status,
    })) || []
  );

  // Handle document status change
  const handleDocumentStatusChange = (index, status) => {
    const updatedStatus = [...documentStatus];
    updatedStatus[index].status = status;
    setDocumentStatus(updatedStatus);
  };
  console.log("Loan Application Number:", data?.applicationId);
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

  if (!isOpen) return null;
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
  return (
    <div style={overlayStyle}>
      <div style={cardContainerStyle}>
        <div style={leftSectionStyle}>
          <h2 style={headerStyle}>KYC Verification Details</h2>
          <form onSubmit={(e) => e.preventDefault()} style={{ padding: "10px" }}>
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
              <label style={labelStyle}>Application Number:</label>
              <input
                type="text"
                value={data?.applicationId || ""}
                readOnly
                style={inputStyle}
              />
            </div>
            <div className="form-group" style={formRowStyle}>
              <label style={labelStyle}>PAN Number:</label>
              <input
                type="text"
                value={data?.pan || ""}
                readOnly
                style={inputStyle}
              />
            </div>
            <div className="form-group" style={formRowStyle}>
              <label style={labelStyle}>Aadhaar Number:</label>
              <input
                type="text"
                value={data?.aadhaar || ""}
                readOnly
                style={inputStyle}
              />
            </div>
            <div className="form-group" style={formRowStyle}>
              <label style={labelStyle}>Aadhar Verified:</label>
              <input
                type="text"
                value={data?.otpVerified ? "Yes" : "No"}
                readOnly
                style={inputStyle}
              />
            </div>
            
            <div className="form-group" style={formRowStyle}>
              <label style={labelStyle}>Reason for Unapproval:</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter reason"
                style={{ ...inputStyle, height: "80px", resize: "none" }}
              ></textarea>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
              <button
                type="submit"
                className="btn btn-success"
                style={buttonStyle}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-danger"
                style={buttonStyle}
              >
                Close
              </button>
            </div>
          </form>
        </div>
        <div style={rightSectionStyle}>
          {/* Uploaded Documents Section */}
          <div style={{ marginTop: "20px" }}>
              <h3 style={{ marginBottom: "10px", textAlign: "left", color: "#333" }}>
                Uploaded Documents
              </h3>
              {data?.uploadedDocuments && (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {documentStatus.map((doc, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <label style={{ display: "inline-block", width: "150px" }}>
                        {doc.name}:
                      </label>
                      <select
                        value={doc.status}
                        onChange={(e) =>
                          handleDocumentStatusChange(index, e.target.value)
                        }
                        style={{
                          width: "200px",
                          padding: "5px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                          marginRight: "10px",
                        }}
                      >
                        <option value="Verified">Verified</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Pending">Pending</option>
                      </select>
                      <span
                        style={{
                          color: "blue",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        View
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

// Styles
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
  zIndex: 1000,
};

const cardContainerStyle = {
  display: "flex",
  backgroundColor: "white",
  borderRadius: "10px",
  width: "70%",
  maxHeight: "90vh",
  overflowY: "auto",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
};

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

const headerStyle = {
  textAlign: "center",
  color: "#db0011",
  marginBottom: "20px",
  fontWeight: "bold",
};

const formRowStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
};

const labelStyle = {
  width: "250px",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  backgroundColor: "#db0011",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "clamp(10px, 2vw, 11px)",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "10px",
};

export default KYCAdminVerificationDetails;
