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
      <section className="py-8 border shadowCustom relative">
          <div className="container mx-auto px-7 mt-12">
            <div className="col-span-full">
              <h1 className="heading2">Contact Me</h1>
              <p className="lgParagraph text-center white">Contact me for a range of services– let's bring your ideas to life!</p>
            </div>
            <div className="grid grid-cols-1 mt-4 gap-3 md:grid-cols-5 md:mt-12 px-4 py-4 md:p-12 customBg rounded-xl">
              <div className="md:col-span-3 w-full" >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {({ setFieldValue }) => (
                      <Form>
                        <div className="form-group py-2">
                          <Field
                            type="text" placeholder="Full Name"
                            id="fullName"
                            name="fullName"
                            className="form-control px-3 py-2 w-full outline-none rounded-md"
                          />
                          <ErrorMessage name="fullName" component="div" className="error text-red-600" />
                        </div>

                        <div className="form-group py-2 relative">
                          <Field
                            type="email" placeholder="Email"
                            id="email"
                            name="email"
                            className="form-control py-2 px-8 w-full outline-none rounded-md"
                          />
                          <Image src={"/icons/em.svg"} width={20} height={12} alt="Email" className="absolute top-5 left-2"  />
                          <ErrorMessage name="email" component="div" className="error text-red-600" />
                        </div>
                        <div className="form-group py-2 relative">
                          <Field
                            type="number" placeholder="Phone Number"
                            id="phone"
                            name="phone"
                            className="form-control py-2 px-8 w-full outline-none rounded-md"
                          />
                          <Image src={"/icons/phone.svg"} width={20} height={12} alt="Email" className="absolute top-5 left-2"  />
                          <ErrorMessage name="phone" component="div" className="error text-red-600" />
                        </div>

                        <div className="form-group py-2">
                          <Field as="select" id="service" name="service" className="form-control px-3 py-2 w-full outline-none rounded-md">
                            <option value="">Select a service</option>
                            {serviceOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="service" component="div" className="error text-red-600" />
                        </div>

                        <div className="form-group py-2">
                          <Field
                            as="textarea"
                            id="message"
                            name="message" placeholder="Message" rows={6}
                            className="form-control px-3 py-2 w-full outline-none resize-none rounded-md"
                          />
                          <ErrorMessage name="message" component="div" className="error text-red-600" />
                        </div>

                        <div className="form-group text-center">
                          <button type="submit" className="bgGreen text-white sendMessage">Send Message</button>
                        </div>
                      </Form>
                    )}
                </Formik>
              </div>
              <div className="md:col-span-2 w-full polygonLeft py-8 md:py-0">
                
                  <div className="flex justify-center items-center">
                    <h1 className="subtitle">Contact Details</h1>
                    {/* <div className="polygonLeft"></div> */}
                  </div>

                  <div className="flex flex-col justify-center md:w-1/3 md:ms-28 mt-4 md:mt-20 gap-12">
                    <p className="paragraph flex justify-center md:justify-start align-middle gap-2"> <span><Image src={"/icons/whiteIcon.svg"} width={14} height={8} alt="Call" className="mt-1" /></span> +44 7456 427207</p>
                  </div>
                  <div className="flex flex-col justify-center md:ms-28 mt-8 gap-12">
                    <p className="paragraph flex justify-center md:justify-start align-middle gap-2"> <span><Image src={"/icons/whiteMail.svg"} width={14} height={8} alt="Call" className="mt-1" /></span>info@connectwithshameel.com</p>
                  </div>
                  <div className="flex flex-col justify-center md:ms-28 mt-8 gap-12">
                    <p className="paragraph flex justify-center md:justify-start align-middle gap-2"> <span><Image src={"/icons/whiteLocation.svg"} width={16} height={8} alt="Call" className="mt-1" /></span>info@connectwithshameel.com</p>
                  </div>
                  <div className="polygon">
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default page
