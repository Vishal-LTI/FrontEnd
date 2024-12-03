import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto"; // Ensure you have this import for Chart.js to work correctly
import "../../styles/calculator.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer";
const EMICalculator = ({ interestRate, minTenuare, maxTenuare, title }) => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(interestRate);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(0);
  const [chartData, setChartData] = useState({});
  const [interestAmount, setInterestAmount] = useState(0);
  const total = Number(amount) + Number(interestAmount);

  const calculateEMI = () => {
    const principal = parseFloat(amount);
    const annualInterest = parseFloat(rate) / 100;
    const monthlyInterest = annualInterest / 12;
    const numberOfPayments = parseFloat(tenure) * 12;

    const emiValue =
      (principal *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, numberOfPayments)) /
      (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

    setEmi(emiValue.toFixed(0));

    const totalInterest = emiValue * numberOfPayments - principal;
    setInterestAmount(totalInterest.toFixed(0));
    setChartData({
      labels: ["Principal", "Interest"],
      datasets: [
        {
          data: [principal, totalInterest],
          backgroundColor: ["#36A2EB", "#db0011"],
        },
      ],
    });
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2 className="text-center my-4">{title}</h2>
        <div className="box">
          <div className="card p-4 first">
            <div className="form-group mb-3">
              <div className="box">
                <label htmlFor="loanAmount" className="first">
                  Loan Amount:
                </label>
                <input
                  type="number"
                  className="form-control first"
                  id="loanAmount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <input
                type="range"
                className="form-range mt-2"
                id="loanAmountRange"
                min="10000"
                max="1000000"
                step="1000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <div className=" box">
                <label htmlFor="interestRate" className="first">
                  Interest Rate (Annual %):
                </label>
                <input
                  type="number"
                  className="form-control first"
                  id="interestRate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>
              <input
                type="range"
                className="form-range mt-2"
                id="interestRateRange"
                min="1"
                max="20"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <div className="box">
                <label htmlFor="tenure" className="first">
                  Tenure (Years):
                </label>
                <input
                  type="number"
                  className="form-control first"
                  id="tenure"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                />
              </div>
              <input
                type="range"
                className="form-range mt-2"
                id="tenureRange"
                min={minTenuare}
                max={maxTenuare}
                step="1"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>
            <button className="btn btn-danger w-100" onClick={calculateEMI}>
              Calculate EMI
            </button>
          </div>
          <div style={{ width: "50%" }}>
            {emi > 0 && (
              <div className="text-center mt-4">
                <div style={{ width: "60%", marginLeft: "50px" }}>
                  <Doughnut data={chartData} />
                </div>
              </div>
            )}
            <div style={{ margin: "50px", width: "50%" }}>
              <p>
                <b>EMI:</b> {emi} per month
              </p>
              <p>
                <b>Principal Amount:</b> {amount}
              </p>
              <p>
                <b>Total Interest:</b> {interestAmount}
              </p>
              <p>
                <b>Total Amount:</b> {total}
              </p>
            </div>
          </div>
          <div className="mt-5 mb-4">
            <h4>Most Popular Calculators</h4>
            <ul style={{ listStyle: "none" }}>
              <li>
                <Link to="/home-loan-emicalculator">Home Loan Calculator</Link>
              </li>
              <li>
                <Link to="/car-loan-emicalculator">Car Loan Calculator</Link>
              </li>
              <li>
                <Link to="/personal-loan-emicalculator">
                  Personal Loan Calculator
                </Link>
              </li>
              <li>
                <Link to="/gold-loan-emicalculator">Gold Loan Calculator</Link>
              </li>
             
              <li>
                <Link to="/prepaymentCalculator">Part Payment Calculator</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EMICalculator;
