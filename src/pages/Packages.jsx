import React from 'react'

function Packages() {
  return (
    <div>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            Packages
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Packages
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
      {/* Package Start */}
      <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Packages
          </h6>
          <h1 className="mb-5">Awesome Packages</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/destination-1.jpg" alt=""  style={{height:"275px"}}/>
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-secondary me-2" />
                  Manali
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-secondary me-2" />4N / 5 D
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-secondary me-2" />1 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">&#8377;9999.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                </div>
                <p className="mb-3">
                "Escape to Manali, where snow-capped peaks, lush valleys, and adventure-filled experiences await." ❄️🏔️
        </p>

                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-secondary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-secondary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/destination-2.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-secondary me-2" />
                  Kashmir
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-secondary me-2" />5N / 6D 
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-secondary me-2" />1 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">&#8377;10999.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                </div>
                <p>
                "Discover the paradise of Kashmir, where snow-capped peaks and serene lakes create an unforgettable escape."
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-secondary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-secondary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-3.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-secondary me-2" />
                  Goa
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-secondary me-2" />3N / 4D 
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-secondary me-2" />1 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">&#8377;7999.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                  <small className="fa fa-star text-secondary" />
                </div>
                <p>
                "Experience the vibrant beaches, thrilling nightlife, and rich heritage of Goa for the ultimate tropical getaway."
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-secondary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-secondary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Package End */}
    {/* Booking Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Booking</h6>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="mb-4">
            Embark on a journey of unforgettable experiences. Whether you're looking for a relaxing retreat, an adventure-filled escape, or a cultural expedition, we make your travel seamless and hassle-free.
          </p>
          <p className="mb-4">
            Book your tour in just a few clicks! Select your destination, pick a date that suits you, and let us handle the rest. Your dream vacation is now within reach.
          </p>
          <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
            Learn More
          </a>
            </div>
            <div className="col-md-6">
              <h1 className="text-white mb-4">Book A Tour</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-transparent"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      id="date3"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control bg-transparent datetimepicker-input"
                        id="datetime"
                        placeholder="Date & Time"
                        data-target="#date3"
                        data-toggle="datetimepicker"
                      />
                      <label htmlFor="datetime">Date &amp; Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-transparent"
                        id="select1"
                      >
                        <option value={1}>Destination 1</option>
                        <option value={2}>Destination 2</option>
                        <option value={3}>Destination 3</option>
                      </select>
                      <label htmlFor="select1">Destination</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-transparent"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: 100 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-outline-light w-100 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Booking Start */}
    {/* Process Start */}
    <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-secondary px-3">
        Process
      </h6>
      <h1 className="mb-5">3 Easy Steps to Your Dream Vacation</h1>
    </div>
    <div className="row gy-5 gx-4 justify-content-center">
      
      {/* Step 1: Choose A Destination */}
      <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="position-relative border border-secondary pt-5 pb-4 px-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-secondary rounded-circle position-absolute top-0 start-50 translate-middle shadow" 
               style={{ width: 100, height: 100 }}>
            <i className="fa fa-globe fa-3x text-white" />
          </div>
          <h5 className="mt-4">Choose Your Destination</h5>
          <hr className="w-25 mx-auto bg-secondary mb-1" />
          <hr className="w-50 mx-auto bg-secondary mt-0" />
          <p className="mb-0">
            Explore breathtaking destinations worldwide. Whether it's the beaches of Goa, the mountains of Manali, or the serene backwaters of Kerala, pick the perfect getaway for your next adventure.
          </p>
        </div>
      </div>
      
      {/* Step 2: Pay Online */}
      <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="position-relative border border-secondary pt-5 pb-4 px-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-secondary rounded-circle position-absolute top-0 start-50 translate-middle shadow" 
               style={{ width: 100, height: 100 }}>
            <i className="fa fa-credit-card fa-3x text-white" />
          </div>
          <h5 className="mt-4">Secure Online Payment</h5>
          <hr className="w-25 mx-auto bg-secondary mb-1" />
          <hr className="w-50 mx-auto bg-secondary mt-0" />
          <p className="mb-0">
            Book your trip effortlessly with our secure online payment options. Choose from credit/debit cards, UPI, net banking, or digital wallets for a hassle-free transaction.
          </p>
        </div>
      </div>
      
      {/* Step 3: Fly Today */}
      <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
        <div className="position-relative border border-secondary pt-5 pb-4 px-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-secondary rounded-circle position-absolute top-0 start-50 translate-middle shadow" 
               style={{ width: 100, height: 100 }}>
            <i className="fa fa-plane fa-3x text-white" />
          </div>
          <h5 className="mt-4">Pack Your Bags & Fly</h5>
          <hr className="w-25 mx-auto bg-secondary mb-1" />
          <hr className="w-50 mx-auto bg-secondary mt-0" />
          <p className="mb-0">
            Your adventure begins! Receive instant booking confirmation and travel details. Get ready to explore, relax <br /> and create unforgettable memories.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>
    {/* Process Start */}
    </div>
  )
}

export default Packages