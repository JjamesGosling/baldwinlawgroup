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
export default function investmentFraudLawyerOrangeCounty() {
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
      <SEO title={`Top Investment Fraud Lawyer in Orange County  | ${INFO.companyName}`}
        description={`Looking for an experienced investment fraud lawyer in Orange County? Baldwin Mader Law Group specializes in securities fraud and stockbroker fraud cases. Visit us at 516 North Sepulveda Boulevard, Manhattan Beach, CA 90266. Protect your investments today—call now!`}
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
              Investment Fraud Lawyer in Orange County
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
           Falling victim to investment fraud is devastating. It impacts your financial stability and erodes trust in financial institutions. Fraudulent schemes often appear legitimate and authentic, targeting unsuspecting individuals through misleading information, unregistered investments, or misrepresentation. If you’ve experienced financial losses due to dishonest practices, an experienced investment fraud lawyer in Orange County can help you reclaim your losses and seek justice.
           
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
      At Baldwin Mader Law Group, we understand the emotional and financial toll that securities fraud imposes on victims. We specialize in representing investors in cases involving Ponzi schemes, stockbroker fraud, and other forms of investment misconduct. With a deep knowledge of securities law and a commitment to our clients, we pursue every available legal avenue to hold the responsible parties accountable. Here’s how our team of securities fraud lawyers in Orange County supports clients
      </p>
      <ul className="text-gray-500 list-inside">
        <li>We dig deep into the details of your case, gathering evidence to build a strong legal claim.</li>
        <li>Our attorneys craft strategies designed to maximize your chances of recovering losses through litigation or arbitration.</li>
        <li>We collaborate with financial experts to present compelling evidence in court or during arbitration.</li>
        <li>We guide you through every step of the process, ensuring your rights are protected.</li>
      </ul>
      <p className="text-gray-500">
      Whether your case involves deceptive stock trading, broker negligence, or misleading investment opportunities, we’re here to provide the skilled representation you need.
      </p>
    </div>
  </div>
</section>
   
     

    <section className="padding-y">
      <div className="container">
      <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
  <Title
              title="Why Choose Baldwin Mader Law Group?"
              className="text-center"
              center
            />
 <p className="mb-6 text-center">Finding the right stockbroker fraud lawyer Orange County makes all the difference in the outcome of your case. Here’s why Baldwin Mader Law Group is the trusted choice for investment fraud cases in Orange County:</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Proven Expertise in Investment Fraud
            </h3>
            <p className="mt-1 text-sm text-gray-500">Our attorneys have extensive experience handling fraud cases, including stockbroker misconduct and securities law violations.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Strong Track Record of Loss Recovery   
            </h3>
            <p className="mt-1 text-sm text-gray-500">We’ve successfully recovered millions of dollars for clients who have been victims of fraudulent schemes.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Dedicated Representation for Orange County Clients
            </h3>
            <p className="mt-1 text-sm text-gray-500">We understand the unique needs of investors in Orange County and provide tailored legal solutions.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Personalized Legal Strategies
            </h3>
            <p className="mt-1 text-sm text-gray-500">Every case is different. We develop customized strategies that align with your specific circumstances and goals.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Aggressive Advocacy
            </h3>
            <p className="mt-1 text-sm text-gray-500">We don’t back down in the face of powerful financial institutions or corporate defendants.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Compassionate Client Care
            </h3>
            <p className="mt-1 text-sm text-gray-500">We know the stress and frustration fraud causes. Our team offers empathetic support while fighting tirelessly on your behalf.</p>
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
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">What is investment fraud?</h3>

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
    Investment fraud involves deceptive practices, such as misrepresentation, Ponzi schemes, or broker negligence, that result in financial loss for investors.
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">How can an investment fraud lawyer in Orange County help?</h3>

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
    An experienced lawyer investigates the fraud, files claims, and represents your interests in court or arbitration to recover losses.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">What is stockbroker fraud?</h3>

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
    Stockbroker fraud occurs when a broker engages in unethical or illegal practices, such as unauthorized trading or providing misleading advice, causing investor losses.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">How do I know if I need a securities fraud lawyer in Orange County?</h3>

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
    If you’ve suffered financial losses due to fraudulent investments or broker misconduct, consulting a securities fraud lawyer can help determine your legal options. 
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">How do I start my case with Baldwin Mader Law Group?</h3>

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
    Contact us for a consultation. We’ll evaluate your situation and guide you through the legal process to pursue justice and recover your losses. For professional legal support in investment fraud cases, trust Baldwin Mader Law Group to stand by your side every step of the way.
    </p>
  </details>
</div>
      </div>
    </section>
    
 
    </Layout>
  );
}
