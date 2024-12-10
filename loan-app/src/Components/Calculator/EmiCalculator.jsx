import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto"; // Ensure you have this import for Chart.js to work correctly
import "../../Styles/calculator.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Tabs from "../../Atoms/Tabs";
import Accordion from "../../Atoms/Accordion";
import data from "../../Constant/data.json";
const EMICalculator = ({
  interestRate,
  minTenuare,
  maxTenuare,
  title,
  description,
}) => {
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

  const faqData = data.faq;

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Tabs />

        <h2 className="text-center mb-4 mt-4">{title}</h2>
        <p>{description}</p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <div className="form-group mb-3">
                <label htmlFor="loanAmount" className="form-label">
                  Loan Amount:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="loanAmount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
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
                <label htmlFor="interestRate" className="form-label">
                  Interest Rate (Annual %):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="interestRate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
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
                <label htmlFor="tenure" className="form-label">
                  Tenure (Years):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="tenure"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                />
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
          </div>
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <div className="d-md-flex  d-xl-flex mt-5 text-sm-center text-md-left text-xl-left">
                <div style={{ margin: "70px 0px" }} className="">
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
                <div className="d-flex justify-content-center">
                  {/* style={{margin:'20px'}} */}
                  {emi > 0 && (
                    <div
                      className="text-center mb-4"
                      style={{ width: 250, height: 250 }}
                    >
                      <Doughnut data={chartData} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h3 className="mt-3 text-center mb-3">About HSBC EMI Calculator</h3>
          <div className="col-md-6">
            {faqData.slice(0, 3).map((faq, index) => (
              <Accordion
                key={index}
                bgColor={"#db0011"}
                color={"#ffffff"}
                title={faq.question}
                description={faq.answer}
              />
            ))}
          </div>
          <div className="col-md-6">
            {faqData.slice(3).map((faq, index) => (
              <Accordion
                key={index}
                bgColor={"#db0011"}
                color={"#ffffff"}
                title={faq.question}
                description={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EMICalculator;
