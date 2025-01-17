"use client"

import React, { useState } from 'react';

// Import Swiper React components dynamically
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import style from "../styles/slider.module.css"  // Custom styles from CSS module

const SliderSm = ({ blogSliderCardData }) => {
    const [activeIndex, setActiveIndex] = useState(0);  // Track active index for custom pagination
    
      const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);  // Update active slide index
      };
  return (
    <Swiper
        spaceBetween={40}
      pagination={false}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Pagination, Navigation]}
    onSlideChange={handleSlideChange}  // Track slide change
    className={`${style.mySwiper}`}
    >
      {
        blogSliderCardData.map((cardData, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <div className="relative">
                <img className="w-full h-40 object-cover object-end" src={cardData.img} alt="Home in Countryside" />
                <div className="w-12 h-12 rounded-full flex justify-center items-center bgGreen absolute bottom-10 right-4">
                  <img src="/icons/arrow.png" className='' alt="" style={{ width: "10px" }} />
                </div>
              </div>
              <div className="py-6">
                <h4 className="mt-2 lgParagraph white font-semibold">{cardData.title}</h4>
                <p className="paragraph white py-2">{cardData.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default SliderSm;
