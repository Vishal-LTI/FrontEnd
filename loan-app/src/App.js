import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/userPages/Home";
import Login from "./pages/userPages/Login";
import Register from "./pages/userPages/Register";
import EMICalculator from "./Components/calculator/EmiCalculator";
import PrepaymentCalculator from "./Components/calculator/PrepaymentCalculator";
import ViewLoanDetails from "./pages/userPages/ViewLoanDetails";
import KYCVerification from "./pages/userPages/KYCVerification";
import ApplyLoan from "./pages/userPages/ApplyLoan";
import ProtectedRoute from "./atoms/ProtectedRoute";
import Error404 from "./pages/statusPages/Error404";
import Error500 from "./pages/statusPages/Error500";
import Dashboard from "./pages/userPages/Dashboard";
import UserProfileDetails from "./pages/userPages/UserProfile";
import EditProfileForm from "./pages/userPages/EditProfile";
import AdminDashboard from "./pages/adminPages/AdminDashboard";
import AdminLogin from "./pages/adminPages/AdminLogin";

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
