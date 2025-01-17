import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="customTopBorder mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
             <div className="col-span-12 flex justify-center items-center py-3">
                <div className="flex items-end space-x-2">
                    <span className="text-white text-4xl font-bold heading3">Shameel</span>
                    <Image src="/icons/dott.png" width={10} height={10} alt="dott" className="mb-2" />
                </div>
             </div>   
             <div className="col-span-12 flex flex-col justify-center items-center py-3">
                <div className="flex justify-center flex-wrap items-end space-x-5">
                    <Link href={"/events"} className="text-white lgParagraph">Events</Link>
                    <Link href={"/Courses"} className="text-white lgParagraph">Courses</Link>
                    <Link href={"/blogs"} className="text-white lgParagraph">Blogs</Link>
                    <Link href={"/contact"} className="text-white lgParagraph">Contact Me</Link>
                </div>
                <div className="flex justify-center items-end flex-wrap space-x-5 py-2">
                    <Link href={"/about"} className="text-white lgParagraph">About Me</Link>
                    <Link href={"/my-work"} className="text-white lgParagraph">My Work</Link>
                    <Link href={"/services"} className="text-white lgParagraph">Services</Link>
                    <Link href={"/how-i-work"} className="text-white lgParagraph">How I Work</Link>
                </div>
                <div className="flex items-end space-x-5 py-2">
                    
                </div>
             </div>   
        </div>
    </footer>
  )
}

export default Footer
