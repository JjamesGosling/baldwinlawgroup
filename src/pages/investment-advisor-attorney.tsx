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
export default function investmentAdvisorAttorney() {
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
      <SEO title={`Expert Investment Advisor Attorney in California  | ${INFO.companyName}`}
        description={`Looking for a trusted investment advisor attorney in California? Baldwin Mader Law Group in Manhattan Beach provides expert legal guidance for investment and financial matters. Visit us at 516 North Sepulveda Boulevard. Call now!`}
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
              Investment Advisor Attorney Services
              </motion.h1>
              <motion.h2
                className="text-gray-200 mt-2 text-[20px]"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                exit="exit"
                variants={motionVariants.fadeUp(40)}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
             Professional Legal Guidance for Financial Advisors
              </motion.h2>

              <motion.p
                className="text-gray-200 mt-4 text-lg"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                exit="exit"
                variants={motionVariants.fadeUp(40)}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
            In the highly regulated financial industry, investment advisors face unique legal challenges that require specialized knowledge. Our investment advisor attorney services are designed to support investment professionals by providing proactive legal guidance that ensures compliance, reduces risk, and enhances the advisor-client relationship. From understanding your fiduciary responsibilities to staying aligned with the latest SEC regulations, our attorneys are here to navigate the complex legal landscape on your behalf.<br/>
           
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
    <section className="bg-gray-50">
  <div className="py-8">
    <div className="mx-auto max-w-6xl text-center">
      <p className=" text-gray-500">
      As the financial industry evolves, so do the expectations placed on investment advisors to uphold high standards of accountability and transparency. Whether you are an independent advisor or part of a larger firm, our legal team works to safeguard your interests and ensure that you meet every regulatory requirement, from record-keeping and advertising standards to client disclosure obligations. We prioritize protecting your practice and enabling you to focus on what matters most—serving your clients confidently and effectively.
      </p>
    </div>
  </div>
</section>
   
      <section className="py-8">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-6 sm:gap-40 lg:gap-16">
          <div className="flex w-full relative mx-auto max-w-xl min-h-[250px] sm:min-h-[350px]">
            <div className="flex w-full whitespace-nowrap relative">
              
              <Image
                src="/images/about/image-16.jpg"
                alt="about"
                className="h-full w-full min-h-[200px]"
                imageClassName="object-cover"
              />
            </div>
          </div>
          <motion.div
            className="flex flex-col pb-0 lg:pt-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2
                className="text-gray-600 mt-0 text-[36px]"
              >
              Protecting Your Practice Through Legal Expertise
              </h2>
           
            <p className="mb-2">An investment advisor lawyer can help you manage the intricate legal requirements of the financial advisory industry. Whether you’re facing challenges related to regulatory compliance, contract management, or defending your practice, our team offers knowledgeable, proactive representation. We support investment advisors in developing robust legal strategies to handle SEC audits, client disputes, and contract negotiations, helping you safeguard your business and reputation. With extensive industry experience, our lawyers are committed to protecting your practice and promoting compliance with financial laws.</p>
            
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link href="/contact-us" className="btn-after !text-black">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="padding-y">
      <div className="container">
      <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
  <Title
              title="Why Choose Us for Investment Advisor Legal Services"
              className="text-center"
              center
            />
 <p className="mb-6 text-center">When choosing a law firm to support your financial advisory practice, you want attorneys who understand the unique legal landscape of your industry. Here’s why advisors trust us:</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
           Industry Expertise
            </h3>
            <p className="mt-1 text-sm text-gray-500">We specialize in financial and securities law, enabling us to provide tailored advice that meets the exact needs of investment advisors.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Comprehensive Compliance Support:   
            </h3>
            <p className="mt-1 text-sm text-gray-500">From SEC regulatory requirements to fiduciary duties, we cover every aspect of compliance, ensuring you can meet all legal standards confidently.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
          Customized Legal Strategies
            </h3>
            <p className="mt-1 text-sm text-gray-500">Each investment advisory practice is different, and we design strategies that address your specific business model, risk profile, and goals.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Proactive Problem Solving
            </h3>
            <p className="mt-1 text-sm text-gray-500">By anticipating challenges and preparing defenses before issues arise, we help you avoid costly legal disputes and regulatory penalties.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Client-Centered Approach
            </h3>
            <p className="mt-1 text-sm text-gray-500">Transparent, responsive communication is central to our client relationships. We prioritize keeping you informed every step of the way and providing actionable insights to help you navigate complex decisions.</p>
          </div>
         
        </div>
      </div>
      
    </div>
    
  </div>
</div>
      </div>
    </section>

    <section className="pt-1">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-20 lg:gap-10">
          <motion.div
            className="flex flex-col lg:py-6 order-2 lg:order-1"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Title
              title="Ready to Protect Your Practice? Contact Us for Expert Legal Guidance"
            />
            <p className="mb-2">
            Our commitment is to provide legal support that empowers investment advisors to focus on client service while managing their practice with confidence. By choosing an experienced investment advisor attorney, you gain a partner dedicated to protecting your practice, strengthening client relationships, and guiding you through every regulatory challenge. For tailored, expert advice, contact us to discuss how we can help secure your future in the financial advisory industry.
            </p>

            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link href="/contact-us" className="btn-after !text-black">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <div className="flex w-full relative mx-auto max-w-xl min-h-[250px] sm:min-h-[350px] order-1 lg:order-2">
            <div className="flex w-full whitespace-nowrap relative">
              <Image
                src="/images/hero/image-21.jpg"
                alt="about"
                className="h-full w-full min-h-[200px]"
                imageClassName="object-cover"
              />
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
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">What does an investment advisor attorney do?</h3>

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
    An investment advisor attorney offers legal services tailored to financial advisors, helping with compliance, SEC regulations, client disputes, and fiduciary duties.
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">Why is compliance essential for investment advisors?</h3>

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
    Compliance ensures that advisors meet legal standards, protecting their practice and clients, and helping avoid penalties from regulatory bodies like the SEC.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">Do investment advisors need legal support?</h3>

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
    Yes, legal support helps investment advisors navigate complex regulatory requirements, avoid disputes, and protect their practice.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">How can an attorney help with SEC audits?</h3>

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
    An attorney provides guidance throughout the audit process, helping advisors prepare documentation and addressing any findings to ensure compliance.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">Can I manage client disputes on my own?</h3>

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
    While possible, having an experienced attorney minimizes risks, improves negotiation outcomes, and helps protect your reputation in client disputes.
    </p>
  </details>
</div>
      </div>
    </section>
    
 
    </Layout>
  );
}
