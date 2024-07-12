import React, { useState } from "react";
import "./Home.css"; // Import custom CSS

const Home = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#" style={{ color: "rgb(39, 52, 163)" }}>
            Jillion Technologies
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#" style={{ color: "rgb(23, 39, 186)" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#" style={{ color: "rgb(23, 39, 186)" }}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#" style={{ color: "rgb(23, 39, 186)" }}>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#" style={{ color: "rgb(23, 39, 186)" }}>
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#" style={{ color: "rgb(23, 39, 186)" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
