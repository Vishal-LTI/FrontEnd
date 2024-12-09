import React from "react";
import { Link } from "react-router-dom";
const Tabs = () => {
  return (
    <>
      <ul className="list-unstyled nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/home-loan-emicalculator">
            Home Loan Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/car-loan-emicalculator">
            Car Loan Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/personal-loan-emicalculator">
            Personal Loan Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gold-loan-emicalculator">
            Gold Loan Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/prepaymentCalculator">
            Part Payment Calculator
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Tabs;
