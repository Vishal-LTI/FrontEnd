import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../Styles/login.css"; // Assuming you have some custom styles
import PrimaryButton from "../../Atoms/PrimaryButton";
import { useLoginMutation } from "../../services/authServices";
import {jwtDecode} from "jwt-decode";


const Login = () => {
  const [login, { isLoading, isSuccess, error, data: userInfo }] =
    useLoginMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [customError, setCustomError] = useState(null);

  useEffect(() => {
    if (isSuccess && userInfo) {
      localStorage.setItem("authToken", userInfo.jwtToken);
      const decodedToken = jwtDecode(userInfo.jwtToken);
      const { fullName, userId, username, role } = decodedToken;
      localStorage.setItem("name", fullName);
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);
      localStorage.setItem("userRole", role);
      navigate(`/dashboard/${userId}`);
    }
  }, [navigate, isSuccess, userInfo]);

  const onSubmit = async (data) => {
    try {
      await login(data).unwrap();
    } catch (err) {
      setCustomError(err.message || "Failed to login");
    }
  };

  return (
    <>
      <div className="banner-container">
        <img
          src="./login.jpg"
          alt="img"
          className="login-img"
          style={{ width: "550px", margin: "0px 50px" }}
        />
        <div className="register-component">
          <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="row w-100">
              <div className="col-md-12 offset-md-1">
                <div className="card shadow">
                  <div className="card-body">
                    <h3
                      className="card-title text-center"
                      style={{ color: "#db0011" }}
                    >
                      Login
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {error && <p className="text-danger">{error.message}</p>}
                      {customError && (
                        <p className="text-danger">{customError}</p>
                      )}
                      <div className="mb-3">
                        <label htmlFor="userName" className="form-label">
                          Email ID
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="userName"
                          placeholder="Enter Email Id"
                          {...register("userName", {
                            required: true,
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Please enter a valid Email Id",
                            },
                          })}
                        />
                        {errors.userName && (
                          <p className="text-danger">
                            {errors.userName.message}
                          </p>
                        )}
                      </div>
                      <div className="mb-3">
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
                      <PrimaryButton
                        type="submit"
                        label={isLoading ? "Logging In..." : "Login"}
                        btnColor="#db0011"
                      />
                    </form>
                    <div className="mt-3 text-center">
                      <p>
                        Not registered?{" "}
                        <Link to="/register" style={{ color: "#db0011" }}>
                          Sign up here
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
