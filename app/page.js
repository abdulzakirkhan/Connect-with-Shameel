import Image from "next/image";
import { reviews, services } from "./data";
import Cards from "@/components/Cards";
import Link from "next/link";
import SliderComponent from "@/components/SliderComponent";

export default function Home() {
  const renderStars = (stars) => {
    const starElements = [];
    for (let i = 1; i <= 5; i++) {
      starElements.push(
        <Image
          key={i}
          src={i <= stars ? "/icons/star.png" : "/icons/star-empty.png"} // Replace with your correct paths for the star images
          alt="star"
          width={20}
          height={20}
        />
      );
    }
    return starElements;
  };
  return (
    <>
      <div className="container mx-auto px-7 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="w-full p-4">
            <h5> Hello, I am</h5>
            <p className="flex items-end align-bottom gap-2">
              <Image src={"/images/Shameel.png"} width={200} height={100} alt="Shameel" />
            <span>
              <Image src={"/icons/dott.png"} width={14} height={14} alt="Shameel" />
            </span>
            </p>
            <p className="lgParagraph text-white pe-14 mt-4">Lorem ipsum dolor sit amet consectetur. Non bibendum nunc sit dignissim sollicitudin tortor cras cras. Libero interdum convallis libero lacinia amet quisque.</p>
            <button type="button" className="text-white mt-10 rounded px-5 py-3 bgGreen">Let’s Collaborate</button>
          </div>
          <div className="w-full flex justify-center p-4 customShadow">
            <Image src={"/images/shameerimg.png"} width={400} height={300} alt="Shameel" className="" />
          </div>
        </div>
      </div>
      <div className="w-full m-cust">
        <div className="container mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {reviews.map((review,index) =>(

            <div className="flex flex-col gap-3 justify-center" key={index}>
              <Image src={`/${review.title}`} width={160} height={48} alt={review.count} />
              <div className="flex gap-2 align-middle px-3">
                {renderStars(review.stars)}
              </div>
              <span className="revText px-5">{review.count} Reviews</span>
            </div>
            ))}
          </div>
        </div>
          
      </div>

      <section className="py-5 mt-5">
        <div className="container mx-auto px-7 mt-5">
          <div className="flex flex-col justify-center">
            <h1 className="heading2">Services I’m Offering</h1>
            <p className="lgParagraph text-center text-white py-2 ps-2 mt-2">Explore the Range of Services to Bring Your Ideas to Life.</p>
          </div>


          <Cards />
          <Cards />

        </div>
      </section>

      <section className="py-12 mt-12">
        <div className="container mx-auto px-7 mt-5">
          <div className="grid grid-cols-12 gap-4 justify-center items-center">
            <div className="col-span-12 md:col-span-4">
              <div className="beforeShadow">
                <Image src={"/images/img11.png"} width={200} height={130} alt="Shameel" className="rounded-full" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div>
                <h1 className="text-center heading2">About Me</h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur. Ultrices non augue lorem pulvinar. Volutpat ornare tincidunt aliquet fermentum. Nisl congue dignissim enim vitae ultrices. Consequat erat eget ipsum in volutpat est vitae nullam vulputate. Lorem ipsum dolor sit amet consectetur. Ultrices non augue lorem pulvinar. Volutpat ornare tincidunt aliquet fermentum. Nisl congue dignissim enim vitae ultrices. Consequat erat eget ipsum in volutpat est vitae nullam vulputate.Lorem ipsum dolor sit amet consectetur. Ultrices non augue lorem pulvinar. Volutpat ornare tincidunt aliquet fermentum. Nisl congue dignissim enim vitae ultrices. Consequat erat eget ipsum in volutpat est vitae nullam vulputate. </p>
                <button className="text-white bgGreen px-4 py-2 rounded-md mt-7">Contact Me</button>
              </div>
            </div>
          </div>

        </div>

        <div className="bgGreen">
          <div className="container mx-auto px-7 mt-5">
            <div className="grid grid-cols-12 gap-4 justify-center items-center">
              <div className="col-span-12 md:col-span-3">
                <div className="flex justify-between items-center py-6">
                  <div>
                    <span className="text-white lgParagraph px-3">Clients</span>
                    <h3 className="white heading3">1000+</h3>
                  </div>
                  <Image src={"/images/whiteLine.png"} width={2} height={10} alt="Line" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="flex justify-between items-center py-6">
                  <div>
                    <span className="text-white lgParagraph px-3">Years of Experience</span>
                    <h3 className="white heading3 text-center">10+ Years</h3>
                  </div>
                  <Image src={"/images/whiteLine.png"} width={2} height={10} alt="Line" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="flex justify-between items-center py-6">
                  <div>
                    <span className="text-white lgParagraph px-3">Completed Projects</span>
                    <h3 className="white heading3 text-center">2120+</h3>
                  </div>
                  <Image src={"/images/whiteLine.png"} width={2} height={10} alt="Line" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="flex justify-between items-center py-6">
                  <div>
                    <span className="text-white lgParagraph px-3">Customer Satisfaction</span>
                    <h3 className="white heading3 text-center">100%</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Explore mY work */}
      <section>
      <div className="container mx-auto px-7 mt-5">
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-12 flex justify-center items-end">
            <div className="w-1/2">
              <h1 className="heading2">Explorer My Work</h1>
              <p className="font-semibold white text-center">Browse through a curated selection of my projects, showcasing the expertise and solutions I've delivered across various industries.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="cols-12 flex justify-end">
            <Link href={"/"} className="text-white underline">See All</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex">
              <div className="bg border-cust w-full">
                <div className="p-12 bg-dark relative">
                  <h3 className="heading3 white">Title Here</h3>
                  <p className="ptext">Lorem ipsum dolor sit amet consectetur. Gravida dis tempor pharetra rhoncus arcu in lorem nisl.</p>
                  <div className="w-12 h-12 rounded-full flex justify-center items-center bgGreen absolute top-half right-16">
                    <Image src="/icons/arrow.png" width={12} height={12} alt="Icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="bg border-cust w-full">
                <div className="p-12 bg-dark relative">
                  <h3 className="heading3 white">Title Here</h3>
                  <p className="ptext">Lorem ipsum dolor sit amet consectetur. Gravida dis tempor pharetra rhoncus arcu in lorem nisl.</p>
                  <div className="w-12 h-12 rounded-full flex justify-center items-center bgGreen absolute top-half right-16">
                    <Image src="/icons/arrow.png" width={12} height={12} alt="Icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="bg border-cust w-full">
                <div className="p-12 bg-dark relative">
                  <h3 className="heading3 white">Title Here</h3>
                  <p className="ptext">Lorem ipsum dolor sit amet consectetur. Gravida dis tempor pharetra rhoncus arcu in lorem nisl.</p>
                  <div className="w-12 h-12 rounded-full flex justify-center items-center bgGreen absolute top-half right-16">
                    <Image src="/icons/arrow.png" width={12} height={12} alt="Icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="bg border-cust w-full">
                <div className="p-12 bg-dark relative">
                  <h3 className="heading3 white">Title Here</h3>
                  <p className="ptext">Lorem ipsum dolor sit amet consectetur. Gravida dis tempor pharetra rhoncus arcu in lorem nisl.</p>
                  <div className="w-12 h-12 rounded-full flex justify-center items-center bgGreen absolute top-half right-16">
                    <Image src="/icons/arrow.png" width={12} height={12} alt="Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      </section>


{/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-7 mt-5">
          <div className="grid text-center grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-12">
              <h1 className="heading2">Testimonials</h1>
              <p className="lgParagraph text-white">See What Others Are Saying About My WorkHear from Clients About Their Experience Working With Me</p>          
            </div>
          </div>
          <div className="cols-span-12 w-full py-12 relative">
              <SliderComponent />
          </div>
        </div>
      </section>


      <section className="blurBg">
        <div className="container mx-auto px-7 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-8 p-4">
                <h1 className="title text-white">Ready To Start Your Project?</h1>
                <p className="lgParagraph text-white mt-4">Lorem ipsum dolor sit amet consectetur. Sed adipiscing nisl egestas a orci sagittis est lacus. Odio tellus mauris in scelerisque tempor ante orci quis. </p>
                <button className="bgGreen px-6 py-2 rounded-md text-white font-semiboldn mt-5">Let’s Get Started</button>
              </div>
              <div className="col-span-12 md:col-span-4 p-4 flex justify-end">
                  <div className="work">

                  </div>
                <div className="workm">

                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
