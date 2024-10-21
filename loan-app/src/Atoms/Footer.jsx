import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>We are a leading loan management provider offering flexible and transparent loan solutions.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@loanprovider.com</p>
            <p>Phone: +1-800-123-4567</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="mt-3">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
