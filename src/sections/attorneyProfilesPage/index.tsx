import Image from "@/components/image";
import PageHead from "@/components/pageHead";
import socialLinks from "@/constants/socialLinks";
import team from "@/constants/team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const AttorneyProfilesPage = () => {
  return (
    <>
      <PageHead
        title="Attorney Profiles"
        pageName="Attorney Profiles"
        hasBreadCrumb
      />

      <section className="padding-y">
        <div className="container flex flex-col">
          {team.map((item) => (
            <div className="grid grid-cols-12 gap-10 border-b border-gray-200 pb-14 mb-14 last-of-type:mb-0 last-of-type:pb-10 last-of-type:border-none">
              <div className="col-span-4">
                <div className="flex flex-col gap-4">
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    className="h-full w-full min-h-[24rem] overflow-hidden rounded-sm"
                    imageClassName="object-cover object-top"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-3xl mb-2">{item.name}</h2>
                    <p className="">{item.role}</p>
                  </div>

                  <div className="flex gap-2">
                    {socialLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 border border-gray-300 rounded-sm transition-all duration-300 group hover:bg-primary hover:border-primary hover:text-gray-900 flex items-start gap-2"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="w-8 h-8 text-gray-500 rounded-full p-1.5 group-hover:text-white transition-all duration-300"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-8 flex flex-col gap-10">
                <div>
                  <h2 className="text-3xl mb-4 title-after !text-black">
                    Education
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {item.education.map((ed) => (
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1">
                          <p className="font-bold">{ed.degree}</p>-
                          <p>{ed.year}</p>
                        </div>
                        <p>{ed.institution}</p>
                      </div>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl mb-4 title-after !text-black">
                    Experience
                  </h2>
                  <p>{item.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AttorneyProfilesPage;
