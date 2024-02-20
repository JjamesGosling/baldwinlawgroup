import Image from "@/components/image";
import Title from "@/components/title";
import motionVariants from "@/utils/motionVariants";
import {
  faArrowLeftLong,
  faArrowRight,
  faArrowRightLong,
  faCheckDouble,
  faCircle,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    content: "Experienced Team",
  },
  {
    content: "Proven Track Record",
  },
  {
    content: "Focused Expertise",
  },
  {
    content: "Personalized Service",
  },
];

const About = () => {
  return (
    <section className="padding-y">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-40 lg:gap-16">
          <div className="flex w-full relative mx-auto max-w-xl min-h-[250px] sm:min-h-[350px]">
            <div className="flex w-full whitespace-nowrap relative">
              <p className="font-archivo text-center h-max font-bold text-lg lg:text-2xl text-[#2F373D] absolute top-0 left-0 sm:relative sm:-rotate-90 mt-14 lg:mt-20">
                <span className="text-5xl lg:text-8xl">70</span> <br />
                Years Experience
              </p>
              <Image
                src="/images/about/image-8.jpg"
                alt="about"
                className="h-full w-full min-h-[200px]"
                imageClassName="object-cover"
              />
            </div>
            <Image
              src="/images/about/image-7.jpg"
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
              title="Representing victims of investment fraud"
              subTitle="About Us"
            />
            <p className="mb-6">
              With over 70 years of combined experience, our investment fraud
              lawyers have recovered millions of dollars in hundreds of cases on
              behalf of individuals and institutions. Having handled over 600
              cases involving virtually every type of investment fraud, our
              experience is unparalleled.
            </p>

            <ul className="mb-6 grid grid-cols-2 gap-x-4 gap-y-2 ml-3">
              {features.map((item) => (
                <li
                  key={item.content}
                  className="font-archivo flex items-center gap-4 font-normal text-base text-gray-800"
                >
                  <FontAwesomeIcon icon={faCheckDouble} className="w-4 " />
                  <h3 className="text-base font-lato font-bold">
                    {item.content}
                  </h3>
                </li>
              ))}
            </ul>
            <p className="mb-6">
              We have uncovered major financial and securities fraud nationwide.
              Our results tell our story. Baldwin Mader Law Group has offices in
              San Francisco, Los Angeles, and Palm Springs.
            </p>

            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link href="/contact" className="btn-after !text-black">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
