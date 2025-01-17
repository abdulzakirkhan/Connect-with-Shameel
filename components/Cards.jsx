import { services } from '@/app/data'
import Image from 'next/image'
import React from 'react' 
const Cards = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-3">
            {services.map((card,index) => (
              <div className="py-3 bg-white border-top-right-radius" key={index}>
                <div className="flex flex-col justify-center items-center">
                  <div className={`w-90 p-4  rounded-full
                  ${index === 0 ? "bgGreen" : ""}
                  ${index === 1 ? "bgPink" : ""}
                  ${index === 2 ? "bgPurple" : ""}
                  ${index === 3 ? "bgBrown" : ""}
                    `}>
                    <Image src={`${card.img}`} width={50} height={50} alt="Services" />
                  </div>
                    <h1 className="lgParagraph f-bold mt-3">{card.title}</h1>
                </div>
                <div className="py-12">
                  <div className={`custCardBg
                    ${index === 0 ? "lightGreen darkGreen" : ""}
                    ${index === 1 ? "lightPink darkPink" : ""}
                    ${index === 2 ? "lightPurple darkPurple" : ""}
                    ${index === 3 ? "lightBrown darkBrown" : ""}

                    `}>
                    <p className="lgParagraph text-center px-4 text-white">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  )
}

export default Cards
