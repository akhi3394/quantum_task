import React from 'react';
import gif from '/src/assets/images.png'


const ContactUs = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={gif}
            alt="Illustration of a person running"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6">
          <h2>Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Example textarea</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
