import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto"; // Ensure you have this import for Chart.js to work correctly
import "../../styles/calculator.css";
import Navbar from "../../atoms/Navbar";
import Footer from "../../atoms/Footer";
import { Link } from "react-router-dom";
const PrepaymentCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(0);
  const [prepayment, setPrepayment] = useState(0);
  const [emi, setEmi] = useState(0);
  const [chartData, setChartData] = useState({});
  const [interestAmount, setInterestAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [outStandingAmount, setOutStandingAmount] = useState(0);
  const [save, setSave] = useState(0);

  const calculateEMI = (principal, tenureYears) => {
    const annualInterest = parseFloat(rate) / 100;
    const monthlyInterest = annualInterest / 12;
    const numberOfPayments = tenureYears * 12;

    return (
      (principal *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, numberOfPayments)) /
      (Math.pow(1 + monthlyInterest, numberOfPayments) - 1)
    );
  };

  const calculatePrepayment = () => {
    const principal = parseFloat(amount);
    const prepaymentAmount = parseFloat(prepayment);
    const newPrincipal = principal - prepaymentAmount;
    const tenureYears = parseFloat(tenure); 

    const emiValue = calculateEMI(newPrincipal, tenureYears);
    setEmi(emiValue.toFixed(0));

    const totalInterestWithoutPrepayment =
      calculateEMI(principal, tenureYears) * tenureYears * 12 - principal;
    const totalInterestWithPrepayment =
      emiValue * tenureYears * 12 - newPrincipal;

    setInterestAmount(totalInterestWithPrepayment.toFixed(0));
    setTotal((newPrincipal + totalInterestWithPrepayment).toFixed(0));
    setOutStandingAmount(newPrincipal);
    setSave(
      (totalInterestWithoutPrepayment - totalInterestWithPrepayment).toFixed(0)
    );

    setChartData({
      labels: ["Principal", "Interest"],
      datasets: [
        {
          data: [newPrincipal, totalInterestWithPrepayment],
          backgroundColor: ["#36A2EB", "#db0011"],
        },
      ],
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-center my-4">Prepayment Calculator</h2>
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
              <div className="box">
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
                min="1"
                max="30"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <div className="box">
                <label htmlFor="prepaymentAmount" className="first">
                  Prepayment Amount:
                </label>
                <input
                  type="number"
                  className="form-control first"
                  id="prepaymentAmount"
                  value={prepayment}
                  onChange={(e) => setPrepayment(e.target.value)}
                />
              </div>
              <input
                type="range"
                className="form-range mt-2"
                id="prepaymentAmountRange"
                min="0"
                max={amount}
                step="1000"
                value={prepayment}
                onChange={(e) => setPrepayment(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary w-100"
              onClick={calculatePrepayment}
            >
              Calculate EMI after Prepayment
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
            <div>
            <div style={{ margin: "50px", width: "100%" }}>
              <p>
                <b>EMI:</b> {emi} per month
              </p>
              <p>
                <b>Principal Amount:</b> {amount}
              </p>
              <p>
                <b>Outstanding Amount:</b> {outStandingAmount}
              </p>
              <p>
                <b>Total Interest:</b> {interestAmount}
              </p>
              <p>
                <b>Interest Saved:</b> {save}
              </p>
              <p>
                <b>Total Amount:</b> {total}
              </p>
            </div>
          </div>
          </div>
          <div className="mt-5 mb-4">
          <h4>Most Popular Calculators</h4>
          <ul style={{listStyle:'none' }}>
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
            
          </ul>
        </div>
        </div>
        
      </div>

      <Footer />
    </>
  );
};

export default PrepaymentCalculator;
