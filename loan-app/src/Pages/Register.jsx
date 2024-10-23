import React from 'react';

const Register = () => {
  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '80px' }}>
            
      <div className="card shadow">
      <h5 className="card-title text-center" style={{ color: '#ffffff', background:'#db0011', borderRadius:'5px 5px 0px 0px', padding:'10px'}}>Register</h5>
        <div className="card-body">
         
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNo" className="form-label">Contact No</label>
              <input type="text" className="form-control" id="contactNo" placeholder="Enter Contact No" />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="pin" className="form-label">OTP</label>
              <input type="password" className="form-control" id="pin" placeholder="Enter PIN" />
            </div>
           
            <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#db0011', borderColor: '#db0011', width: '150px' }}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
