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
export default function InvestmentFraudLawyer() {
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
      <SEO title={`Investment & Securities Fraud Lawyers & Attorney Near me | California `}
        description={`Looking for trusted investment or securities fraud lawyers near you in California? Baldwin Mader Law Group offers experienced legal help for stockbroker fraud. Visit us in Manhattan Beach or call today for a consultation.
`}
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
              Investment Fraud Attorney California
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
           Lost money due to a dishonest broker or investment scheme? We can help. <br />
           Baldwin Mader Law Group specializes in investment fraud and securities litigation, proudly serving clients throughout California. With over 70 years of combined experience, our attorneys represent defrauded investors in FINRA arbitration, state court, and federal court—working tirelessly to recover losses and hold negligent financial professionals accountable.
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
              title="Who We Help"
              left
            />
           
            <p className="mb-2">
           We represent clients across California who’ve been harmed by unethical or negligent financial professionals. Our clients include:
            </p>
            <p className="mb-3">Individual investors and retirees</p>
            <p className="mb-3">Business owners and entrepreneurs</p>
            <p className="mb-3">Trusts and estates</p>
            <p className="mb-3">Institutional investors</p>
           <p className="mb-2">
           Whether you lost savings, retirement funds, or capital due to fraud, we’re ready to help.
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
  <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
  <Title title="Types of Investment Fraud We Handle" className="text-center"/>
 <p className="mb-6 text-center">Investment fraud can take many forms—often disguised as legitimate opportunities. Our firm handles a wide range of cases, including:</p>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-0">
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> <a href="https://baldwinlawgroup.com/ponzi-scheme-law-firm">Ponzi and pyramid schemes</a>
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Misrepresentation or omissions
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Unsuitable investment recommendations
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Excessive trading (churning)
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Unauthorized trading
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Breach of fiduciary duty
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Variable annuity fraud
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Private placement fraud
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Margin abuse
            </div>
      <div className="grid-item">
                <span className="text-green-600 mr-3 text-xl">&#10003;</span> Failure to supervise
            </div>
     </div>
     <p className="mb-6 text-center">We investigate the details and pursue every avenue for financial recovery.</p>
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
              title="How We Help You Recover"
            />
            <p className="mb-2">
            Investment fraud is more than a financial loss—it’s a betrayal of trust. Our team works to:
            </p>
           <ol className="mb-2">
            <li><strong>Analyze Investment Activity</strong><br />
We review your portfolio, trades, and communications to identify red flags, excessive fees, or misconduct.</li>
<li><strong>Hold Parties Accountable</strong><br />
We pursue claims against advisors, brokers, firms, and any third parties involved in the scheme.</li>
<li><strong>Recover Your Losses</strong><br />
We seek restitution through arbitration, settlement, or litigation—depending on what’s best for your case.</li>

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
              title="Why Choose Baldwin Mader Law Group"
              left
            />
           
           <ol className="mb-4">
            <li><strong>Exclusive Focus on Securities Law</strong>
We handle securities fraud and broker misconduct cases only—and we’ve done it for decades. </li>
<li><strong>Proven Track Record</strong>
We’ve helped clients recover substantial losses from negligent and fraudulent investment activity. </li>
<li><strong>Detailed Case Investigation</strong>
Every case starts with a thorough review of your accounts and investment history to build a strong, evidence-backed strategy. </li>
<li><strong>Compassionate, Confidential Support</strong>
We understand how devastating fraud can be. Our team offers respectful, judgment-free guidance from start to finish. </li>
<li><strong>Aggressive Representation</strong>
Whether in FINRA arbitration or court, we fight relentlessly to protect your interests. </li>

           
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
    <section className="padding-y bg-slate-100">
      <div className="container">
        <div className="text-center mb-6">
          <Title
              title="Talk to Us"
              center
            />
            <p>If you suspect investment fraud or have already suffered financial loss, don’t wait. Contact Baldwin Mader Law Group for a confidential consultation. We’ll review your case, explain your options, and help you take the first step toward recovery.</p>
            <p className="text-4xl my-6 text-primary font-bold">Call  <a href="tel:310-363-2031">310-363-2031</a></p>
        </div>
        <ContactForm />
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
      <h3 className="font-medium text-lg">What are signs of investment fraud?</h3>

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

    <ul className="mt-4 px-4 leading-relaxed text-gray-700">
    <li>Promises of guaranteed or unusually high returns</li>
<li>Pressure to invest quickly</li>
<li>Lack of transparency or vague explanations</li>
<li>Difficulty accessing your funds</li>
    </ul>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">What should I do if I suspect fraud?</h3>

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
   Stop investing immediately. Save all documents—statements, emails, brochures—and contact an investment fraud attorney right away.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">Can I recover losses from a Ponzi scheme?</h3>

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
    Yes. We may pursue claims against the fraudster, related institutions, or through regulators like the SEC.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">How long does recovery take?</h3>

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
    Each case is different. We’ll give you a personalized estimate after reviewing your case, our team will provide a more specific estimate based on your situation during a consultation.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h3 className="font-medium text-lg">I feel ashamed about being defrauded. What should I do?</h3>

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
    You’re not alone. Fraudsters target even the most financially savvy. We offer judgment-free, confidential support focused on helping you recover.
    </p>
  </details>
</div>
      </div>
    </section>
    
    </Layout>
  );
}
