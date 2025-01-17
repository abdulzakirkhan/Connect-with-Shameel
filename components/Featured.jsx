import Image from 'next/image';
import React from 'react'

const Featured = ({cardsData}) => {
    console.log(cardsData)
  return (
    <>
    {cardsData.map((card,index) => (
        <div className="w-full" key={index}>
            <div className="relative">
                <img className="w-full h-40 object-cover object-end" src={card.img} alt="Home in Countryside" />
                <div className="w-12 h-12 rounded-full flex justify-center items-center bgGreen absolute bottom-10 right-4">
                <Image src={"/icons/arrow.png"} width={12} height={12} alt="Icon" />
                </div>
            </div>
            <div className="py-6">
                <h4 className="mt-2 lgParagraph white font-semibold">{card.title}</h4>
                <p className="paragraph white py-2">{card.description}</p>
            </div>
        </div>
    ))}
    </>
  )
}

export default Featured;
