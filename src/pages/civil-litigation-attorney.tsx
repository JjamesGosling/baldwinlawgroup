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
export default function CivilLitigationAttorney() {
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
      <SEO title={`Civil Litigation Lawyer near me | California `}
        description={`Looking for a civil litigation lawyer near you in California? Baldwin Mader Law Group provides experienced legal representation and trusted business litigation services across the state.`}
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
               Civil Litigation Lawyer in California
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
             Baldwin Mader Law Group is a civil litigation law firm dedicated to helping individuals and businesses across California resolve disputes with personalized legal strategies. Whether you’re dealing with a breach of contract, business conflict, or real estate issue, we make the process straightforward, protect your rights, and represent you in court if needed. <br/>
             With a proven track record, we’re here to support you every step of the way.
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
            <Title
              title="What Is Civil Litigation?"
             
            />
            
            <p className="mb-6">
            Civil litigation covers legal disputes between parties seeking compensation or specific remedies, rather than criminal penalties. <a href="https://baldwinlawgroup.com/attorney-profiles" className="underline">Our attorneys</a> are prepared to negotiate, mediate, or proceed to trial—whichever approach is best for your case.
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
 <Title title="Our Services" center />
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
       
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            	Breach of Contract
            </h3>
            <p className="mt-1 text-sm text-gray-500">Helping you recover damages from unfulfilled contractual obligations.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
           Business Disputes
            </h3>
            <p className="mt-1 text-sm text-gray-500">Resolving partnership conflicts, shareholder issues, and contract disputes to protect your interests.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
           Real Estate Litigation
            </h3>
            <p className="mt-1 text-sm text-gray-500">Handling property disputes involving boundaries, titles, zoning, easements, foreclosure defense, and more</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Construction Litigation
            </h3>
            <p className="mt-1 text-sm text-gray-500">Addressing claims related to defects, delays, cost overruns, and contract breaches.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Employment Law
            </h3>
            <p className="mt-1 text-sm text-gray-500">Supporting employees with wrongful termination, wage disputes, discrimination, and workplace concerns.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Intellectual Property Law. 
            </h3>
            <p className="mt-1 text-sm text-gray-500">Protecting your IP rights or defending against infringement claims involving trademarks, copyrights, or patents</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
           Estate Litigation
            </h3>
            <p className="mt-1 text-sm text-gray-500">Assisting with disputes over wills, trusts, and probate to honor the decedent’s wishes and your rights.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Other Civil Disputes
            </h3>
            <p className="mt-1 text-sm text-gray-500">If you’re facing a non-criminal legal conflict, reach out to discuss how we can assist.</p>
          </div>
         
        </div>
      </div>

      
    </div>
  </div>
</div>
      </div>
    </section>

    <section className="padding-y pt-1">
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
              title="Why Choose Baldwin Mader Law Group?"
            />
           
          <ol>
            <li><strong>Experienced Team –</strong> <a href="https://baldwinlawgroup.com/attorney-profiles" className="underline">Skilled Attorneys</a> with success across diverse civil litigation matters.</li>
<li><strong>Strategic Approach –</strong> Legal plans tailored to your goals with clear communication.</li>
<li><strong>Transparent Updates –</strong> We explain the process clearly and keep you informed.</li>
<li><strong>Committed Support –</strong> Focused on achieving the best possible results for you.</li>

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
    <section className="padding-y pt-1">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-20 lg:gap-10">
          <motion.div
            className="flex flex-col lg:py-6 order-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Title
              title="Schedule a Free Consultation"
            />
            <p className="mb-4">
           If you’re involved in a civil dispute, contact us today to schedule a free consultation. We serve clients throughout California from our offices in San Francisco, Los Angeles, and Palm Springs  
            </p>


            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link href="/contact-us" className="btn-after !text-black">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <div className="flex w-full relative mx-auto max-w-xl min-h-[250px] sm:min-h-[350px] order-1 lg:order-1">
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
      <p className="text-center">We also represent clients in nationwide FINRA arbitration</p>
    </section>
    <section className="padding-y">
      <div className="container">
      <Title
              title="Frequently Asked Questions"
              center
            />
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What is a Civil Litigation Attorney?</summary>
        <div className="px-4 pb-4">
          <p>A lawyer who handles non-criminal disputes, helping clients protect their rights and seek remedies.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">Do I Need a Civil Litigation Lawyer?</summary>
        <div className="px-4 pb-4">
          <p>If you’re facing a legal dispute and need guidance, we can help evaluate your options.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What cases do civil litigation attorneys handle?</summary>
        <div className="px-4 pb-4">
          <p>We handle breach of contract, business disputes, real estate and construction issues, employment conflicts, intellectual property, estate matters, and more.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How is civil litigation different from criminal law?</summary>
        <div className="px-4 pb-4">
          <p>Civil litigation resolves private disputes, usually involving compensation. Criminal law addresses offenses against the state with penalties like fines or imprisonment.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How much does a civil litigation attorney cost?</summary>
        <div className="px-4 pb-4">
          <p>Costs vary by case. We offer a free consultation to discuss fees and options.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How can I find a civil litigation lawyer near me?</summary>
        <div className="px-4 pb-4">
          <p>Baldwin Mader Law Group serves clients throughout California. <a href="https://baldwinlawgroup.com/contact-us" className="underline">Contact us</a> to schedule a free consultation at a convenient location near you.</p>
        </div>
      </details>
     
      
    </div>
      </div>
    </section>
    </Layout>
  );
}
