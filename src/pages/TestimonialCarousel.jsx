import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const testimonials = [
  {
    name: "Pawan Kumar",
    image: "/assets/img/shyam.jpg",
    review: "Amazing service! I had a fantastic experience traveling with Namaste Musafir.",
  },
  {
    name: "Payal Sharma",
    image: "/assets/img/images.jpeg",
    review: "A wonderful experience, great support, and excellent packages!",
  },
  {
    name: "Sunita Singh",
    image: "assets/img/traveller.jpg",
    review: "Highly recommended! Hassle-free booking and well-planned trips.",
  },
  {
    name: "Reddy hari",
    image: "assets/img/reddy.jpeg",
    review: "Great service! The team ensured I had the best experience.",
  }
];

function TestimonialCarousel() {
  return (
    <div className="container my-5">
      <h2 className="text-center text-secondary mb-4">🌟 Customer Testimonials 🌟</h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonial-carousel"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card p-4 shadow-lg rounded bg-white text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-img rounded-circle mb-3"
                style={{ width: "100px", height: "100px" }}
              />
              <h5 className="text-dark">{testimonial.name}</h5>
              <p className="text-muted">"{testimonial.review}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialCarousel;
