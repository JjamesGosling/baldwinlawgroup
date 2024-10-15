import Testimonials from "@/components/testimonials";
import About from "./About";
import About2 from "./About2";
import Cta from "./Cta";
import Hero from "./Hero";
import Services from "./Services";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";
import Title from "@/components/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const HomePage = ({ posts }: any) => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <About2 />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <section className="bg-[#F1F5FA] pb-10  pt-16">
        <div className="conatiner">
          <div className="grid lg:grid-cols-2 overflow-hidden">
            <article>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52872517.59607392!2d-161.691169406869!3d36.018281840171966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1729017307584!5m2!1sen!2s" width="600"  className="border-0 w-full h-[450px]" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </article>
            <article className="p-5">\
            <Title title="Areas We Serve" subTitle="Your Trusted Partner Across the Regio​" />
            <p className="text-gray-500 mb-5">Baldwin Mader Law Group proudly serves clients across Southern California, other areas including:</p>
            <ul className="mb-6 grid sm:grid-cols-2 gap-x-4 gap-y-2 pl-5 space-y-2">
    <li className="font-archivo flex items-center gap-4 font-normal text-base text-gray-800">
    <FontAwesomeIcon icon={faCheckDouble} className="w-4" />
      House Spring</li>
    <li className="font-archivo flex items-center gap-4 font-normal text-base text-gray-800">
    <FontAwesomeIcon icon={faCheckDouble} className="w-4" />San Francisco</li>
    <li className="font-archivo flex items-center gap-4 font-normal text-base text-gray-800">
    <FontAwesomeIcon icon={faCheckDouble} className="w-4" />Newport Beach</li>
    <li className="font-archivo flex items-center gap-4 font-normal text-base text-gray-800">
    <FontAwesomeIcon icon={faCheckDouble} className="w-4" />San Diego</li>
    <li className="font-archivo flex items-center gap-4 font-normal text-base text-gray-800">
    <FontAwesomeIcon icon={faCheckDouble} className="w-4" />Phoenix</li>
    <li className="font-archivo flex items-center gap-4 font-normal text-base text-gray-800">
    <FontAwesomeIcon icon={faCheckDouble} className="w-4" />Seattle</li>
    <li className="font-archivo flex items-center gap-4 font-normal text-base text-gray-800">
    <FontAwesomeIcon icon={faCheckDouble} className="w-4" />Los Angeles</li>
    <li className="font-archivo flex items-center gap-4 font-normal text-base text-gray-800">
    <FontAwesomeIcon icon={faCheckDouble} className="w-4" />Long Beach</li>
    <li className="font-archivo flex items-center gap-4 font-normal text-base text-gray-800">
    <FontAwesomeIcon icon={faCheckDouble} className="w-4" />Port Wind</li>
</ul>

            </article>
          </div>
        </div>
      </section>
      <Cta />
      
    </>
  );
};

export default HomePage;
