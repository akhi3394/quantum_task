import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 

const Testimonials = () => {
  return (
    <section className="testimonials py-5">
      <div className="container text-center">
        <h2>TESTIMONIALS</h2>
        <div className="testimonial-content my-4">
          <img
            src="path-to-profile-picture.jpg"
            alt="Profile"
            className="rounded-circle mb-3"
          />
          <p className="fst-italic">
            "Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum."
          </p>
          <h5 className="mt-3">PAULA WILSON</h5>
          <p className="text-uppercase">Media Analyst</p>
        </div>
        <div className="testimonial-navigation">
          <button className="btn btn-outline-primary me-2">
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-outline-primary">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
