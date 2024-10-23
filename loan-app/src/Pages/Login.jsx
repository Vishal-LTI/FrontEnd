import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/login.css'; // Assuming you have some custom styles

const Login = () => {
  return (
    <div className="banner-container">
      <img src="../home.webp" alt="img" className="login-img" />
      <div className="register-component">
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
          <div className="row w-100">
            <div className="col-md-10 offset-md-2">
              <div className="card shadow">
                <div className="card-body">
                  <h3 className="card-title text-center" style={{ color: "#FF7F50" }}>Login</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="accountNo" className="form-label">Account No</label>
                      <input type="text" className="form-control" id="accountNo" placeholder="Enter Account No" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pin" className="form-label">PIN</label>
                      <input type="password" className="form-control" id="pin" placeholder="Enter PIN" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#FF7F50", borderColor: "#FF7F50" }}>Login</button>
                  </form>
                  <div className="mt-3 text-center">
                    <p>Not registered? <Link to="/signup" style={{ color: "#FF7F50" }}>Sign up here</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
