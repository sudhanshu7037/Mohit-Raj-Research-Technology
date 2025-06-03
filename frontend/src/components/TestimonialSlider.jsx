import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Lizabeth G. Mack",
    role: "Marketing Lead",
    image: "https://advisorhtml.websitelayout.net/img/avatar/avatar-05.jpg",
    quote:
      "Business consulting has really helped our business. Definitely worth the investment. Business consulting has made a huge difference! It has saved me so much time.",
  },
  {
    name: "John Doe",
    role: "Product Manager",
    image: "/testimonial2.jpg",
    quote:
      "They helped us achieve success by providing guidance, expertise, and support. Highly recommend them to anyone looking to grow their business!",
  },
  {
    name: "Sarah Lee",
    role: "CEO, StartupX",
    image: "/testimonial3.jpg",
    quote:
      "The team is extremely professional and results-driven. Our experience working with them was amazing and fruitful.",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-[#f3f8fc] py-16 px-4 md:px-20 text-center">
      <p className="text-yellow-500 uppercase font-semibold text-sm tracking-wide">
        ● Testimonials.
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-10">
        Reviews of Our Clients
      </h2>

      <Swiper
  modules={[Pagination, Autoplay]}
  slidesPerView={1}
  spaceBetween={20}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 1000, // 👈 Change this value to control the speed
    disableOnInteraction: false,
  }}
  loop={true}
  className="max-w-3xl mx-auto"
>

        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 p-4 rounded-full">
                <FaQuoteLeft className="text-white text-xl" />
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              "{t.quote}"
            </p>
            <div className="mt-6">
              <p className="text-yellow-500 font-semibold text-lg">{t.name}</p>
              <p className="text-gray-500 text-sm">– {t.role}</p>
            </div>
            <div className="flex justify-center mt-6">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full border-2 border-yellow-400"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
