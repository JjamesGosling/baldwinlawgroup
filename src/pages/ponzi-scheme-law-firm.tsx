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
export default function PonziSchemeLawFirm() {
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
      <SEO title={`Experienced Ponzi Scheme Lawyer in California | ${INFO.companyName}`}
        description={`Been a victim of a Ponzi scheme? Baldwin Mader Law Group in Manhattan Beach, CA, offers expert Ponzi scheme attorneys to help recover your losses. Contact us for a free consultation at 516 North Sepulveda Boulevard, Manhattan Beach, CA 90266.`}
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
               Baldwin Mader Law Group – Ponzi Scheme Victim Attorney in California
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
             A Ponzi scheme is a fraudulent investment operation that lures investors with the promise of high returns, with the payouts to existing investors funded by money brought in from new investors. Eventually, the flow of new money dries up, and the scheme collapses, leaving investors with significant financial losses. Being the leading Ponzi scheme law firm in California, we understand the sensitive nature of these situations and will handle your case with discretion and compassion.
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
            className="flex flex-col pb-0 lg:pt-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-2 text-2xl"><strong>This is How Ponzi Schemes Work</strong></h2>
            <p className="mb-2">
            Ponzi schemes typically follow this deceptive pattern:
            </p>
            <ul className="mb-2">
                <li><strong>Promise of High Returns</strong> – The perpetrator promises investors exceptionally high rates of return, often with little to no risk. </li>
                <li><strong>Early Payouts</strong> – Initial investors may receive payouts that appear legitimate, further fueling trust in the scheme. </li>
                <li><strong>Perpetuating the Cycle</strong> – As the scheme progresses, the perpetrator needs a constant influx of new investors to maintain the illusion of profitability. </li>
                <li><strong>The Inevitable Collapse </strong> – Eventually, the scheme reaches a tipping point where it can no longer attract enough new investors to keep up with the promised payouts and collapses</li>

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
      <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
  <Title
              title="We Help Victims of Ponzi Schemes."
              center
            />
 <p className="mb-6 text-center">Our Ponzi scheme attorneys at Baldwin Mader Law Group have extensive experience helping victims recover their losses from fraudulent investment schemes. If you are looking for a Ponzi scheme lawyer in California, we are here to help. We can help you:</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Evaluate Your Case 
            </h3>
            <p className="mt-1 text-sm text-gray-500">Ponzi schemes can have a devastating impact on individuals and families who lose their hard-earned savings. We will review your situation and determine if you have grounds for legal action.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Pursue Legal Options
            </h3>
            <p className="mt-1 text-sm text-gray-500">We explore all legal avenues to recover your losses, including pursuing claims against the perpetrator in Court or at Arbitration, or potentially filing Whistleblower claims with securities regulators.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Hold Perpetrators Accountable
            </h3>
            <p className="mt-1 text-sm text-gray-500">We are committed to holding those responsible for Ponzi schemes accountable for their actions. If you believe you have suffered losses in connection with a Ponzi scheme, contact us today.

            </p>
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
              title="Don’t Let the Perpetrators Win – Take Action Today."
            />
            <p className="mb-2">
            Baldwin Mader Law Group has over 70 years of collective legal experience, including extensive experience in connection with Ponzi schemes in California. Our dedicated Ponzi scheme attorney team of has a proven track record of success in helping investors recover their losses from these fraudulent schemes.  
            </p>
          
          <ol className="mb-2">
            <li><strong>Free Consultation </strong> During this confidential meeting, our Ponzi scheme lawyer will carefully analyze the facts of your case and determine if you have grounds for legal action.
</li>
<li><strong>Investigative Expertise </strong> We will work diligently to uncover the scope of the fraud and identify all responsible parties.</li>
<li><strong>Experience in Complex Litigation </strong> Our team has extensive experience in securities litigation and is prepared to handle even the most challenging cases.</li>
<li><strong>Aggressive Representation </strong> We will fight aggressively to recover your investment losses and hold the perpetrators accountable for their actions.</li>
<li><strong>Clear Communication </strong> Our Ponzi scheme victim attorney will keep you informed of the progress of your case and explain complex legal issues in easy-to-understand terms.</li>
          </ol>


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
      <h3 className="font-medium text-lg">How can Baldwin Mader Law Group help me recover from a Ponzi scheme?</h3>

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
    Our experienced Ponzi scheme victim lawyer team has a proven track record of helping investors recover their losses. We will provide a free consultation to discuss your situation, investigate the scheme and gather evidence, explore all legal options to recover your losses, advocate aggressively on your behalf, and keep you informed throughout the legal process.
    </p>
  </details>

</div>
      </div>
    </section>
    </Layout>
  );
}
