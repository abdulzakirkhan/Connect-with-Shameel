import Image from 'next/image'
import React from 'react'

const CardsComponent = ({cardsData}) => {
  return (
    <>
        {
            cardsData.map((card,index) => (
                <div className="w-full" key={index}>
                    <div className="flex">
                        <div className="bgDynamic border-cust w-full" style={{backgroundImage:`url(${card.img})`}}>
                        <div className="p-12 bg-dark relative">
                            <h3 className="heading3 white">{card.title}</h3>
                            <p className="ptext">{card.description}</p>
                            <div className="w-12 h-12 rounded-full flex justify-center items-center bgGreen absolute top-half right-16">
                                <Image src={"/icons/arrow.png"} width={12} height={12} alt="Icon" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default CardsComponent
