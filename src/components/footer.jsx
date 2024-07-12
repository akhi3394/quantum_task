import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import custom CSS for gradient background

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>CONTACT US</h5>
            <p>Email: contact@JILLIONTECHNOLOGIES.com</p>
            <p>Phone: 123456789</p>
            <p>Address: C-260, Sector-63, Noida, UP-201301</p>
          </div>
          <div className="col-md-3">
            <h5>COMPANY</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Development Process</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>SERVICE</h5>
            <ul className="list-unstyled">
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>E-commerce Development</li>
              <li>Customer Software Development</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>SUPPORT</h5>
            <ul className="list-unstyled">
              <li>Contact</li>
              <li>Term & Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
