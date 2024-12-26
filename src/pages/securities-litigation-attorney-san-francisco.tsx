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
export default function securitiesLitigationAttorneySanFrancisco() {
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
      <SEO title={`Securities Litigation Lawyer in San Francisco | ${INFO.companyName}`}
        description={`Looking for a skilled securities litigation lawyer in San Francisco? Baldwin Mader Law Group offers expert legal representation for financial disputes and securities fraud cases. Trust our local California team to protect your rights. Located in Manhattan Beach, CA.`}
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
             Securities Litigation Lawyer San Francisco: Expert Legal Representation You Can Trust
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
            Navigating the complexities of securities disputes requires expertise and strategic planning. Baldwin Law Group is your trusted partner, offering professional services to address challenges related to securities litigation. As a leading securities litigation lawyer in San Francisco, we have a proven record of protecting clients from financial and legal risks. Whether facing shareholder disputes, fraud allegations, or regulatory investigations, our experienced attorneys are here to provide dedicated legal support. We focus on delivering practical, tailored solutions to help you achieve a favorable outcome. Contact us today to safeguard your financial future.
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
              title="Why Choose Baldwin Law Group for Securities Litigation?"
              center
              className="text-center"
            />
 <p className="mb-6 text-center">When choosing a securities litigation lawyer, expertise and a client-first approach are essential. Here's why Baldwin Law Group stands out:</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Extensive Experience in Securities Law
            </h3>
            <p className="mt-1 text-sm text-gray-500">Our attorneys specialize in securities litigation, bringing years of experience to every case. We have successfully handled disputes involving fraud, misrepresentation, insider trading, and regulatory violations.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Customized Legal Strategies
            </h3>
            <p className="mt-1 text-sm text-gray-500">At Baldwin Law Group, we understand that every case is unique. Our team develops personalized legal strategies tailored to your specific situation, ensuring that we meet your objectives effectively.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Transparent and Client-Centric Approach
            </h3>
            <p className="mt-1 text-sm text-gray-500">We prioritize clear communication and transparency throughout the legal process. From the initial consultation to case resolution, we keep you informed every step of the way.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Deep Understanding of the Local Legal Landscape
            </h3>
            <p className="mt-1 text-sm text-gray-500">As a trusted name in San Francisco, we possess in-depth knowledge of the local and federal securities laws. This enables us to provide accurate guidance and effective representation.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Proven Track Record
            </h3>
            <p className="mt-1 text-sm text-gray-500">Our successful case history speaks volumes about our ability to deliver results. Clients trust us to manage high-stakes securities litigation with skill and dedication.</p>
          </div>
         
        </div>
      </div>
      
      
    </div>
    
  </div>
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
                className="text-gray-600 mt-0 text-[30px]"
              >
             Common Securities Litigation Issues We Handle
              </h2>
           
            <p className="mb-2">Baldwin Law Group has expertise in a wide range of securities-related disputes, including:
            </p>
            <ul>
            <li>Fraud and Misrepresentation Claims
Allegations of deceptive practices in securities transactions.</li>
<li><strong>Shareholder Disputes</strong> <br/>
Conflicts between shareholders and corporate management.</li>
<li><strong>Insider Trading Cases</strong> <br/>
Investigations or accusations involving improper use of non-public information.</li>
<li><strong>Breach of Fiduciary Duty</strong> <br/>
Cases where corporate officers or directors violate their fiduciary responsibilities.</li>
<li><strong>Regulatory Investigations</strong> <br/>
Defense against inquiries from the SEC or other regulatory bodies</li>

            </ul>
            
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
      <Title
              title="Frequently Asked Questions"
              center
            />
        <div className="space-y-4">
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">What does a securities litigation lawyer do?</h3>

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
    A securities litigation lawyer represents clients in disputes related to securities, such as fraud claims, insider trading, and shareholder conflicts. They provide legal advice, handle negotiations, and advocate in court when necessary.
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">How do I know if I need a securities litigation lawyer?</h3>

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
    You may need a lawyer if you are involved in shareholder disputes, suspect securities fraud, face allegations of regulatory violations, or require legal guidance on complex transactions.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">Why is Baldwin Law Group the right choice for securities litigation?</h3>

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
    We offer extensive experience, personalized strategies, and a client-focused approach. Our in-depth understanding of San Francisco's legal landscape ensures effective representation.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">Are securities litigation lawyers worth the cost?</h3>

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
    A skilled lawyer can protect your financial interests, mitigate risks, and help you navigate the complexities of securities litigation successfully.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">Where can I find a reliable securities litigation lawyer in San Francisco?</h3>

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
    Baldwin Law Group is a trusted choice for clients seeking expert legal representation in securities litigation.
    </p>
  </details>
</div>
      </div>
    </section>
    <section className="pt-5 pb-5">
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
              title="Contact Baldwin Law Group Today!"
            />
            <p className="mb-2">
            Don’t let securities disputes jeopardize your financial stability. Work with a trusted securities litigation lawyer in San Francisco at Baldwin Law Group. Our team is dedicated to protecting your interests and achieving the best possible outcome. Call us today or fill out our online contact form to schedule a consultation. Let us be your partner in navigating securities litigation with confidence.
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
 
    </Layout>
  );
}
