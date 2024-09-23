import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Allproduct from "../Component/Allproduct";
function Home() {
  return (
    <>
      <section className="py-2">
        <div className="container  ">
          <div className="slide">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="object-fit-contain w-100 h-75"
                  src="https://img.lazcdn.com/us/domino/ce9e8cac-0b4d-497c-b52f-1ba22d6c52c6_NP-1976-688.png_2200x2200q80.png_.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-fit-contain w-100 h-75"
                  src="https://img.lazcdn.com/us/domino/ad097cb1-c695-4368-93d6-f86aa333d2c0_NP-1976-688.jpg_2200x2200q80.jpg_.webp"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="object-fit-contain w-100 h-75"
                  src="https://img.lazcdn.com/us/domino/591fb54192a6e0e151c106c5838ebf9f.jpg_2200x2200q80.jpg_.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-fit-contain w-100 h-75"
                  src="https://img.lazcdn.com/us/domino/256bfa20-5e47-4ad7-aea1-686a32d450ab_NP-1976-688.jpg_2200x2200q80.jpg_.webp"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <Allproduct name="beauty" />
      <Allproduct name="fragrances" />
      <Allproduct name="furniture" />
      <Allproduct name="groceries" />
      <Allproduct name="laptops" />
    </>
  );
}

export default Home;
