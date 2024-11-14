import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../atoms/Footer";
import Navbar from "../atoms/Navbar";

const KYCVerification = () => {
  const [showOtp, setShowOtp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    // handle form submission
  };

  const handleVerifyClick = () => {
    setShowOtp(true);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <img src="/kyc.jpg" style={{ width: "500px", marginLeft: "50px" }} />
        <div
          className="container"
          style={{ maxWidth: "400px", marginTop: "80px" }}
        >
          <div className="card shadow">
            <h5
              className="card-title text-center"
              style={{
                color: "#ffffff",
                background: "#db0011",
                borderRadius: "5px 5px 0px 0px",
                padding: "10px",
              }}
            >
              KYC Verification
            </h5>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="panId" className="form-label">
                    PAN ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="panId"
                    placeholder="Enter PAN ID"
                    {...register("panId", { required: true })}
                  />
                  {errors.panId && (
                    <p className="text-danger">PAN ID is required</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="aadharId" className="form-label">
                    Aadhaar ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="aadharId"
                    placeholder="Enter Aadhaar ID"
                    {...register("aadharId", { required: true })}
                  />
                  {errors.aadharId && (
                    <p className="text-danger">Aadhaar ID is required</p>
                  )}
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="email"
                    className="form-label"
                    style={{ flex: 1 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    style={{ flex: 2 }}
                    {...register("email", { required: true })}
                  />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleVerifyClick}
                    style={{ marginLeft: "10px" }}
                  >
                    Verify
                  </button>
                </div>
                {errors.email && (
                  <p className="text-danger">Email is required</p>
                )}
                {showOtp && (
                  <div className="mb-3">
                    <label htmlFor="otp" className="form-label">
                      OTP
                    </label>
                    <div className="d-flex justify-content-between">
                      {[0, 1, 2, 3].map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          className="form-control"
                          style={{ width: "40px", textAlign: "center" }}
                          {...register(`otp.${index}`, { required: true })}
                        />
                      ))}
                    </div>
                    {errors.otp && (
                      <p className="text-danger">All OTP fields are required</p>
                    )}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{
                    backgroundColor: "#db0011",
                    borderColor: "#db0011",
                    marginTop: "20px",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KYCVerification;
