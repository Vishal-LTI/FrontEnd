import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import EMICalculator from "./Components/Calculator/EmiCalculator";
import PrepaymentCalculator from "./Components/Calculator/PrepaymentCalculator";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Home />} />

        <Route path="/home-loan-emicalculator" element={<EMICalculator title="Home Loan EMI Calculator" interestRate='8.5' minTenuare="10" maxTenuare="30"/>} />
        <Route path="/car-loan-emicalculator" element={<EMICalculator title="Car Loan EMI Calculator" interestRate='9' minTenuare="1" maxTenuare="7"/>} />
        <Route path="/personal-loan-emicalculator" element={<EMICalculator title="Personal Loan EMI Calculator" interestRate='10' minTenuare="1" maxTenuare="10"/>} />
        <Route path="/gold-loan-emicalculator" element={<EMICalculator title="Gold Loan EMI Calculator" interestRate='8' minTenuare="1" maxTenuare="5"/>} />
        <Route path="/prepaymentCalculator" element={<PrepaymentCalculator />} />
        
      </Routes>
    </Router>
  );
}

export default App;
