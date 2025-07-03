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
      <SEO title={`Ponzi Scheme Lawyer & Attorney Near me | California  `}
        description={`Victim of a Ponzi scheme? Baldwin Mader Law Group in Manhattan Beach, CA, offers experienced Ponzi scheme lawyers to help you recover your losses. Visit us at 516 N Sepulveda Blvd or contact us today for a free consultation.`}
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
               Best Lawyer for Ponzi Scheme Victims in California
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
            Baldwin Mader Law Group is a trusted California law firm specializing in representing Ponzi scheme victims. We help investors recover losses from fraudulent scams that use new investors’ funds to pay earlier ones, eventually collapsing and causing serious financial harm. <br />
            Our compassionate, strategic team is dedicated to holding perpetrators accountable and fighting for the compensation you deserve.
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
            <Title
              title="How Ponzi Schemes Work"
              left
            />
            <p className="mb-2">
            Ponzi schemes typically follow this pattern:
            </p>
            <ul className="mb-2">
                <li><strong>Promise of High Returns:</strong> Perpetrators promise unusually high, low-risk returns.</li>
<li><strong>Early Payouts:</strong> Initial investors receive payments to create a false sense of legitimacy.</li>
<li><strong>Recruitment Cycle:</strong> The scheme depends on constantly recruiting new investors.</li>
<li><strong>Collapse:</strong> When new investments stop, the scheme falls apart, leaving many with losses.</li>


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
              title="Warning Signs of a Ponzi Scheme"
              center
            />
 <p className="mb-6 text-center">Recognizing a Ponzi scheme early can help limit your losses. Be cautious if you notice:</p>
   <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-0">
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Promises of guaranteed or unusually high returns with little or no risk.
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Lack of transparency about how returns are generated.
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Difficulty withdrawing your money or delays in payments.
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Pressure to recruit new investors.
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Unregistered investments or unlicensed sellers.
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
              title="Legal Help for Ponzi Scheme Victims"
            />
            <p className="mb-2">
            If you believe you’ve been affected by a Ponzi scheme, we can help by: 
            </p>
          
          <ol className="mb-2">
            <li><strong>Evaluating Your Case</strong><br/>
Reviewing your situation to determine legal options.</li>
<li><strong>Pursuing Legal Remedies</strong><br/>
Seeking recovery through litigation, arbitration, or whistleblower actions.</li>
<li><strong>Holding Perpetrators Accountable</strong><br/>
Advocating aggressively to recover as much as possible for you.</li>
          </ol>

<h3 className="mb-3">What to Expect When Working with Us</h3>
           
           
           <ol className="mb-4">
            <li><strong>Initial Consultation:</strong> A confidential, no-cost discussion of your case.</li>
<li><strong>Case Investigation:</strong> We gather evidence and assess the scope of the fraud.</li>
<li><strong>Legal Strategy:</strong> Tailored plans to maximize recovery based on your situation.</li>
<li><strong>Regular Updates:</strong> Clear, ongoing communication about your case status.</li>
<li><strong>Court Representation:</strong> If necessary, we represent you in negotiations or trial.</li>
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
         <Title
              title="Potential Compensation for Ponzi Scheme Victims"
              left
            />   
 
  <p className="mb-3">Victims may be eligible to recover:</p>
  <ol className="mb-3">
    <li>Lost principal investments.</li>
<li>Interest or expected returns.</li>
<li>Legal fees and costs.</li>
<li>Other damages caused by the fraud.</li>
 </ol>
<p>Recovery depends on the specifics of each case and available assets.</p>
<h3 className="mb-2 mt-2">How to Protect Yourself Moving Forward</h3>
<ol className="mb-2">
<li>Always verify investment opportunities through regulatory agencies like the <a href="https://www.sec.gov/">SEC</a> or <a href="https://www.finra.org/">FINRA</a>.</li>
<li>Be wary of unsolicited offers and high-pressure sales tactics.</li>
<li>Keep detailed records of all investment documents and communications.</li>
<li>Consult a trusted attorney before making large or unusual investments.</li>
</ol>
 
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link href="/contact-us" className="btn-after !text-black">
                Contact Us
              </Link>
            </div>
          </motion.div>
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
              title="Why Choose Baldwin Mader Law Group?"
            />
            <p className="mb-2">
           With over 70 years of combined experience, our <a href="https://baldwinlawgroup.com/attorney-profiles" className="underline">team offers:</a>
            </p>
          
          <ol className="mb-2">
            <li><strong>Free Confidential Consultation —</strong> Assess your case and explain options at no cost.</li>
<li><strong>Thorough Investigation —</strong> Uncover the full scope of fraud and responsible parties.</li>
<li><strong>Expertise in Securities Litigation —</strong> Skilled in handling complex Ponzi scheme cases.</li>
<li><strong>Aggressive Representation —</strong> Dedicated to recovering your investment losses.</li>
<li><strong>Clear Communication —</strong> We keep you informed and explain legal matters in plain terms.</li>

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
        <div className="space-y-4">
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">Can I write off Ponzi scheme losses on my taxes?</h3>

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
   Yes, Ponzi scheme losses may be deductible as theft losses under IRS rules, but specific requirements and limits apply. It’s best to consult a tax professional to understand your eligibility and how to claim the deduction properly.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">Who should I report a Ponzi scheme to?</h3>

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
   You can report a Ponzi scheme to several authorities, including the Securities and Exchange Commission (SEC), the Federal Bureau of Investigation (FBI), and your state’s securities regulator. Reporting helps protect others and supports investigations.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">What qualifies as a Ponzi scheme according to the IRS?</h3>

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
   The IRS defines a Ponzi scheme as an investment fraud where returns to earlier investors are paid from new investors’ funds, rather than legitimate profits. This classification impacts tax treatment of losses and potential criminal investigations.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">What are the main elements of a Ponzi scheme?</h3>

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
   A Ponzi scheme typically involves:
    </p>
    <ol>
      <li>Promises of high, consistent returns with little risk.</li>
<li>Payments to early investors funded by new investors’ money.</li>
<li>Eventual collapse when new investments stop, leading to losses for most participants.</li>
    </ol>
  </details>
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
   We offer a free consultation to review your case, conduct a thorough investigation, pursue all legal remedies, and advocate aggressively on your behalf — keeping you informed throughout the process.
    </p>
    
  </details>

</div>
      </div>
    </section>
     <section className="padding-y bg-slate-100">
      <div className="container">
        <div className="text-center mb-6">
          <Title
              title="Schedule Your Free Consultation Today"
              center
            />
            <p>If you believe you have been a victim of a Ponzi scheme, don’t wait. Contact Baldwin Mader Law Group to discuss your case with an experienced attorney who can help you understand your rights and explore your options.</p>
            <p className="text-4xl my-6 text-primary font-bold">Call  <a href="tel:310-363-2031">310-363-2031</a></p>
        </div>
        
      </div>
    </section>
    </Layout>
  );
}
