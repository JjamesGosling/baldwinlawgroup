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
export default function ponziSchemeLawFirmSanFrancisco() {
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
      <SEO title={`Ponzi Scheme Lawyer San Francisco  | ${INFO.companyName}`}
        description={`Facing allegations of a Ponzi scheme? Baldwin Mader Law Group in San Francisco specializes in Ponzi scheme defense. Trusted local lawyers in California, located at 516 North Sepulveda Boulevard, Manhattan Beach, CA 90266. Call us for a consultation today!`}
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
              Expert Ponzi Scheme Lawyer in San Francisco
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
             If you are a victim of a Ponzi scheme in San Francisco, Baldwin Law Group is here to help. Our dedicated legal team specializes in representing individuals and businesses affected by fraudulent investment schemes. We understand the complexities of Ponzi scheme cases, including identifying fraudulent activities, tracking assets, and holding perpetrators accountable. With years of experience and a proven track record, we are your trusted partner in seeking justice and recovering your losses. Contact us today to discuss your case with a skilled Ponzi scheme lawyer in San Francisco.
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
              title="Why Choose Baldwin Law Group?"
              center
            />
 <p className="mb-6 text-center">Choosing the right legal representation is crucial when dealing with the aftermath of a Ponzi scheme. Here’s why Baldwin Law Group is the top choice for handling your case:</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Specialized Expertise
            </h3>
            <p className="mt-1 text-sm text-gray-500">We will review your situation and determine if Our lawyers have extensive experience handling Ponzi scheme cases, ensuring that you receive top-notch representation</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Proven Track Record 
            </h3>
            <p className="mt-1 text-sm text-gray-500">We have successfully recovered millions of dollars for our clients, holding fraudsters accountable and protecting victims’ rights.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Personalized Approach: 
            </h3>
            <p className="mt-1 text-sm text-gray-500">Each case is unique. We provide tailored legal strategies that align with your specific needs and objectives

            </p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Resourceful Team: 
            </h3>
            <p className="mt-1 text-sm text-gray-500">Our access to forensic accountants, investigators, and financial experts strengthens your case and increases the likelihood of recovery.

            </p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Client-Centric Service
            </h3>
            <p className="mt-1 text-sm text-gray-500">From initial consultation to resolution, our team is committed to transparent communication and unwavering support.

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
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What is a Ponzi scheme?</summary>
        <div className="px-4 pb-4">
          <p>A Ponzi scheme is a fraudulent investment scam where returns are paid to earlier investors using the capital of newer investors, rather than legitimate profits.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How can a Ponzi scheme lawyer in San Francisco help me?</summary>
        <div className="px-4 pb-4">
          <p>A lawyer can assist in identifying fraudulent activities, tracing lost assets, filing legal claims, and representing you in court to recover damages.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What should I do if I suspect a Ponzi scheme?</summary>
        <div className="px-4 pb-4">
          <p>Contact a Ponzi scheme lawyer immediately to review your case. Avoid investing further and gather all documentation related to the investment. </p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">Can I recover my losses from a Ponzi scheme?</summary>
        <div className="px-4 pb-4">
          <p>While recovery is not guaranteed, an experienced lawyer can significantly improve your chances of retrieving lost funds through legal action and asset recovery. </p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How much does it cost to hire a Ponzi scheme lawyer?</summary>
        <div className="px-4 pb-4">
          <p>Many firms, including Baldwin Law Group, offer consultations and work on a contingency fee basis, meaning you pay only if we recover funds on your behalf. </p>
        </div>
      </details>
      
    </div>
      </div>
    </section>
    <section className="py-8">
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
              title="Your Path to Justice Starts Here"
            />
            <p className="mb-2">
            At Baldwin Law Group, we are committed to helping Ponzi scheme victims rebuild their financial future. Contact us today to schedule your consultation with an experienced Ponzi scheme lawyer in San Francisco.  
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
