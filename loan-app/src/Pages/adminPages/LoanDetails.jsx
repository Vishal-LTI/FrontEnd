import React, { useState } from "react";
import { Table, Container, Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaDownload } from "react-icons/fa";
import LoanDocumentsTable from "../../Components/LoanTable";
import InfoBlock from "../../Atoms/InfoBlock";
import TitleCard from "../../Atoms/TitleCard";
import RejectModal from "../../Components/RejectModal";
import AdminNavbarMenu from "../../Components/AdminNavbar";
import Layout from "../../Components/Layout";

const LoanDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleSubmit = (reason) => {
    console.log("Submitted reason:", reason);
    alert(`Submitted reason: ${reason}`);
  };
  const loanDetails = {
    loanType: "Home Loan",
    loanAmount: "1000000",
    tenure: "20",
    emi: "20000",
    interestRate: 8.5,
    outStandingAmount: "800000",
  };

  return (
    <>
      <Layout isUser={false}>
        <div className="container">
          <div className="text-black d-flex justify-content-end align-items-center my-2">
            <Button variant="success" className="me-2">Approve</Button>
            <Button variant="primary" onClick={handleShow}>Reject</Button>
          </div>
          <div className="mt-2 mb-2">
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-between align-items-center"
                style={{
                  color: "#ffffff",
                  background: "#db0011",
                  borderRadius: "5px 5px 0px 0px",
                  padding: "10px",
                }}  
              >
                Loan Details
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <p>
                      <strong>Application ID:</strong> 123456
                    </p>
                    <p>
                      <strong>Loan Type:</strong> Personal Loan
                    </p>
                    <p>
                      <strong>Loan Amount Requested:</strong> ₹20,00,000
                    </p>
                  </Col>
                  <Col md={6}>
                    <p>
                      <strong>Loan Tenure:</strong> 5 Years
                    </p>
                    <p>
                      <strong>Purpose of Loan:</strong> Home Renovation
                    </p>
                    <p>
                      <strong>Preferred EMI Amount:</strong> ₹15,000
                    </p>
                    <p>
                      <strong>Borrower Name:</strong> John Doe
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          
        </div>
        <LoanDocumentsTable></LoanDocumentsTable>
          <RejectModal
            show={showModal}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
      </Layout>
    </>
  );
};

export default LoanDetails;
