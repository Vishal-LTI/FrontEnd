import React, { useEffect } from "react";
import Layout from "../../Components/Layout";
import NumberCard from "../../Atoms/NumberCard";
import TableComponent from "../../Components/TableComponent";
import DonutChartComponent from "../../Atoms/DonutChart";
import { setLoginStatus } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const Dashboard = ({ userId }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(setLoginStatus());
  }, [dispatch]);

  const handleView = (rowIndex) => {
    console.log("View row:", rowIndex);
  };

  const handleEdit = (rowIndex) => {
    console.log("Edit row:", rowIndex);
  };

  const handleDelete = (rowIndex) => {
    console.log("Delete row:", rowIndex);
  };

  const loanDetails = {
    totalLoanAmount: 1000000,
    principal: 800000,
    interest: 200000,
    totalEMI: 250,
    emi: 1000,
    tenure: 20,
    interestRate: 8.5,
    pendingEMI: 200,
    outstandingAmount: 500000,
    nextEMI: [
      { date: "2023-10-15", amount: 1000 },
      { date: "2023-11-15", amount: 1000 },
    ],
  };

  const chartData = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        data: [loanDetails.principal, loanDetails.interest],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const cardData = [
    {
      title: "Total Loan Amount",
      value: `₹${loanDetails.totalLoanAmount.toFixed(0)}`,
      imgUrl: "./Kyc.jpg",
    },
    {
      title: "Outstanding Amount",
      value: `₹${loanDetails.outstandingAmount.toFixed(0)}`,
    },
    { title: "Total EMI", value: `${loanDetails.totalEMI.toFixed(0)}` },
    { title: "EMI", value: `₹${loanDetails.emi.toFixed(0)}` },
    { title: "Tenure", value: `${loanDetails.tenure} years` },
    { title: "Interest Rate", value: `${loanDetails.interestRate}%` },
    { title: "Pending EMI", value: loanDetails.pendingEMI },
    {
      title: "Outstanding Amount",
      value: `₹${loanDetails.outstandingAmount.toFixed(0)}`,
    },
  ];

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

  const amortizationHeader = ["Sr.No", "Date", "EMI"];
  const amortizationData = [
    ["1", "2023-10-15", "1000"],
    ["2", "2023-11-15", "1000"],
    ["1", "2023-10-15", "1000"],
    ["2", "2023-11-15", "1000"],
    ["1", "2023-10-15", "1000"],
    ["2", "2023-11-15", "1000"],
    ["2", "2023-11-15", "1000"],
  ];

  return (
    <Layout>
      <div className="container my-5">
        <div className="row mb-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-3">
              <NumberCard title={card.title} value={card.value} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row">
              <div className="card ms-md-4 mt-3 mt-md-0 w-100">
                <DonutChartComponent
                  data={chartData}
                  title="Principal vs Interest"
                />
              </div>
              <div className="card ms-md-4 mt-3 mt-md-0 w-100">
                <div className="card-body">
                  <h5 className="card-title">Amortization</h5>
                  <TableComponent
                    headers={amortizationHeader}
                    rows={amortizationData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Loan Details</h5>
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
      </div>
    </Layout>
  );
};

export default Dashboard;
