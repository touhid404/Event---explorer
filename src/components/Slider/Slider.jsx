import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import event1 from "../../assets/Slider1.jpg";
import event2 from "../../assets/Slider2.jpg";
import event3 from "../../assets/slider3.jpg";

const events = [
  {
    title: "Curated High-Impact Events",
    description:
      "Get access to exclusive tech events that feature top industry minds and cutting-edge innovations.",
    thumbnail: event1,
  },
  {
    title: "Hands-On Learning Opportunities",
    description:
      "Engage in interactive workshops and design-thinking sessions that offer practical, real-world skills.",
    thumbnail: event2,
  },
  {
    title: "Diverse Content with Visual Appeal",
    description:
      "Easily explore events with rich visuals and clear descriptions tailored to your interests.",
    thumbnail: event3,
  },
];

const Slider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-[#1c1c1e] py-10 flex justify-center relative">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white px-4 py-2 rounded-full "
      >
        <FaArrowAltCircleLeft size={25} />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white px-4 py-2 rounded-full "
      >
        <FaArrowAltCircleRight size={25} />
        
      </button>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-6xl"
      >
        {events.map((event, index) => (
          <SwiperSlide
            key={index}
            className="relative w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={event.thumbnail}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-xl"
            />
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
              <h3 className="text-2xl font-bold">{event.title}</h3>
              <p className="text-sm line-clamp-3">{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
