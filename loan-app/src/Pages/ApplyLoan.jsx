import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../Atoms/Navbar";
import Footer from "../Atoms/Footer";

const ApplyLoan = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Loan Details Submitted: ", data);
    // Add your form submission logic here
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ maxWidth: "1200px", marginTop: "80px" }}>
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
            Apply for Loan
          </h5>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
              <div className="col-md-4">
                <label htmlFor="loanAmount" className="form-label">
                  Loan Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="loanAmount"
                  placeholder="Enter Loan Amount"
                  {...register("loanAmount", { required: true })}
                />
                {errors.loanAmount && <p className="text-danger">Loan Amount is required</p>}
              </div>
              <div className="col-md-4">
                <label htmlFor="tenureInYears" className="form-label">
                  Tenure (Years)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="tenureInYears"
                  placeholder="Enter Tenure in Years"
                  {...register("tenureInYears", { required: true })}
                />
                {errors.tenureInYears && <p className="text-danger">Tenure in Years is required</p>}
              </div>
              <div className="col-md-4">
                <label htmlFor="tenureInMonths" className="form-label">
                  Tenure (Months)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="tenureInMonths"
                  placeholder="Enter Tenure in Months"
                  {...register("tenureInMonths", { required: true })}
                />
                {errors.tenureInMonths && <p className="text-danger">Tenure in Months is required</p>}
              </div>
              <div className="col-md-4">
                <label htmlFor="emiDebitedDate" className="form-label">
                  EMI Debited Date
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="emiDebitedDate"
                  {...register("emiDebitedDate", { required: true })}
                />
                {errors.emiDebitedDate && <p className="text-danger">EMI Debited Date is required</p>}
              </div>
              <div className="col-md-4">
                <label htmlFor="interest" className="form-label">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="interest"
                  placeholder="Enter Interest Rate"
                  {...register("interest", { required: true })}
                />
                {errors.interest && <p className="text-danger">Interest Rate is required</p>}
              </div>
              <div className="col-md-4">
                <label htmlFor="user" className="form-label">
                  User ID
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="user"
                  placeholder="Enter User ID"
                  {...register("user", { required: true })}
                />
                {errors.user && <p className="text-danger">User ID is required</p>}
              </div>
              <div className="col-md-4">
                <label htmlFor="loanType" className="form-label">
                  Loan Type
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="loanType"
                  placeholder="Enter Loan Type"
                  {...register("loanType", { required: true })}
                />
                {errors.loanType && <p className="text-danger">Loan Type is required</p>}
              </div>
              <div className="col-md-4">
                <label htmlFor="loanStatus" className="form-label">
                  Loan Status
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="loanStatus"
                  placeholder="Enter Loan Status"
                  {...register("loanStatus", { required: true })}
                />
                {errors.loanStatus && <p className="text-danger">Loan Status is required</p>}
              </div>
              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn btn-primary w-20"
                  style={{
                    backgroundColor: "#db0011",
                    borderColor: "#db0011",
                    marginTop: "20px",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplyLoan;
