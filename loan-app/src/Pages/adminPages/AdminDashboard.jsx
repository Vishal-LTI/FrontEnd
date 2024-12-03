import React from "react";
import Layout from "../../Components/Layout";
import NumberCard from "../../Atoms/NumberCard";
import TableComponent from "../../Components/TableComponent";
import DonutChartComponent from "../../Atoms/DonutChart";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate("");
  const handleView = (rowIndex) => {
    console.log("View row:", rowIndex);
  };
  const handleEdit = (rowIndex) => {
    console.log("Edit row:", rowIndex);
  };
  const handleDelete = (rowIndex) => {
    console.log("Delete row:", rowIndex);
  };
  // Data for the cards
  const loanDetails = {
    totalHomeLoans: 10,
    totalCarLoans: 8,
    totalGoldLoans: 6,
    totalPersonalLoans: 6,
  };

  const chartData = {
    labels: ["Home Loan", "Car Loan", "Gold Loan", "Personal Loan"],
    datasets: [
      {
        data: [
          loanDetails.totalHomeLoans,
          loanDetails.totalCarLoans,
          loanDetails.totalGoldLoans,
          loanDetails.totalPersonalLoans,
        ],
        backgroundColor: ["#36A2EB", "#FF6384", "#36A2EB", "#FF6369"],
      },
    ],
  };

  const cardData = [
    {
      title: "Total Home Loans",
      value: `${loanDetails.totalHomeLoans}`,
      imgUrl: "./Kyc.jpg",
    },
    {
      title: "Total Car Loans",
      value: `${loanDetails.totalCarLoans}`,
    },
    { title: "Total Gold Loans", value: `${loanDetails.totalGoldLoans}` },
    { title: "Total Personal Loans", value: `₹${loanDetails.totalPersonalLoans}` },
  ];

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

  const handleClick = () => {
    navigate("/admin/loan-applications");
  };
  return (
    <Layout isUser={false}>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex">
              <DonutChartComponent data={chartData} title={"Loan Stats"} />
              <div className="row mb-4 d-flex">
                {cardData.map((card, index) => (
                  <div key={index} className="col-md-6 ">
                    <NumberCard title={card.title} value={card.value} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <h5 className="card-title">Loan Applications</h5>
                  <button className="btn btn-success" onClick={handleClick}>
                    View All
                  </button>
                </div>
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
        <div className="row"></div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
