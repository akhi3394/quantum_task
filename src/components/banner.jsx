import React from 'react'
import gif from '/src/assets/images.png'

const Banner = () => {
  return (
    <div className="container my-5 pt-5">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h1 className=" fs-1" style={{color:'rgb(39, 52, 163)'}}>
              WE MAKE YOUR IDEA'S 
            </h1>
            <span className=" fs-3" style={{color:'rgb(239, 175, 116)'}}>INTO REALITY</span>
            <p className="lead">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <hr className="my-4" />
            <p>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn fs-6 m-2 btn-lg text-white" style={{backgroundColor: "rgb(23, 39, 186)" }}>
              Get Started
            </a>
            <a href="#" className="btn btn-outline-secondary fs-6 ml-5 btn-lg" style={{border:'1px solid rgb(23, 39, 186)',color:'rgb(23, 39, 186)x`'}}>
              Contact Us
            </a>
          </div>
          <div className="col-md-7">
            <img src={gif}
            alt="Illustration" className="img-fluid" style={{ width: "70%", marginLeft: "50px" }} />
          </div>
        </div>
        </div>
  )
}

export default Banner
