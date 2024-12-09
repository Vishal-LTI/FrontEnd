import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { applyLoan } from "../../features/auth/authActions";
import Layout from "../../Components/Layout";
import FormInput from "../../Components/FormInput";

const ApplyLoan = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Loan Details Submitted: ", data);
    dispatch(applyLoan({
      loanAmount: data.loanAmount,
      tenureInYears: data.tenureInYears,
      userId: data.user,
      loanTypeId: data.loanType,
      loanStatusId: data.loanStatus,
    }));
  };

  return (
    <Layout>
      <div className="container" style={{ maxWidth: "1200px", marginTop: "50px" }}>
        <div className="card shadow">
          <h5 className="card-title text-center" style={{ color: "#ffffff", background: "#db0011", borderRadius: "5px 5px 0px 0px", padding: "10px" }}>
            Apply for Loan
          </h5>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
              <FormInput label="Loan Amount" id="loanAmount" type="number" placeholder="Enter Loan Amount" register={register} required={true} errors={errors} />
              <FormInput label="Tenure (Years)" id="tenureInYears" type="number" placeholder="Enter Tenure in Years" register={register} required={true} errors={errors} />
              <FormInput label="Tenure (Months)" id="tenureInMonths" type="number" placeholder="Enter Tenure in Months" register={register} required={true} errors={errors} />
              <FormInput label="EMI Debited Date" id="emiDebitedDate" type="date" register={register} required={true} errors={errors} />
              <FormInput label="Interest Rate (%)" id="interest" type="number" step="0.01" placeholder="Enter Interest Rate" register={register} required={true} errors={errors} />
              <FormInput label="User ID" id="user" type="number" placeholder="Enter User ID" register={register} required={true} errors={errors} />
              <FormInput label="Loan Type" id="loanType" type="text" placeholder="Enter Loan Type" register={register} required={true} errors={errors} />
              <FormInput label="Loan Status" id="loanStatus" type="text" placeholder="Enter Loan Status" register={register} required={true} errors={errors} />
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#db0011", borderColor: "#db0011", marginTop: "20px" }}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplyLoan;
