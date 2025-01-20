"use client"
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import Image from 'next/image';

const page = () => {
  const serviceOptions = ['Web Development', 'App Development', 'SEO', 'Graphic Design'];

  const initialValues = {
    fullName: '',
    email: '',
    phone:'',
    service: '',
    message: '',
  };
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone Number is required'),
    service: Yup.string().required('Please choose a service'),
    message: Yup.string().required('Message is required'),
  });

  const onSubmit = (values) => {
    console.log(values);
    alert('Form submitted!');
  };

  return (
    <>
      <section className="py-8  rigth relative shadowTop">
          <div className="container mx-auto px-7 mt-12">
            <div className="col-span-full">
              <h1 className="heading2">Effortless Workflow for Seamless Results</h1>
              <p className="lgParagraph text-center white">Our streamlined workflow ensures efficiency, clarity, and seamless collaboration throughout your project.</p>
            </div>

          </div>
          <section className="bg-[#2f2f2f] rightImage shadowTop">
            <div className="container mx-auto px-7 mt-12">
                <div className="grid grid-cols-1 mt-4 gap-3 md:grid-cols-2 md:mt-12 px-4 py-4 md:p-12 rounded-xl">
                    <div className="w-full">
                        <div className="">
                            <h3 className="heading2 green font-semibold ">1. Initial Consultation</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur. Ut tristique quam facilisis et id in sapien eu egestas. Nunc venenatis arcu amet ac semper lacus sed nulla. Non sed ultrices pharetra posuere blandit cras auctor. Risus nunc diam mollis aliquam mauris. Ullamcorper massa pretium aenean pretium quis habitasse. Metus sed id vitae eu massa maecenas faucibus feugiat. Arcu egestas nullam rhoncus ut. Mattis ullamcorper lacinia donec arcu tempus in ante tempus sit. Justo aenean nunc quis nec tempus arcu semper congue.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section className="">
            <div className="container mx-auto px-7 mt-12">
                <div className="grid grid-cols-1 mt-4 gap-3 md:grid-cols-2 md:mt-12 px-4 py-4 md:p-12 rounded-xl">
                    <div className="w-full">
                        <Image src={"/workflow/card2.svg"} width={430} height={450} alt='' />
                    </div>
                    <div className="w-full">
                        <div className="">
                            <h3 className="heading2 green font-semibold ">2. Project Planning</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur. Ut tristique quam facilisis et id in sapien eu egestas. Nunc venenatis arcu amet ac semper lacus sed nulla. Non sed ultrices pharetra posuere blandit cras auctor. Risus nunc diam mollis aliquam mauris. Ullamcorper massa pretium aenean pretium quis habitasse. Metus sed id vitae eu massa maecenas faucibus feugiat. Arcu egestas nullam rhoncus ut. Mattis ullamcorper lacinia donec arcu tempus in ante tempus sit. Justo aenean nunc quis nec tempus arcu semper congue.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <section className="bg-[#2f2f2f] rightImage imgchange shadowTop bottomShadow">
            <div className="container mx-auto px-7 mt-12">
                <div className="grid grid-cols-1 mt-4 gap-3 md:grid-cols-2 md:mt-12 px-4 py-4 md:p-12 rounded-xl">
                    <div className="w-full">
                        <div className="">
                            <h3 className="heading2 green font-semibold ">3. Execution</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur. Ut tristique quam facilisis et id in sapien eu egestas. Nunc venenatis arcu amet ac semper lacus sed nulla. Non sed ultrices pharetra posuere blandit cras auctor. Risus nunc diam mollis aliquam mauris. Ullamcorper massa pretium aenean pretium quis habitasse. Metus sed id vitae eu massa maecenas faucibus feugiat. Arcu egestas nullam rhoncus ut. Mattis ullamcorper lacinia donec arcu tempus in ante tempus sit. Justo aenean nunc quis nec tempus arcu semper congue.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>



          <section className="">
            <div className="container mx-auto px-7 mt-12">
                <div className="grid grid-cols-1 mt-4 gap-3 md:grid-cols-2 md:mt-12 px-4 py-4 md:p-12 rounded-xl">
                    <div className="w-full">
                        <Image src={"/workflow/card4.svg"} width={430} height={450} alt='' />
                    </div>
                    <div className="w-full">
                        <div className="">
                            <h3 className="heading2 green font-semibold ">4. Review and Refinement</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur. Ut tristique quam facilisis et id in sapien eu egestas. Nunc venenatis arcu amet ac semper lacus sed nulla. Non sed ultrices pharetra posuere blandit cras auctor. Risus nunc diam mollis aliquam mauris. Ullamcorper massa pretium aenean pretium quis habitasse. Metus sed id vitae eu massa maecenas faucibus feugiat. Arcu egestas nullam rhoncus ut. Mattis ullamcorper lacinia donec arcu tempus in ante tempus sit. Justo aenean nunc quis nec tempus arcu semper congue.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>


          <section className="bg-[#2f2f2f] rightImage  dif">
            <div className="container mx-auto px-7 mt-12">
                <div className="grid grid-cols-1 mt-4 gap-3 md:grid-cols-2 md:mt-12 px-4 py-4 md:p-12 rounded-xl">
                    <div className="w-full">
                        <div className="">
                            <h3 className="heading2 green font-semibold ">5. Final Delivery</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur. Ut tristique quam facilisis et id in sapien eu egestas. Nunc venenatis arcu amet ac semper lacus sed nulla. Non sed ultrices pharetra posuere blandit cras auctor. Risus nunc diam mollis aliquam mauris. Ullamcorper massa pretium aenean pretium quis habitasse. Metus sed id vitae eu massa maecenas faucibus feugiat. Arcu egestas nullam rhoncus ut. Mattis ullamcorper lacinia donec arcu tempus in ante tempus sit. Justo aenean nunc quis nec tempus arcu semper congue.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      </section>
    </>
  )
}

export default page
