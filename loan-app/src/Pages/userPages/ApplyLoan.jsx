import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useApplyLoanMutation } from "../../services/loan/loanApi"; // Import the useApplyLoanMutation hook
import Layout from "../../Components/Layout";
import FormInput from "../../Components/FormInput";

const ApplyLoan = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [applyLoan, { isLoading, isSuccess, isError }] = useApplyLoanMutation();
  const [loanType, setLoanType] = useState('');

  const onSubmit = async (data) => {
    console.log("Loan Details Submitted: ", data);
    try {
      await applyLoan({
        loanAmount: data.loanAmount,
        tenureInYears: data.tenureInYears,
        tenureInMonths: data.tenureInMonths,
        emiDebitedDate: data.emiDebitedDate,
        userId: data.user,
        loanTypeId: data.loanType,
        loanPurpose: data.loanPurpose,
        collateralDetails: data.collateralDetails,
        propertyDetails: data.propertyDetails,
        vehicleDetails: data.vehicleDetails,
        guarantorName: data.guarantorName,
        guarantorAddress: data.guarantorAddress,
        guarantorPhoneNumber: data.guarantorPhoneNumber,
        guarantorEmail: data.guarantorEmail,
        guarantorIncome: data.guarantorIncome,
        guarantorEmploymentStatus: data.guarantorEmploymentStatus,
        guarantorEmployerName: data.guarantorEmployerName,
        guarantorEmployerAddress: data.guarantorEmployerAddress,
      }).unwrap();
      console.log('Loan application submitted successfully');
    } catch (error) {
      console.error('Failed to submit loan application', error);
    }
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
              <FormInput label="Tenure (Months)" id="tenureInMonths" type="number" placeholder="Enter Tenure in Months" register={register} errors={errors} />
              <FormInput label="EMI Debited Date" id="emiDebitedDate" type="date" register={register} required={true} errors={errors} />
              <FormInput label="Interest Rate (%)" id="interest" type="number" step="0.01" placeholder="Enter Interest Rate" register={register} required={true} errors={errors} />
              <FormInput label="User ID" id="user" type="number" placeholder="Enter User ID" register={register} required={true} errors={errors} />
              <div className="col-md-12">
                <label htmlFor="loanType" className="form-label">Loan Type</label>
                <select id="loanType" className="form-select" {...register("loanType", { required: true })} onChange={(e) => setLoanType(e.target.value)}>
                  <option value="">Select Loan Type</option>
                  <option value="HOMELOAN">Home Loan</option>
                  <option value="CARLOAN">Car Loan</option>
                  <option value="PERSONALLOAN">Personal Loan</option>
                </select>
                {errors.loanType && <p className="text-danger">Loan Type is required</p>}
              </div>
              {loanType === "HOMELOAN" && (
                <>
                  <FormInput label="Property Details" id="propertyDetails" type="text" placeholder="Enter Property Details" register={register} required={true} errors={errors} />
                  <FormInput label="Collateral Details" id="collateralDetails" type="text" placeholder="Enter Collateral Details" register={register} required={true} errors={errors} />
                </>
              )}
              {loanType === "CARLOAN" && (
                <FormInput label="Vehicle Details" id="vehicleDetails" type="text" placeholder="Enter Vehicle Details" register={register} required={true} errors={errors} />
              )}
              <FormInput label="Loan Purpose" id="loanPurpose" type="text" placeholder="Enter Loan Purpose" register={register} required={true} errors={errors} />
              <FormInput label="Guarantor Name" id="guarantorName" type="text" placeholder="Enter Guarantor Name" register={register} required={true} errors={errors} />
              <FormInput label="Guarantor Address" id="guarantorAddress" type="text" placeholder="Enter Guarantor Address" register={register} required={true} errors={errors} />
              <FormInput label="Guarantor Phone Number" id="guarantorPhoneNumber" type="text" placeholder="Enter Guarantor Phone Number" register={register} required={true} errors={errors} />
              <FormInput label="Guarantor Email" id="guarantorEmail" type="email" placeholder="Enter Guarantor Email" register={register} required={true} errors={errors} />
              <FormInput label="Guarantor Income" id="guarantorIncome" type="number" placeholder="Enter Guarantor Income" register={register} required={true} errors={errors} />
              <FormInput label="Guarantor Employment Status" id="guarantorEmploymentStatus" type="text" placeholder="Enter Guarantor Employment Status" register={register} required={true} errors={errors} />
              <FormInput label="Guarantor Employer Name" id="guarantorEmployerName" type="text" placeholder="Enter Guarantor Employer Name" register={register} required={true} errors={errors} />
              <FormInput label="Guarantor Employer Address" id="guarantorEmployerAddress" type="text" placeholder="Enter Guarantor Employer Address" register={register} required={true} errors={errors} />
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#db0011", borderColor: "#db0011", marginTop: "20px" }} disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
                {isSuccess && <p className="text-success mt-2">Loan application submitted successfully!</p>}
                {isError && <p className="text-danger mt-2">Failed to submit loan application.</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplyLoan;
