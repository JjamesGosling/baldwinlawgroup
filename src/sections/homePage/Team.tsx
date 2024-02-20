import Image from "@/components/image";
import Title from "@/components/title";
import socialLinks from "@/constants/socialLinks";
import team from "@/constants/team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Team = () => {
  return (
    <section className="bg-[#F1F5FA] pb-10 !pt-40">
      <div className="container">
        <Title title="Attorney Profiles" subTitle="Meet the crew" center />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((item) => (
            <>
              {/* <div className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 hover:border-gray-300 rounded-sm">
                <div className="flex h-full items-center gap-6 bg-white">
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    className="h-full w-40 min-h-[10rem] overflow-hidden"
                    imageClassName="object-cover"
                  />
                  <div>
                    <h3 className="font-lato font-bold text-xl mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div> */}

              <div className="shadow-sm hover:shadow-lg transition-all duration-500 hover:border-gray-300 rounded-sm">
                <div className="flex h-full flex-col bg-white">
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    className="h-full w-full min-h-[20rem] overflow-hidden"
                    imageClassName="object-cover object-top"
                  />
                  <div className="py-8 px-6 flex flex-col items-center text-center">
                    <h3 className="font-lato font-bold text-xl mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-400">{item.role}</p>
                    <div className="flex gap-2 mt-2">
                      {socialLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900 flex items-start gap-2"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="w-8 h-8 text-gray-500 rounded-full p-1.5"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
