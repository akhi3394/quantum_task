import React from 'react'
import gif from '/src/assets/images.png'

const Features = () => {
  return (
    <><h2 className="display-6 text-center mt-5">Features</h2><div className="row my-5">
          <div className="col-md-6">
              <img src={gif} alt="Feature" className="img-fluid" style={{ width: "60%",marginLeft:'70px'}} />
          </div>
          <div className="col-md-6 d-flex align-items-center">
              <div className="text-center text-md-start">
                  <p className="lead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida velit quis dolor tristique vestibulum.
                  </p>
                  <p>
                      Ut quis purus leo. Nulla facilisi. Pellentesque euismod odio eu quam dapibus, ac ultrices nisl mattis.
                  </p>
              </div>
          </div>
      </div><div className="row my-5">
              <div className="col-md-6 d-flex align-items-center">
                  <div className="text-center text-md-start">
                      <p className="lead">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida velit quis dolor tristique vestibulum.
                      </p>
                      <p>
                          Ut quis purus leo. Nulla facilisi. Pellentesque euismod odio eu quam dapibus, ac ultrices nisl mattis.
                      </p>
                  </div>
              </div>
              <div className="col-md-6">
                  <img src={gif} alt="Feature" className="img-fluid" style={{  width: "60%",marginLeft:'70px' }} />
              </div>
          </div><div className="row my-5">
              <div className="col-md-6 order-md-2 d-flex align-items-center">
                  <div className="text-center text-md-start">
                      <p className="lead">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida velit quis dolor tristique vestibulum.
                      </p>
                      <p>
                          Ut quis purus leo. Nulla facilisi. Pellentesque euismod odio eu quam dapibus, ac ultrices nisl mattis.
                      </p>
                  </div>
              </div>
              <div className="col-md-6 order-md-1">
                  <img src={gif} alt="Feature" className="img-fluid" style={{ width: "60%",marginLeft:'70px' }} />
              </div>
          </div></>
  )
}

export default Features
