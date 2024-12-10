import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/userPages/Home";
import Login from "./Pages/userPages/Login";
import Register from "./Pages/userPages/Register";
import EMICalculator from "./Components/Calculator/EmiCalculator";
import PrepaymentCalculator from "./Components/Calculator/PrepaymentCalculator";
import ViewLoanDetails from "./Pages/userPages/ViewLoanDetails";
import KYCVerification from "./Pages/userPages/KYCVerification";
import ApplyLoan from "./Pages/userPages/ApplyLoan";
import ProtectedRoute from "./Atoms/ProtectedRoute";
import Error404 from "./Pages/statusPages/Error404";
import Error500 from "./Pages/statusPages/Error500";
import Dashboard from "./Pages/userPages/Dashboard";
import UserProfileDetails from "./Pages/userPages/UserProfile";
import EditProfileForm from "./Pages/userPages/EditProfile";
import AdminDashboard from "./Pages/adminPages/AdminDashboard";
import AdminLogin from "./Pages/adminPages/AdminLogin";
import LoanDetails from "./Pages/adminPages/LoanDetails";
import LoanApplications from "./Pages/adminPages/LoanApplications";
import data from './Constant/data.json'
function App() {
  useEffect(() => {
    document.title = "Loan App";
  }, []);
  return (
    <Router>
      <Routes>
        {/* admin routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/admin/loan-details" element={<LoanDetails />} />
        <Route path="/admin/loan-applications" element={<LoanApplications />} />
       
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
              description={data.loanCalculators?.homeDescription}
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
              description={data.loanCalculators?.carDescription}
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
              description={data.loanCalculators?.personalDescription}
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
        <Route path="/view-profile" element={<UserProfileDetails />} />
        <Route element={<ProtectedRoute />}>
        
        </Route>

        {/* loan routes */}
        <Route path="/apply-loan" element={<ApplyLoan />} />
        <Route path="/view-loan-details" element={<ViewLoanDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kyc" element={<KYCVerification />} />

       
        
        
      </Routes>
    </Router>
  );
}

export default App;
