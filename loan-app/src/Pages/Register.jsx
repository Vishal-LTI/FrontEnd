import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import PrimaryButton from "../Atoms/PrimaryButton";
import { registerUser } from '../features/auth/authActions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [showOtp, setShowOtp] = useState(false);
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const [customError, setCustomError] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/login')
    // redirect authenticated user to profile screen
    if (userInfo) navigate('/user-profile')
  }, [navigate, userInfo, success])


  const onSubmit = (data) => {
    // check if passwords match
     // check if passwords match
     if (data.password !== data.confirmPassword) {
      setCustomError('Password mismatch')
      return
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
  }

  const handleVerifyClick = () => {
    setShowOtp(true);
  };

  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "80px" }}>
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
          Register
        </h5>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
          {error && <p className="text-danger">{error}</p>}
          {customError && <p className="text-danger">{customError}</p>}
            <div className="d-flex">
              <div className="mb-3" style={{ marginRight: "10px" }}>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                  {...register("name", { required: true })}
                />
                {errors.name && <p className="text-danger">Name is required</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="contactNo" className="form-label">
                  Contact No
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNo"
                  placeholder="Enter Contact No"
                  {...register("contactNo", { required: true })}
                />
                {errors.contactNo && (
                  <p className="text-danger">Contact No is required</p>
                )}
              </div>
            </div>
            <div className="d-flex">
              <div className="mb-3" style={{ marginRight: "10px" }}>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-danger">Password is required</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Enter Confirm Password"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <p className="text-danger">Confirm Password is required</p>
                )}
              </div>
            </div>
            <div className="mb-3 align-items-center">
              <label htmlFor="email" className="form-label" style={{ flex: 1 }}>
                Email
              </label>
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  style={{ flex: 2, marginRight:'10px' }}
                  {...register("email", { required: true })}
                />
               <PrimaryButton type="submit" label="Verify" btnColor="#db0011" onClick={handleVerifyClick} />
              </div>
              {errors.email && <p className="text-danger">Email is required</p>}
            </div>
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
            <PrimaryButton type="submit" label={loading ? 'Loading...' : 'Register'} btnColor="#db0011" onClick={handleSubmit(onSubmit)} />
          </form>
          <div className="mt-3 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#db0011" }}>
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
