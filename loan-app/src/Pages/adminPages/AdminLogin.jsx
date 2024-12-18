import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../Styles/login.css"; // Assuming you have some custom styles
import PrimaryButton from "../../Atoms/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/auth/authActions";

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // redirect authenticated user to profile screen
    if (success && userInfo) {
      navigate("/view-profile");
    }
  }, [navigate, userInfo, success]);

  const onSubmit = (data) => {
    console.log("Login Data: ", data);
    // Dispatch login action
    dispatch(userLogin(data));
  };

  return (
    <>
      <div className="banner-container">
        <img
          src="./login.jpg"
          alt="img"
          className="login-img"
          style={{ width: "550px" }}
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
                      Admin Login
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {error && <p className="text-danger">{error}</p>}
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
                          <p className="text-danger">{errors.userName.message}</p>
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
                        label={loading ? "Logging In..." : "Login"}
                        btnColor="#db0011"
                      />
                    </form>
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

export default AdminLogin;
