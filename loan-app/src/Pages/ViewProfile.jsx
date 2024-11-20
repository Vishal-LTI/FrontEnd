import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/viewProfile.css";
import Navbar from "../atoms/Navbar";
import Footer from "../atoms/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDetailsQuery } from "../services/auth/authService";
import { setCredentials } from "../features/auth/authSlice";
const ViewProfilePage = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    pollingInterval: 900000, // 15mins
  })

  useEffect(() => {
    if (data) dispatch(setCredentials(data))
  }, [data, dispatch])
  // Dummy data for user profile
  const userProfile = {
    photo: "../Media.png",
    //firstName: "John",
    //lastName: "Doe",
    name:userInfo?.name.charAt(0).toUpperCase(),
    age: 30,
    dob: "24/12/1997",
    companyDetails: "Works at Tech Corp as a Senior Developer.",
    contact:userInfo?.contact,
    email:userInfo?.email,
    contactDetails: "john.doe@example.com, +1-555-555-5555",
  };
  const loanDetails = {
    loanType: "Home Loan",
    loanAmount: "1000000",
    tenure: "20",
    emi: "20000",
    interestRate: 8.5,
    outStandingAmount: "800000",
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h3
          className="card-title text-center mb-5"
          style={{ color: "#FF7F50" }}
        >
          Profile Information
        </h3>

        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="card p-4">
              <img
                src={userProfile.photo}
                alt="User Photo"
                className="img-fluid rounded-circle"
                style={{
                  maxWidth: "250px",
                  height: "250px",
                  marginLeft: "120px",
                }}
              />
              <div className="mb-4 mt-2">
                <h5 className="title">Loan Details</h5>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Loan Type:
                      </label>
                      <span>{loanDetails.loanType}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Loan Amount:
                      </label>
                      <span>{loanDetails.loanAmount}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Tenure:
                      </label>
                      <span>{loanDetails.tenure} years</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Interest Rate:
                      </label>
                      <span>{loanDetails.interestRate}%</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        EMI:
                      </label>
                      <span>{loanDetails.emi}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        OutStanding:
                      </label>
                      <span>{loanDetails.outStandingAmount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4">
              <div className="mb-4">
                <h5 className="title">Personal Details</h5>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        First Name:
                      </label>
                      <span>{userProfile.name}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Last Name:
                      </label>
                      <span>{userProfile.name}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Age:
                      </label>
                      <span>{userProfile.age}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        DOB:
                      </label>
                      <span>{userProfile.dob}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="title">Company Details</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        First Name:
                      </label>
                      <span>{userProfile.firstName}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Last Name:
                      </label>
                      <span>{userProfile.lastName}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Age:
                      </label>
                      <span>{userProfile.age}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        DOB:
                      </label>
                      <span>{userProfile.dob}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="title">Contact Details</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        First Name:
                      </label>
                      <span>{userProfile.firstName}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Last Name:
                      </label>
                      <span>{userProfile.lastName}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Age:
                      </label>
                      <span>{userProfile.age}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        DOB:
                      </label>
                      <span>{userProfile.dob}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewProfilePage;
