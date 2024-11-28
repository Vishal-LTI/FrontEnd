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
import Error404 from "./pages/statusPages/Error404";
import Error500 from "./pages/statusPages/Error500";
import Dashboard from "./pages/Dashboard";
import UserProfileDetails from "./pages/UserProfile";
import EditProfileForm from "./pages/EditProfile";
import AdminLogin from "./pages/adminPages/AdminLogin";
import LoanDetails from "./pages/adminPages/LoanDetails";

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
        <Route path="/admin/loan-details" element={<LoanDetails />} />
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
        <Route path="/view-profile" element={<UserProfileDetails />} />
        <Route path="/edit-profile" element={<EditProfileForm />} />
        <Route path="/kyc" element={<KYCVerification />} />
        <Route element={<ProtectedRoute />}>
          {/* <Route path="/view-profile" element={<ViewProfilePage />} /> */}
          {/* <Route path="/apply-loan" element={<ApplyLoan />} /> */}
          {/* <Route path="/update-profile" element={<UpdateProfilePage />} /> */}
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
