"use client"

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';  // Don't forget to import the navigation CSS

// Import required Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const SliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);  // Track active index for custom pagination

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);  // Update active slide index
  };

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        navigation={true}
        onSlideChange={handleSlideChange}  // Track slide change
        pagination={false}  // Disable default pagination
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
            <SwiperSlide>
                <div className="">
                <div className="rounded-xl bg-white p-6 shadow-xl">
                    <div className="qute ms-2"></div>
                    <div className="px-5">
                    <p className="lgParagraph">
                        Lorem ipsum dolor sit amet consectetur. Diam mi feugiat tristique neque ante diam sagittis eros. Nulla pretium egestas nisl est dolor faucibus tortor praesent. Ac ac a orci ornare at. Cras mus quis imperdiet turpis.
                    </p>
                    </div>
                    <div className="px-5 py-5">
                    <div className="quote-bottom"></div>
                    </div>
                    <div className="py-4 flex gap-5 items-end">
                    <img src="/images/slideimg.png" alt="" className="img"/>
                    <div className="py-7">
                        <h1 className="fs-21">Name here</h1>
                        <div className="flex gap-1 py-2">
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                <div className="rounded-xl bg-white p-6 shadow-xl">
                    <div className="qute ms-2"></div>
                    <div className="px-5">
                    <p className="lgParagraph">
                        Lorem ipsum dolor sit amet consectetur. Diam mi feugiat tristique neque ante diam sagittis eros. Nulla pretium egestas nisl est dolor faucibus tortor praesent. Ac ac a orci ornare at. Cras mus quis imperdiet turpis.
                    </p>
                    </div>
                    <div className="px-5 py-5">
                    <div className="quote-bottom"></div>
                    </div>
                    <div className="py-4 flex gap-5 items-end">
                    <img src="/images/slideimg.png" alt="" className="img"/>
                    <div className="py-7">
                        <h1 className="fs-21">Name here</h1>
                        <div className="flex gap-1 py-2">
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                <div className="rounded-xl bg-white p-6 shadow-xl">
                    <div className="qute ms-2"></div>
                    <div className="px-5">
                    <p className="lgParagraph">
                        Lorem ipsum dolor sit amet consectetur. Diam mi feugiat tristique neque ante diam sagittis eros. Nulla pretium egestas nisl est dolor faucibus tortor praesent. Ac ac a orci ornare at. Cras mus quis imperdiet turpis.
                    </p>
                    </div>
                    <div className="px-5 py-5">
                    <div className="quote-bottom"></div>
                    </div>
                    <div className="py-4 flex gap-5 items-end">
                    <img src="/images/slideimg.png" alt="" className="img"/>
                    <div className="py-7">
                        <h1 className="fs-21">Name here</h1>
                        <div className="flex gap-1 py-2">
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        <img src={"/icons/star.png"} className="smImage" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
        
      </Swiper>
      {/* Custom Pagination */}
      <div className="custom-pagination">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`pagination-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>

    </>
  );
};

export default SliderComponent;
