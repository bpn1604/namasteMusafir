import React, { useState } from "react";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Home() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  return (
    <div>
      <div className="container-fluid bg-secondary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Unlock Your Next Adventure With Us
              </h1>
              <p className="fs-4 text-pink mb-4 animated slideInDown ">
                Experince the world in a new way with our premium travel
                services. At Namaste Musafir ,we believe that every journey
                should be an adventure , and we are here to make sure that you
                travel safe
              </p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Eg: Thailand"
                />
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/traveller.jpg"
                  alt=""
                  style={{ objectFit: "cover", borderRadius: 10 }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-secondary pe-3">
                About Us
              </h6>
              <h1 className="mb-4 color-grey">
                Hey <span className="text-secondary">Musafir !</span>
              </h1>
              <p className="mb-4">
                In the world were bussinesses are running to help the travelers
                to see the places, we at Namaste Musafir are trying to help the
                travelers to meet the places.
              </p>
              <p className="mb-4"></p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-secondary me-2" />
                    First Class Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-secondary me-2" />
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-secondary me-2" />
                    All Types of Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-secondary me-2" />
                    Latest Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-secondary me-2" />
                    150 Premium City Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-secondary me-2" />
                    24/7 Service
                  </p>
                </div>
              </div>
              <a className="btn btn-secondary py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-secondary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-secondary mb-4" />
                  <h5>Holiday Packages</h5>
                  <p>
                    We offer a wide variety of holiday packages to suit your
                    needs.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-hotel text-secondary mb-4" />
                  <h5>Hotel Reservation</h5>
                  <p>
                    Find Your Perfect Stay – Comfort, Luxury, and Unforgettable
                    Experiences Await! 🏨✨
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user text-secondary mb-4" />
                  <h5>Travel Guides</h5>
                  <p>
                    Explore More, Worry Less – Your Adventure Starts Here! 🌍✨
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-taxi text-secondary mb-4" />

                  <h5>Cab facility</h5>
                  <p>Fast, Safe, and Reliable Rides – Wherever You Go! 🚖✨</p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-secondary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-hotel text-secondary mb-4" />
                <h5>Hotel Reservation</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user text-secondary mb-4" />
                <h5>Travel Guides</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cog text-secondary mb-4" />
                <h5>Event Management</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Destination Start */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-secondary px-3">
              Destination
            </h6>
            <h1 className="mb-5">Popular Destination</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div
                  className="col-lg-12 col-md-12 wow zoomIn"
                  data-wow-delay="0.1s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-1.jpg"
                      alt=""
                      width={"100%"}
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      15% OFF
                    </div>
                    <div className="bg-white text-secondary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Shimla Manali
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.3s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-2.jpg"
                      alt=""
                      style={{ height: "300px" }}
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      15% OFF
                    </div>
                    <div className="bg-white text-secondary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Kashmir
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.5s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-3.jpg"
                      alt=""
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      15% OFF
                    </div>
                    <div className="bg-white text-secondary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Goa
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: 350 }}
            >
              <a
                className="position-relative d-block h-100 overflow-hidden"
                href=""
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/destination-4.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  15% OFF
                </div>
                <div className="bg-white text-secondary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Kerla
                </div>
              </a>
            </div>
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: 350, width: "33%" }}
            >
              <a
                className="position-relative d-block h-100 overflow-hidden"
                href=""
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/destination-5.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  15% OFF
                </div>
                <div className="bg-white text-secondary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Uttarakhand
                </div>
              </a>
            </div>
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: 350, width: "33%" }}
            >
              <a
                className="position-relative d-block h-100 overflow-hidden"
                href=""
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/Andaman.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  15% OFF
                </div>
                <div className="bg-white text-secondary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Andman
                </div>
              </a>
            </div>
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: 350, width: "33%" }}
            >
              <a
                className="position-relative d-block h-100 overflow-hidden"
                href=""
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/northeast.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  15% OFF
                </div>
                <div className="bg-white text-secondary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  North-East
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Destination Start */}
      {/* Package Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-secondary px-3">
              Packages
            </h6>
            <h1 className="mb-5">Awesome Packages</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="package-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/destination-1.jpg"
                    alt=""
                    style={{ height: "275px" }}
                  />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-secondary me-2" />
                    Manali
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-secondary me-2" />
                    4N / 5 D
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
                    "Escape to Manali, where snow-capped peaks, lush valleys,
                    and adventure-filled experiences await." ❄️🏔️
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
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="package-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/destination-2.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-secondary me-2" />
                    Kashmir
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-secondary me-2" />
                    5N / 6D
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
                    "Discover the paradise of Kashmir, where snow-capped peaks
                    and serene lakes create an unforgettable escape."
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
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="package-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/package-3.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-secondary me-2" />
                    Goa
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-secondary me-2" />
                    3N / 4D
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
                    "Experience the vibrant beaches, thrilling nightlife, and
                    rich heritage of Goa for the ultimate tropical getaway."
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
              {/* Left Section: Booking Information */}
              <div className="col-md-6 text-white">
                <h6 className="text-white text-uppercase">Booking</h6>
                <h1 className="text-white mb-4">Plan Your Perfect Trip</h1>
                <p className="mb-4">
                  Embark on a journey of unforgettable experiences. Whether
                  you're looking for a relaxing retreat, an adventure-filled
                  escape, or a cultural expedition, we make your travel seamless
                  and hassle-free.
                </p>
                <p className="mb-4">
                  Book your tour in just a few clicks! Select your destination,
                  pick a date that suits you, and let us handle the rest. Your
                  dream vacation is now within reach.
                </p>
                <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
                  Learn More
                </a>
              </div>

              {/* Right Section: Booking Form */}
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
                          placeholder="Select Date & Time"
                          data-target="#date3"
                          data-toggle="datetimepicker"
                        />
                        <label htmlFor="datetime">Select Date & Time</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select bg-transparent"
                          id="select1"
                        >
                          <option value={1}>Goa - Beach Paradise</option>
                          <option value={2}>Manali - Snowy Retreat</option>
                          <option value={3}>Kashmir - Heavenly Escape</option>
                        </select>
                        <label htmlFor="select1">Choose Your Destination</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control bg-transparent"
                          placeholder="Any special requests?"
                          id="message"
                          style={{ height: 100 }}
                        />
                        <label htmlFor="message">
                          Special Requests (Optional)
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-outline-light w-100 py-3"
                        type="submit"
                      >
                        Confirm Booking
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
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="position-relative border border-secondary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-secondary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-globe fa-3x text-white" />
                </div>
                <h5 className="mt-4">Choose Your Destination</h5>
                <hr className="w-25 mx-auto bg-secondary mb-1" />
                <hr className="w-50 mx-auto bg-secondary mt-0" />
                <p className="mb-0">
                  Explore breathtaking destinations worldwide. Whether it's the
                  beaches of Goa, the mountains of Manali, or the serene
                  backwaters of Kerala, pick the perfect getaway for your next
                  adventure.
                </p>
              </div>
            </div>

            {/* Step 2: Pay Online */}
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="position-relative border border-secondary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-secondary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-credit-card fa-3x text-white" />
                </div>
                <h5 className="mt-4">Secure Online Payment</h5>
                <hr className="w-25 mx-auto bg-secondary mb-1" />
                <hr className="w-50 mx-auto bg-secondary mt-0" />
                <p className="mb-0">
                  Book your trip effortlessly with our secure online payment
                  options. Choose from credit/debit cards, UPI, net banking, or
                  digital wallets for a hassle-free transaction.
                </p>
              </div>
            </div>

            {/* Step 3: Fly Today */}
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="position-relative border border-secondary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-secondary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-plane fa-3x text-white" />
                </div>
                <h5 className="mt-4">Pack Your Bags & Fly</h5>
                <hr className="w-25 mx-auto bg-secondary mb-1" />
                <hr className="w-50 mx-auto bg-secondary mt-0" />
                <p className="mb-0">
                  Your adventure begins! Receive instant booking confirmation
                  and travel details. Get ready to explore, relax <br /> and
                  create unforgettable memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Process Start */}
      {/* Team Start */}
      {/* <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-secondary px-3">
            Travel Guide
          </h6>
          <h1 className="mb-5">Meet Our Guide</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-1.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-2.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-3.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-4.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      {/* Team End */}
      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-secondary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <TestimonialCarousel />
          <div className="owl-carousel testimonial-carousel position-relative">
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-1.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-3.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-4.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}
