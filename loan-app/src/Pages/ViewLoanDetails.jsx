import React from "react";
import Layout from "../Components/Layout";

const ViewLoanDetails = () => {
  const loanDetails = {
    loanAmount: 500000,
    tenureInYears: 5,
    tenureInMonths: 60,
    emiDebitedDate: "2024-11-26T10:30",
    interest: 7.5,
    user: 12345,
    loanType: "Home Loan",
    loanStatus: "Approved"
  };

  return (
    <Layout>
      <div className="container my-5">
        <div className="card shadow">
          <h5
            className="card-title text-center"
            style={{
              color: "#ffffff",
              background: "#db0011",
              borderRadius: "5px 5px 0px 0px",
              padding: "10px",
            }}
          >
            Loan Details
          </h5>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <p><strong>Loan Amount:</strong> ₹{loanDetails.loanAmount}</p>
                <p><strong>Tenure (Years):</strong> {loanDetails.tenureInYears}</p>
                <p><strong>Tenure (Months):</strong> {loanDetails.tenureInMonths}</p>
                <p><strong>EMI Debited Date:</strong> {loanDetails.emiDebitedDate}</p>
              </div>
              <div className="col-md-6">
                <p><strong>Interest Rate (%):</strong> {loanDetails.interest}</p>
                <p><strong>User ID:</strong> {loanDetails.user}</p>
                <p><strong>Loan Type:</strong> {loanDetails.loanType}</p>
                <p><strong>Loan Status:</strong> {loanDetails.loanStatus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewLoanDetails;
