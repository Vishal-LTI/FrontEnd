import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/viewProfile.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Layout from "../../Components/Layout";

const UpdateProfilePage = () => {
  // Dummy data for user profile
  const [userProfile, setUserProfile] = useState({
    photo: "../Media.png",
    firstName: "John",
    lastName: "Doe",
    age: 30,
    dob: "24/12/1997",
  });

  const [loanDetails, setLoanDetails] = useState({
    loanType: "Home Loan",
    loanAmount: "1000000",
    tenure: "20",
    emi: "20000",
    interestRate: 8.5,
    outStandingAmount: "800000",
  });

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "user") {
      setUserProfile({ ...userProfile, [name]: value });
    } else if (section === "loan") {
      setLoanDetails({ ...loanDetails, [name]: value });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserProfile({ ...userProfile, photo: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setUserProfile({ ...userProfile, photo: null });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", userProfile, loanDetails);
    // Here you can add an API call to update profile details
  };

  return (
    <>
      <Layout>
        <div className="container my-5">
          <h3
            className="card-title text-center mb-5"
            style={{ color: "#FF7F50" }}
          >
            Update Profile Information
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="card p-4">
                  <div className="position-relative">
                    {userProfile.photo ? (
                      <>
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
                        <button
                          className="btn btn-danger position-absolute top-0 end-0"
                          onClick={handleImageRemove}
                          style={{ borderRadius: "50%" }}
                        >
                          ×
                        </button>
                      </>
                    ) : (
                      <>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          style={{ display: "none" }}
                          id="photoUpload"
                        />
                        <label
                          htmlFor="photoUpload"
                          className="btn btn-primary"
                          style={{ borderRadius: "50%", marginLeft: "120px" }}
                        >
                          +
                        </label>
                      </>
                    )}
                  </div>
                  <div className="mb-4">
                    <h5 className="title">Personal Details</h5>
                    <div className="row">
                      {Object.entries(userProfile)
                        .filter(([key]) => key !== "photo")
                        .map(([key, value]) => (
                          <div className="col-md-6 mb-3" key={key}>
                            <label
                              className="form-label"
                              style={{ fontWeight: "bold" }}
                            >
                              {key.charAt(0).toUpperCase() +
                                key.slice(1).replace(/([A-Z])/g, " $1")}
                              :
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name={key}
                              value={value}
                              onChange={(e) => handleInputChange(e, "user")}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card p-4">
                  {/* <form onSubmit={handleSubmit}> */}
                  <div className="mb-4">
                    <h5 className="title">Company Details</h5>
                    <div className="row">
                      {Object.entries(userProfile)
                        .filter(([key]) => key !== "photo")
                        .map(([key, value]) => (
                          <div className="col-md-6 mb-3" key={key}>
                            <label
                              className="form-label"
                              style={{ fontWeight: "bold" }}
                            >
                              {key.charAt(0).toUpperCase() +
                                key.slice(1).replace(/([A-Z])/g, " $1")}
                              :
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name={key}
                              value={value}
                              onChange={(e) => handleInputChange(e, "user")}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="title">Contact Details</h5>
                    <div className="row">
                      {Object.entries(userProfile)
                        .filter(([key]) => key !== "photo")
                        .map(([key, value]) => (
                          <div className="col-md-6 mb-3" key={key}>
                            <label
                              className="form-label"
                              style={{ fontWeight: "bold" }}
                            >
                              {key.charAt(0).toUpperCase() +
                                key.slice(1).replace(/([A-Z])/g, " $1")}
                              :
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name={key}
                              value={value}
                              onChange={(e) => handleInputChange(e, "user")}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#FF7F50",
                        borderColor: "#FF7F50",
                      }}
                    >
                      Update Profile
                    </button>
                  </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default UpdateProfilePage;
