import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import { Container, Row, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Styles/editProfile.css";

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
      <Layout>
            <Container className="mt-5">
              <Row>
              <Card className="tabs-card-body">
              <Card.Body className="text-center row">
              <div className="col-sm-12 col-md-6">
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
                <div className="">
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3 col-sm-12 d-flex flex-column">
                          <label className='inputLabel'>PAN ID</label>
                          <input className='inputCmp' type="text"
                            placeholder="Enter PAN ID"
                            {...register("panId", { required: true })}
                          />
                          {errors.panId && (
                            <p className="text-danger">PAN ID is required</p>
                          )}
                    </div>
                   <div className="d-flex">
                   <div className="mb-3 col-md-9 col-sm-12 d-flex flex-column">
                         <label className='inputLabel'>AADHAR ID</label>
                          <input className='inputCmp w-100' type="text"
                          id="aadharId"
                          placeholder="Enter Aadhaar ID"
                          {...register("aadharId", { required: true })}
                        />
                        {errors.aadharId && (
                          <p className="text-danger">Aadhaar ID is required</p>
                        )}
                      </div>
                      <div className="mb-3 col-md-3 col-sm-12 d-flex justify-content-center pt-2 align-items-center">
                      <button
                        type="button"
                        className="btn btn-secondary mb-3 col-md-4 col-sm-12"
                        onClick={handleVerifyClick}
                        style={{
                          marginLeft: "10px",
                          width: "100px",
                          height: "40px",
                          marginTop: "40px",
                        }}
                      >
                        Verify
                      </button>
                      </div>
                   </div>
                   
                    {showOtp && (
                      <div className="mb-3">
                        <label htmlFor="otp" className="form-label">
                          OTP
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="otp"
                          placeholder="Enter OTP"
                          {...register("otp", { required: true })}
                        />
                        {errors.otp && (
                          <p className="text-danger">OTP is required</p>
                        )}
                      </div>
                    )}
                    <div className="d-flex">
                      <div className="mb-3">
                        <label htmlFor="photoUpload" className="form-label">
                          Upload Signature
                        </label>
                        <div
                          className="d-flex align-items-center justify-content-center border"
                          style={{
                            width: "100px",
                            height: "100px",
                            cursor: "pointer",
                          }}
                        >
                          <label
                            htmlFor="photoUpload"
                            className="d-flex align-items-center justify-content-center w-100 h-100"
                            style={{ cursor: "pointer" }}
                          >
                            <span style={{ fontSize: "50px", color: "#ccc" }}>
                              +
                            </span>
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="photoUpload"
                            style={{ display: "none" }}
                            {...register("photo", { required: true })}
                          />
                        </div>
                        {errors.photo && (
                          <p className="text-danger">Photo is required</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="photoUpload" className="form-label">
                          Upload Photo
                        </label>
                        <div
                          className="d-flex align-items-center justify-content-center border"
                          style={{
                            width: "100px",
                            height: "100px",
                            cursor: "pointer",
                          }}
                        >
                          <label
                            htmlFor="photoUpload"
                            className="d-flex align-items-center justify-content-center w-100 h-100"
                            style={{ cursor: "pointer" }}
                          >
                            <span style={{ fontSize: "50px", color: "#ccc" }}>
                              +
                            </span>
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="photoUpload"
                            style={{ display: "none" }}
                            {...register("photo", { required: true })}
                          />
                        </div>
                        {errors.photo && (
                          <p className="text-danger">Photo is required</p>
                        )}
                      </div>
                    </div>

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
              <div className="col-sm-12 col-md-6">
                    <img
                      src="/kyc.jpg"
                      style={{
                        width: "100%",
                        height: "300px",
                      }}
                    />
              </div>
              </Card.Body>
              </Card>
              </Row>
             
            </Container>
      </Layout>
    </>
  );
};

export default KYCVerification;
