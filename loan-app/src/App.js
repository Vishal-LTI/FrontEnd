import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EMICalculator from "./Components/calculator/EmiCalculator";
import PrepaymentCalculator from "./Components/calculator/PrepaymentCalculator";
import ViewProfilePage from "./pages/ViewProfile";
import UpdateProfilePage from "./pages/UpdateProfile";
import ViewLoanDetails from "./pages/ViewLoanDetails";
import KYCVerification from "./pages/KYCVerification";
import ApplyLoan from "./pages/ApplyLoan";
import ProtectedRoute from "./atoms/ProtectedRoute";
import Error401 from "./pages/statusPages/Error401";
import Error404 from "./pages/statusPages/Error404";
import Error500 from "./pages/statusPages/Error500";
import Dashboard from "./pages/Dashboard";

function App() {
  useEffect(() => {
    document.title = 'Loan App';
  }, []);
  return (
    <Router>
      <Routes>
        {/* login routes */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* error routes */}
        <Route path="*" element={<Error404 />} />
        <Route path="/error" element={<Error500 />} />

        {/* Calculator routes */}
        <Route
          path="/home-loan-emicalculator"
          element={
            <EMICalculator
              title="Home Loan EMI Calculator"
              interestRate="8.5"
              minTenuare="10"
              maxTenuare="30"
            />
          }
        />
        <Route
          path="/car-loan-emicalculator"
          element={
            <EMICalculator
              title="Car Loan EMI Calculator"
              interestRate="9"
              minTenuare="1"
              maxTenuare="7"
            />
          }
        />
        <Route
          path="/personal-loan-emicalculator"
          element={
            <EMICalculator
              title="Personal Loan EMI Calculator"
              interestRate="10"
              minTenuare="1"
              maxTenuare="10"
            />
          }
        />
        <Route
          path="/gold-loan-emicalculator"
          element={
            <EMICalculator
              title="Gold Loan EMI Calculator"
              interestRate="8"
              minTenuare="1"
              maxTenuare="5"
            />
          }
        />
        <Route
          path="/prepaymentCalculator"
          element={<PrepaymentCalculator />}
        />

        {/* profile routes */}
        <Route path="/view-profile" element={<ViewProfilePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/view-profile" element={<ViewProfilePage />} />
          {/* <Route path="/kyc" element={<KYCVerification />} /> */}
          {/* <Route path="/apply-loan" element={<ApplyLoan />} /> */}
          <Route path="/update-profile" element={<UpdateProfilePage />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kyc" element={<KYCVerification />} />
        <Route path="/apply-loan" element={<ApplyLoan />} />
        <Route path="/view-loan-details" element={<ViewLoanDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
