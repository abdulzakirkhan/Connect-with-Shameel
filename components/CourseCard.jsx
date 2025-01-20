import Image from 'next/image';
import React from 'react'

const CourseCard = ({cardsData}) => {
    console.log(cardsData)
  return (
    <>
      {cardsData.map((card,index) => (
        <div className="bg-white cHeight" key={index}>
        <img className="h-48 w-full object-cover object-end" src={card.img} alt="Home in Countryside" />
        <div className="px-4 py-6">
          <div className="flex items-baseline gap-2 pb-2">
            <span className="inline-block bg-[#cecece] rounded-lg py-2 px-4">{card.category}</span>
            <span className="inline-block bg-[#cecece] rounded-lg py-2 px-4">New</span>
          </div>
          <h4 className="md:mt-2 font-semibold text-lg leading-tight">{card.title}</h4>
          <div className="mt-3 md:mt-8 flex justify-between items-center">  
            <div className="flex gap-3">
              <Image src={"/courses/lessons.svg"} width={18} height={18} alt="Lessons" />
              <span className="fs-12">{card.lessons}</span>
            </div>
            <div className="flex gap-3">
              <Image src={"/courses/time.svg"} width={18} height={18} alt="Lessons" />
              <span className="fs-12">{card.time}</span>
            </div>
            <div className="flex gap-3">
              <span className="fs-20">$ {card.price}</span>
            </div>
          </div>
        </div>
    </div>
      ))}
    </>
  )
}

export default CourseCard;
