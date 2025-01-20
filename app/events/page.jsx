import Image from 'next/image'
import React from 'react'
import { eventsCardData } from '../data'
import CardsComponent from '@/components/CardsComponent'

const page = () => {

  return (
    <>
      <div className="container mx-auto px-7 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-full">
            <h1 className="heading2">Conferences & Speaking Engagements</h1>
            <p className="lgParagraph text-center text-white">Welcome to the Conferences section of my portfolio!</p>
          </div>
        </div>
      </div>
      <div className="blured mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-0">
          <div className="w-full relative">
            <Image src={"/images/heroimg.png"} width={400} height={150} alt="SHameel" className="absolute hidden md:flex -top-28 left-20" />
          </div>
          <div className="w-full md:mt-20">
            <div className="w-full">
              <div className="qute ms-2"></div>
              <div className="px-5">
                <p className="subtitle">
                  Lorem ipsum dolor sit amet consectetur. Diam mi feugiat tristique neque ante diam sagittis eros. Nulla pretium egestas nisl est dolor faucibus tortor praesent. Ac ac a orci ornare at. Cras mus quis imperdiet turpis.
                </p>
              </div>
              <div className="px-5 py-5">
                <div className="quote-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <div className="container mx-auto px-7 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-full">
              <h1 className="heading2 mb-7 md:mb-0">Upcoming Events</h1>
            </div>
          </div>
        </div>

        <section className="upcooming mt-14 flex flex-col justify-center">
        <div className="container mx-auto px-7 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full text-center">
              <p className="heading3 white">Career Builders</p>
              <Image src={"/images/Conference.png"} width={404} height={115} alt="Conference" className='md:ms-28' />
              <p className="heading1 ">Event 2024</p>
              <div className="text-center flex justify-center items-center py-4 ">
               <Image src={"/images/lineNew.png"} width={290} height={115} alt="Conference" className='Conference' />
              </div>

              <div className="flex gap-3 justify-center">
                <button className="bgGreen text-white btnHeight">Book Reservation</button>
                <button className="text-white btnSm outline">Learn More</button>
              </div>

              <div className="flex flex-wrap md:flex-nowrap gap-3 justify-center pt-12">
                <div className="flex gap-2 bg-white p-5 rounded-xl h-306">
                  <div className="">
                    <Image src={"/images/event.png"} width={30} height={30} alt="Events" />
                  </div>
                  <div className="text-start">
                    <p className="subtitle black">When is the Event:</p>
                    <p>02 - December - 2024</p>
                    <p>09:00 AM</p>
                  </div>
                </div>
                <div className="flex gap-2 bg-white p-5 rounded-xl h-306">
                  <div className="">
                    <Image src={"/images/location.png"} width={30} height={30} alt="Location" />
                  </div>
                  <div className="text-start">
                    <p className="subtitle black">Where is the Event:</p>
                    <p>123 Tech Avenue, Innovation Hall, Silicon City, USA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full hidden text-end md:flex justify-end">
              <Image src={"/images/look.png"} width={507} height={584} alt="" />
            </div>
          </div>
        </div>
        </section>
      </section>

      <section className="py-8">
      <div className="container mx-auto px-7 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CardsComponent cardsData={eventsCardData} />
        </div>
      </div>
      </section>


      <section className="blurBg">
        <div className="container mx-auto px-7 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-8 p-4">
                <h1 className="title text-white">Book Me as a Speaker</h1>
                <p className="lgParagraph text-white mt-4">Looking to elevate your event with insightful and engaging content? I’d love to bring my expertise to your stage. Let’s work together to create an impactful session for your audience!</p>
                <button className="bgGreen px-6 py-2 rounded-md text-white font-semiboldn mt-5">Contact Me</button>
              </div>
              <div className="col-span-12 md:col-span-4 p-4 flex justify-end">
                  <div className="work speaker">

                  </div>
                <div className="workm">

                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page;

