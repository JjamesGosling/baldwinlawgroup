import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";
import { INFO } from "@/constants";
import Image from "@/components/image";
import Title from "@/components/title";
import motionVariants from "@/utils/motionVariants";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ContactForm from "../sections/contactPage/ContactForm";

const heroSliderImages = [
  // "/images/hero/image-20.jpg",
  // "/images/hero/image-1.png",
  // "/images/hero/test-4.jpg",
  "/images/hero/image-14.jpg",
  // "/images/hero/image-18.jpg",
  // "/images/hero/image-19.jpg",
  "/images/hero/image-21.jpg",
  "/images/hero/image-22.jpg",
  // "/images/hero/hero-slide-01.webp",
];
export default function finraArbitrationAttorneyLosAngeles() {
  const [activeSlide, setActiveSlide] = useState(-1);
  const firstTime = useRef(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveSlide(0);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const handleSlideChange = (swiper: any) => {
    firstTime.current = false;
    setActiveSlide(swiper.activeIndex);
  };
  return (
    <Layout>
      <SEO title={`Trusted FINRA Arbitration Lawyer Los Angeles | ${INFO.companyName}`}
        description={`Looking for a skilled FINRA arbitration lawyer in Los Angeles? Baldwin Mader Law Group offers expert legal services to protect your rights. Visit us at 516 North Sepulveda Boulevard, Manhattan Beach, CA, and get the legal support you need today.`}
      />
       <section className="relative z-10 -mt-[128px]">
      <div className="relative isolate overflow-hidden min-h-[calc(100vh+10px)] flex flex-col">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          speed={2000}
          modules={[Autoplay, Pagination, EffectFade]}
          className="!absolute inset-0 z-10 h-full w-full hero-slider"
          onSlideChange={handleSlideChange}
        >
          {heroSliderImages.map((item, index) => (
            <SwiperSlide key={index} className="overflow-hidden">
              <Image
                src={item}
                alt="bg-hero"
                className={`h-full w-full ${
                  activeSlide === index
                    ? firstTime.current
                      ? "zoom-in-2"
                      : "zoom-in"
                    : "zoom-out"
                }`}
                imageClassName="object-cover"
              />
              <div className="absolute left-0 top-0 bottom-0 z-10 w-full bg-gradient-to-br from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="container z-10 mt-[60px] md:mt-0 lg:mt-0 relative h-full flex flex-col justify-center flex-1">
        <div className=" grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] mx-auto">
      <div className="">
      <div className="max-w-4xl mt-[60px]">
            <div className="text-center sm:text-left max-w-xl">

              <motion.h1
                className="text-gray-200 mt-4 text-[38px]"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                exit="exit"
                variants={motionVariants.fadeUp(40)}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
               FINRA Arbitration Lawyer in Los Angeles –  <br className="sm:block hidden" />Expert Legal Assistance for Securities Disputes
              </motion.h1>

              <motion.p
                className="text-gray-200 mt-4 text-lg"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                exit="exit"
                variants={motionVariants.fadeUp(40)}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
            If you’re facing a securities dispute, you’re likely feeling frustrated and uncertain about what comes next. These cases can affect your financial future, and having the right legal representation makes all the difference. A trusted FINRA arbitration lawyer in Los Angeles can help level the playing field. <br/>
            At Baldwin Mader Law Group, we work tirelessly to protect our clients’ rights in disputes involving investments, trading misconduct, and broker negligence. With our expertise in FINRA arbitration, we provide professional guidance and a results-driven approach to help you achieve the best possible outcome. Contact us today and work with an experienced FINRA lawyer in Los Angeles.
              </motion.p>

             
            </div>
          </div>
      </div>
      <div className="md:h-[470px] md:ml-auto md:mt-[60px]">
      <motion.div
            className="lg:col-span-5 py-6 px-4 sm:p-8 bg-white bg-opacity-80 shadow-lg border border-gray-200 max-w-full md:max-w-md"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Title title="Get in touch" />
      <ContactForm />
      </motion.div>
      
      </div>
    </div>
    </div>
      </div>
    </section>
     

    <section className="padding-y">
      <div className="container">
      <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
  <Title
              title="Why Choose Us"
              center
            />
 <p className="mb-6 text-center">When your financial well-being is at stake, you need a law firm with the skills and dedication to handle your case with precision. Here’s why Baldwin Mader Law Group is the right choice:</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            FINRA Arbitration Expertise
            </h3>
            <p className="mt-1 text-sm text-gray-500">We specialize in FINRA arbitration, bringing a wealth of experience in securities dispute resolution.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Los Angeles-Based Representation
            </h3>
            <p className="mt-1 text-sm text-gray-500">We offer local expertise, understanding the specific needs of Los Angeles clients in FINRA cases.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Comprehensive Legal Strategies
            </h3>
            <p className="mt-1 text-sm text-gray-500">We tailor strategies to address the unique aspects of your case and maximize your chances of success. 

            </p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Strong Advocacy for Investors
            </h3>
            <p className="mt-1 text-sm text-gray-500">We are passionate about holding brokers and financial institutions accountable for misconduct. 

            </p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Track Record of Success
            </h3>
            <p className="mt-1 text-sm text-gray-500">We have successfully recovered significant losses for investors through arbitration and litigation. 

            </p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Client-Centered Approach
            </h3>
            <p className="mt-1 text-sm text-gray-500">Your case is personal to us. We keep you informed at every step and prioritize your peace of mind. 

            </p>
          </div>
         
        </div>
      </div>
      
      
    </div>
  </div>
</div>
      </div>
    </section>
    
  
 
    <section className="padding-y">
      <div className="container">
      <Title
              title="Frequently Asked Questions"
              center
            />
             <div className="space-y-4">
  

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">What is FINRA arbitration?</h3>

      <svg
        className="w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
    FINRA arbitration is a dispute resolution process for securities-related issues, such as broker misconduct or investment fraud. It is often faster and less formal than court litigation.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">Why do I need a FINRA lawyer in Los Angeles?</h3>

      <svg
        className="w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
    A FINRA lawyer helps you handle the complex rules of arbitration, represent your interests, and improve your chances of recovering losses. Contact Baldwin Mader Law Group and work with an experienced FINRA arbitration lawyer in Los Angeles.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">How long does FINRA arbitration take?</h3>

      <svg
        className="w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
    Most FINRA cases take 12-18 months, but the timeline can vary depending on the complexity of the dispute. Contact us to discuss your particular case. 
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">What types of cases qualify for FINRA arbitration?</h3>

      <svg
        className="w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
    Cases involving broker misconduct, investment fraud, excessive trading, and breach of fiduciary duty are common in FINRA arbitration.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">How do I get started with Baldwin Mader Law Group?</h3>

      <svg
        className="w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
    Feel free to contact us at Baldwin Mader Law Group for a consultation, and we’ll assess your case and discuss the best legal options for resolving your dispute. 
    </p>
  </details>
</div>
      </div>
    </section>
    </Layout>
  );
}
