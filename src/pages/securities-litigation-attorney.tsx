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
  "/images/hero/image-14.jpg",
  "/images/hero/image-21.jpg",
  "/images/hero/image-22.jpg",
];
export default function SecuritiesLitigationAttorney() {
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
      <SEO title={`Securities Litigation & Fraud Attorney Near me | California`}
        description={`Looking for a securities litigation or fraud attorney near you in California? Baldwin Mader Law Group offers trusted, expert legal representation—contact us today.`}
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
                className="text-gray-200 mt-4 text-[42px]"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                exit="exit"
                variants={motionVariants.fadeUp(40)}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
               Securities Litigation & Arbitration Lawyer in California
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
               Baldwin Mader Law Group is a California-based law firm specializing in securities litigation and arbitration. With over 70 years of combined experience, we help individuals and institutions recover losses caused by securities fraud, broker misconduct, and investment disputes. Our skilled attorneys have secured millions in settlements and awards for clients across California and beyond. <br/>
               If you believe you’ve been a victim of investment fraud, contact us to discuss your case and explore your options.
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
            <Image
              src="/images/about/image-14.jpeg"
              alt="about"
              className="h-[72%] w-7/12 !absolute -bottom-32 border-8 border-white sm:block hidden"
              imageClassName="object-cover"
            />
          </div>
          <motion.div
            className="flex flex-col pb-0 lg:pt-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <Title title="Why Choose Us?" />
                      
            <p className="mb-6">
            <b>Experienced Team– </b> <a href="https://baldwinlawgroup.com/attorney-profiles" className="underline">Our attorneys</a> are experts in complex financial matters and securities law.
</p>
            <p className="mb-6">
            <b>Proven Results –</b> We have a strong track record of significant recoveries for defrauded investors
</p>
            <p className="mb-6">
           <b>Exclusive Focus –</b> We dedicate our practice solely to securities litigation and arbitration.
</p>
            <p className="mb-6">
            <b>Personalized Service –</b> Clients work directly with seasoned partners, not junior associates.
</p>

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
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

    <Title
              title="Cases We Handle"
              center
            />
 <p className="mb-6 text-center">We litigate a wide range of securities fraud and misconduct cases, including:</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
           Securities Class Actions & Multi-District Litigation (MDL)
            </h3>
            <p className="mt-1 text-sm text-gray-500">Representing investors seeking recovery from large-scale securities fraud.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Shareholder Derivative Lawsuits
            </h3>
            <p className="mt-1 text-sm text-gray-500">Holding corporate executives accountable for actions harming shareholder value.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
           Corporate Control Disputes
            </h3>
            <p className="mt-1 text-sm text-gray-500">Advising clients in proxy fights, takeovers, and other high-stakes matters</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
           Insider Trading Allegations
            </h3>
            <p className="mt-1 text-sm text-gray-500">Investigating and litigating misuse of confidential information.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
           Securities Fraud
            </h3>
            <p className="mt-1 text-sm text-gray-500">Handling Ponzi schemes, pump-and-dump scams, and unsuitable investment advice.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Accounting Fraud
            </h3>
            <p className="mt-1 text-sm text-gray-500">Pursuing claims against companies that manipulate financial statements to mislead investors.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            	IPO Litigation
            </h3>
            <p className="mt-1 text-sm text-gray-500">Representing investors harmed by misstatements or omissions in IPO materials.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
           	Federal Securities Investigations
            </h3>
            <p className="mt-1 text-sm text-gray-500">Defending clients in SEC and other regulatory investigations.</p>
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
              title="How We Protect You"
            />
            <p className="mb-4">
            At Baldwin Mader Law Group, we are committed to protecting your rights and holding fraudsters accountable. Our attorneys craft tailored legal strategies and represent clients both in court and through securities arbitration—a faster, cost-effective alternative to traditional litigation 
            </p>
            <p className="mb-4">
          <strong> Free Consultation:</strong> If you suspect investment fraud, contact us today for a confidential, no-cost case review.
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
               src="/images/hero/image-22.jpg"
                alt="about"
                className="h-full w-full min-h-[200px]"
                imageClassName="object-cover"
              />
            </div>
           
          </div>
        </div>
      </div>
    </section>
     <section className="py-4">
      <div className="container">
         <Title
              title="Serving Clients Across California"
               subTitle="Baldwin Mader Law Group represents clients throughout California, including:"
              center
            />
      </div>
      <div className="container justify-center flex">
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl w-full">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-0">
            
            <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Los Angeles
            </div>
            <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> San Francisco
            </div>
            <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> San Diego
            </div>

            
            <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Sacramento
            </div>
            <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Orange County
            </div>
            <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> San Jose
            </div>

           
            <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Fresno
            </div>
            <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Riverside
            </div>
            <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Long Beach
            </div>
            
        </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511999.225806154!2d-124.60470710820825!3d37.16013847628053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2s!4v1751577836514!5m2!1sen!2s"  height="450" className="border-none w-full mt-3 mb-3"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <p className="text-center">We also represent clients in nationwide FINRA arbitration.</p>
    </section>
    <section className="padding-y">
      <div className="container">
      <Title
              title="Frequently Asked Questions"
              center
            />
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What is a securities litigation attorney?</summary>
        <div className="px-4 pb-4">
          <p>A lawyer who specializes in legal disputes related to investments, including fraud, broker misconduct, and misleading financial practices.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How can a securities fraud lawyer help me?</summary>
        <div className="px-4 pb-4">
          <p>We investigate your case, gather evidence, negotiate settlements, and pursue litigation or arbitration to recover your losses.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What is securities arbitration?</summary>
        <div className="px-4 pb-4">
          <p>A streamlined dispute resolution process outside of court, often faster and more efficient for resolving investment disputes.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What types of cases do you handle?</summary>
        <div className="px-4 pb-4">
          <p>We handle insider trading, accounting fraud, Ponzi schemes, IPO misrepresentations, and more.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">Do I have a case?</summary>
        <div className="px-4 pb-4">
          <p>If you suspect investment fraud, contact us for a free consultation. We’ll review your situation and advise you on your legal options.</p>
        </div>
      </details>
     
      
    </div>
      </div>
    </section>
    </Layout>
  );
}
