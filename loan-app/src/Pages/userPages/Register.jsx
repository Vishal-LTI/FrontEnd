import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../Atoms/PrimaryButton";
import { useRegisterMutation, useSendOtpMutation, useValidateOtpMutation } from "../../services/authServices";

const Register = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);
  const [customError, setCustomError] = useState(null);
  const navigate = useNavigate();
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  
  const [registerUser, { isLoading: isRegisterLoading, error: registerError }] = useRegisterMutation();
  const [sendOtp, { isLoading: isOtpLoading, error: otpError }] = useSendOtpMutation();
  const [validateOtp, { isLoading: isValidateOtpLoading, error: validateOtpError }] = useValidateOtpMutation();

  const onSubmit = async (data) => {
    // Check if passwords match
    if (data.password !== data.confirmPassword) {
      setCustomError("Passwords do not match");
      return;
    }
    if (data.otp.length < 4) {
      setCustomError("OTP must be 4 digits");
      return;
    }
    // Transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();

    try {
      // Validate OTP
      await validateOtp({ email: data.email, otp: data.otp }).unwrap();
      // Register user
      data.firstName = data.name.split(' ')[0];
      data.lastName = data.name.split(' ')[1];
      data.mobNumber = data.contactNo;
      console.log(data);
      await registerUser(data).unwrap();
      // Redirect to login page on success
      navigate("/login");
    } catch (err) {
      setCustomError(err.message || "Failed to register");
    }
  };

  const handleVerifyClick = async () => {
    const email = watch("email").toLowerCase();
    try {
      // Send OTP to the provided email
      await sendOtp({ email }).unwrap();
      setShowOtp(true);
      setBtnDisable(false);
    } catch (err) {
      setCustomError("Failed to send OTP");
    }
  };

  return (
    <>
      <div className="register-component">
        <img src="./register.jpg" alt="register" style={{ width: "500px" }} />
      </div>
      <div style={{ maxWidth: "500px", marginTop: "80px", marginLeft: "150px" }}>
        <div className="card shadow">
          <h5 className="card-title text-center" style={{ color: "#ffffff", background: "#db0011", borderRadius: "5px 5px 0px 0px", padding: "10px" }}>
            Register
          </h5>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">Name <span style={{ fontSize: "10px" }}>(as per Aadhar)</span></label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                  {...register("name", {
                    required: true,
                    pattern: {
                      value: /[A-Za-z]/,
                      message: "Only alphabets are allowed for name",
                    },
                  })}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="contactNo" className="form-label">Contact No</label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNo"
                  placeholder="Enter Contact No"
                  {...register("contactNo", {
                    required: true,
                    pattern: {
                      value: /[0-9]{10}/,
                      message: "Contact number must be 10 digits and only contain numbers.",
                    },
                  })}
                />
                {errors.contactNo && <p className="text-danger">{errors.contactNo.message}</p>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                />
                {errors.password && <p className="text-danger">Password is required</p>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Enter Confirm Password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (val) => watch("password") === val || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  <PrimaryButton
                    type="button"
                    label={isOtpLoading ? "Sending OTP..." : "Verify"}
                    btnColor="#db0011"
                    width="100px"
                    onClick={handleVerifyClick}
                  />
                </div>
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>
              {showOtp && (
                <div className="col-md-12 mb-3">
                  <label htmlFor="otp" className="form-label">OTP</label>
                  <input
                    type="text"
                    maxLength="6"
                    className="form-control"
                    id="otp"
                    placeholder="Enter OTP"
                    {...register("otp", { required: true })}
                  />
                  {errors.otp && <p className="text-danger">OTP is required</p>}
                </div>
              )}
              <div className="col-md-12 mb-3">
                <PrimaryButton
                  disabled={btnDisable || isRegisterLoading}
                  type="submit"
                  label={isRegisterLoading ? "Sending Data..." : "Register"}
                  btnColor="#db0011"
                />
              </div>
              {registerError && <p className="text-danger">{registerError.message}</p>}
              {otpError && <p className="text-danger">{otpError.message}</p>}
              {validateOtpError && <p className="text-danger">{validateOtpError.message}</p>}
              {customError && <p className="text-danger">{customError}</p>}
            </form>
            <div className="mt-3 text-center">
              <p>
                Already have an account? 
                <Link to="/login" style={{ color: "#db0011" }}>
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
