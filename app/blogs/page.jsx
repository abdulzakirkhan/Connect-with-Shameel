import Featured from '@/components/Featured'
import Image from 'next/image'
import React from 'react'
import { blogsDataCardData, blogSlider2CardData, blogSliderCardData } from '../data'
import SliderSm from '@/components/SliderSm'

const page = () => {
  return (
    <>
        <section className="">
          <div className="container mx-auto px-7 pt-24">
            <div className="grid grid-cols-1">
              <div className="w-full flex flex-col justify-center items-center" >
                <h1 className="heading2">Blogs</h1>
                <p className="para">Discover insights, tips, and inspiration on technology, career growth, and content creation. Explore featured highlights or catch the latest updates!</p>
              </div>
              <div className="w-full">
                <h1 className="heading2 green">Featured </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
              <div className="md:col-span-2 w-full">
                <div className="relative">

                  <img className="w-full object-cover object-end" src={'/blogs/card1.svg'} alt="Home in Countryside" />
                  <div className="w-12 h-12 rounded-full flex justify-center items-center bgGreen absolute bottom-10 right-4">
                    <Image src={"/icons/arrow.png"} width={12} height={12} alt="Icon" />
                  </div>
                </div>
                  <div className="py-6 mt-5">
                    <h4 className="mt-4 heading4 white font-semibold">Lorem ipsum dolor sit amet consectetur.</h4>
                      <p className="lgParagraph white py-2 mt-5">Lorem ipsum dolor sit amet consectetur. Molestie lorem iaculis elit vestibulum sem. Cras sit massa est sit. Magna rhoncus ac feugiat mattis et cursus. Pellentesque pharetra aliquam nulla turpis habitasse egestas facilisis et tincidunt...</p>
                  </div>
              </div>
              <div className="md:col-span-3 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* <div className="w-full">
                    <div className="relative">

                      <img className="w-full h-40 object-cover object-end" src={'/blogs/card1.svg'} alt="Home in Countryside" />
                      <div className="w-12 h-12 rounded-full flex justify-center items-center bgGreen absolute bottom-10 right-4">
                        <Image src={"/icons/arrow.png"} width={12} height={12} alt="Icon" />
                      </div>
                    </div>
                      <div className="py-6">
                        <h4 className="mt-2 lgParagraph white font-semibold">Lorem ipsum dolor sit amet consectetur.</h4>
                          <p className="paragraph white py-2">Lorem ipsum dolor sit amet consectetur. Molestie lorem iaculis elit vestibulum sem. Cras sit massa est sit. Magna rhoncus ac feugiat mattis et cursus. Pellentesque pharetra aliquam nulla turpis habitasse egestas facilisis et tincidunt...</p>
                      </div>
                  </div> */}
                  <Featured cardsData={blogsDataCardData} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1">
              <div className="w-full pb-12 flex justify-between align-middle">
                  <h1 className="green heading2">Recent Blogs</h1>
                  <div className="flex gap-4">
                    <Image src={"/blogs/leftArr.svg"} width={16} height={20} alt='Arrow' />
                    <Image src={"/blogs/rightArr.svg"} width={33} height={20} alt='Arrow' />
                  </div>
                </div>
            </div>
            <div className="">

              <SliderSm blogSliderCardData={blogSliderCardData} />
            </div>




            <div className="grid grid-cols-1 md:grid-cols-1">
              <div className="w-full pb-12 flex justify-between align-middle">
                  <h1 className="green heading2">Trending Now</h1>
                  <div className="flex gap-4">
                    <Image src={"/blogs/leftArr.svg"} width={16} height={20} alt='Arrow' />
                    <Image src={"/blogs/rightArr.svg"} width={33} height={20} alt='Arrow' />
                  </div>
                </div>
            </div>
            <div className="">

              <SliderSm blogSliderCardData={blogSlider2CardData} />
            </div>
          </div>
        </section>
    </>
  )
}

export default page
