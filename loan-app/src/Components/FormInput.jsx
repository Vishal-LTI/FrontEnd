// Components/FormInput.js
import React from "react";

const FormInput = ({ label, id, type, placeholder, register, required, errors }) => {
  return (
    <div className="col-md-4">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        {...register(id, { required })}
      />
      {errors[id] && (
        <p className="text-danger">{label} is required</p>
      )}
    </div>
  );
};

export default FormInput;
