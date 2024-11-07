import React from 'react';
import NumberCard from '../Atoms/NumberCard';
import DonutChartComponent from '../Atoms/DonutChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Atoms/Navbar';

const ViewLoanDetails = () => {
  const loanDetails = {
    totalLoanAmount: 1000000,
    principal: 800000,
    interest: 200000,
    totalEMI: 20000,
    emi: 1000,
    tenure: 20,
    interestRate: 8.5,
    pendingEMI: 200,
    outstandingAmount: 500000,
    nextEMI: [
      { date: '2023-10-15', amount: 1000 },
      { date: '2023-11-15', amount: 1000 },
    ],
  };

  const chartData = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        data: [loanDetails.principal, loanDetails.interest],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <div className="row mb-4">
        <NumberCard title="Total Loan Amount" value={`$${loanDetails.totalLoanAmount.toFixed(0)}`} />
        <NumberCard title="Outstanding Amount" value={`$${loanDetails.outstandingAmount.toFixed(0)}`} />
        <NumberCard title="Total EMI" value={`$${loanDetails.totalEMI.toFixed(0)}`} />
        <NumberCard title="EMI" value={`$${loanDetails.emi.toFixed(0)}`} />
      </div>
      <div className="row mb-4">
        <NumberCard title="Tenure" value={`${loanDetails.tenure} years`} />
        <NumberCard title="Interest Rate" value={`${loanDetails.interestRate}%`} />
        <NumberCard title="Pending EMI" value={loanDetails.pendingEMI} />
        <NumberCard title="Outstanding Amount" value={`$${loanDetails.outstandingAmount.toFixed(0)}`} />
      </div>
      <div className="row">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Next EMI Due</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {loanDetails.nextEMI.map((emi, index) => (
                    <tr key={index}>
                      <td>{emi.date}</td>
                      <td>${emi.amount.toFixed(0)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <DonutChartComponent data={chartData} />
        </div>
      </div>
    </div>
    </>
  );
};

export default ViewLoanDetails;
