import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Service.css";

const Service = () => {
  const cardData = [
    { id: 1, title: "SEO" },
    { id: 2, title: "Social" },
    { id: 3, title: "PPC (Pay per Click)" },
    { id: 4, title: "YouTube" },
    { id: 5, title: "Content Marketing" },
    { id: 6, title: "Email Marketing" },
    { id: 7, title: "Affiliate Marketing" },
    { id: 8, title: "Analytics" }
  ];

  return (
    <section className="service-section">
      {/* Left half */}
      <div className="left-half">
        <h1 className="heading">Explore Our Service</h1>
        <p>
          Explore our Service and discover solutions to meet your unique needs.
        </p>
        <button className="appointment-button">
          Book Our Appointment
        </button>
      </div>

      {/* Right half */}
      <div className="right-half">
        <h1 className="heading">Digital Marketing</h1>
        <p>
          Keep your lawn in top shape without lifting a finger and boost the
          appearance of your property.
        </p>

        {/* Main Slider */}
        <Swiper 
          navigation={true} 
          modules={[Navigation]} 
          loop={true} 
          slidesPerView={4} 
          spaceBetween={20}
          className="main-slider"
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="card">
                <p>{card.title}</p>
                <span className="arrow">&rarr;</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
