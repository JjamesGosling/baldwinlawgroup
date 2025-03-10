import Image from "@/components/image";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const heroSliderImages = [
  "/images/hero/image-20.jpg",
  "/images/hero/image-1.png",
  "/images/hero/test-4.jpg",
  // "/images/hero/image-14.jpg",
  "/images/hero/image-18.jpg",
  "/images/hero/image-19.jpg",
  // "/images/hero/image-21.jpg",
  // "/images/hero/image-22.jpg",
  // "/images/hero/hero-slide-01.webp",
  // "/images/hero/hero-slide-02.webp",
  // "/images/hero/hero-slide-03.webp",
];
const Hero = () => {
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
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
              {/* <motion.p
                className="text-white tracking-widest text-lg"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                exit="exit"
                variants={motionVariants.fadeUp(40)}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Investment Fraud Lawyers
                <br className="sm:block hidden" />
              </motion.p> */}

              <motion.h1
                className="text-gray-200 mt-4"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                exit="exit"
                variants={motionVariants.fadeUp(40)}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Baldwin Mader <br /> Law Group
                <br className="sm:block hidden" />
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
               70 Years of Collective Experience in Securities Litigation, FINRA Arbitrations, Investment Fraud, Ponzi Schemes, Whistleblowers Before the Securities and Exchange Commission & Elder Financial Fraud
              </motion.p>

              {/* <motion.div
                className="mt-6 flex flex-wrap justify-center sm:justify-start items-center gap-y-6 gap-x-10"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                exit="exit"
                variants={motionVariants.fadeUp(40)}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/contact-us" className="btn-after">
                  Contact Us
                </Link>
              </motion.div> */}
            </div>
          </div>
      </div>
      
    </div>
    </div>
        {/* <div className="container z-10 relative h-full flex flex-col justify-center flex-1">
         
          
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
