import Image from "@/components/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="">
      <div id="cta" className="">
        <div className="relative isolate overflow-hidden">
          <Image
            src="/images/cta/image-5.jpg"
            className="!absolute h-full inset-0"
            imageClassName="object-cover object-bottom"
            alt="cta-logo"
          />

          <div className="container z-10 relative py-40 flex sm:items-center flex-col text-center !max-w-3xl">
            <h2 className="text-white font-vidaloka mb-4 sm:text-center uppercase">
              Start your journey to financial recovery.
            </h2>

            <Link
              href="/contact-us"
              className="w-fit btn btn-default max-sm:mx-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
