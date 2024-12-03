import React from "react";
import Layout from "../../components/Layout";
import TableComponent from "../../components/TableComponent";

const LoanApplications = () => {
  // Data for the loan details table
  const loanDetailsHeader = [
    "Sr.No",
    "Name",
    "Loan Type",
    "Loan ID",
    "Loan Amount",
    "ROI",
    "Tenure",
    "EMI",
    "Pending EMI",
  ];

  const loanDetailsData = [
    ["1", "John", "Personal", "L001", "1000000", "8.5%", "20", "1000", "200"],
  ];

  const handleView = (rowIndex) => {
    console.log("View row:", rowIndex);
  };
  const handleEdit = (rowIndex) => {
    console.log("Edit row:", rowIndex);
  };
  const handleDelete = (rowIndex) => {
    console.log("Delete row:", rowIndex);
  };
  return (
    <>
      <Layout isUser={false}>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Loan Applications</h5>

                <TableComponent
                  headers={loanDetailsHeader}
                  rows={loanDetailsData}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoanApplications;
