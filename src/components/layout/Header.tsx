import { INFO } from '@/constants';
import navigations from '@/constants/navigations';
import socialLinks from '@/constants/socialLinks';
import { cn } from '@/utils';
import formatPhone from '@/utils/formatPhone';
import {
  faEnvelopeSquare,
  faPhoneSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from '../image';
import Sidebar from './Sidebar';
import { GET_MENUS } from '@/api/queries';

const Header = ({ topHeader = true }: { topHeader?: boolean; }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {topHeader && (
        <div className={`border-b-[1px] hidden lg:block py-3 lg:py-0 border-gray-100/20 bg-transparent w-full z-20 relative`}>
          <div className="container flex items-center justify-between gap-4">
            <ul className="flex items-center gap-y-4 sm:gap-y-4 gap-x-10 sm:gap-x-10 flex-wrap h-[45px]">
              <li>
                <Link
                  href={`tel:${formatPhone(INFO.phone)}`}
                  className="flex items-center gap-2 group"
                  target="_blank" rel='noreferrer'>
                  <span>
                    <FontAwesomeIcon
                      icon={faPhoneSquare}
                      className={`w-[1.05rem] text-white`}
                    />
                  </span>
                  <div className="flex flex-col">
                    <p className={`text-white text-base group-hover:text-primary transition-colors duration-300 leading-tight`}>
                      {INFO.phone.replaceAll(')', '').replaceAll('(', '')}
                    </p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href={`mailto:${INFO.email}`}
                  className="flex items-center gap-2 group"
                  target="_blank" rel='noreferrer'>
                  <span>
                    <FontAwesomeIcon
                      icon={faEnvelopeSquare}
                      className={`w-[1.05rem] text-white`}
                    />
                  </span>
                  <div className="flex flex-col">
                    <p className={`text-white text-base group-hover:text-primary transition-colors duration-300 leading-tight`}>
                      Email Us Here
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="flex gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm leading-6 flex items-start gap-2"
                  target="_blank" rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-[1.9rem] h-[1.9rem] text-white hover:text-primary duration-300 transition-all rounded-full p-1.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="sticky top-0 left-0 right-0 z-50 h-20">
        <header
          className={cn(
            'w-full bg-transparent top-0 transition-colors duration-300',
            isScrolled && 'bg-white/80 backdrop-blur-sm shadow-lg'
          )}>
          <nav className="container flex justify-between py-4 items-center">
            <div className="flex lg:flex-1">
              <Link
                href="/"
                className={cn(
                  'py-2 text-white font-bold uppercase',
                  isScrolled && 'text-black'
                )}>
                <Image
                  className="h-10 xl:h-12 aspect-[500/134]"
                  imageClassName={cn(!isScrolled && 'invert')}
                  src="/logo5.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="hidden lg:flex items-center gap-x-8 xl:gap-x-8 mr-8">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {navigations.map((item) => (
                  <React.Fragment key={item.id}>
                    <li className="relative group py-3">
                      <Link
                        href={item.href}
                        className={cn(
                          'transition-all duration-300 text-md font-normal cursor-pointer hover:text-primary text-white',
                          isScrolled && 'text-black'
                        )}>
                        {item.title}
                      </Link>
                      {item.submenu && (
                        <ul className="absolute left-0 mt-3 -pt-2 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg w-48">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.id}>
                              <Link
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                    {/* Mobile Menu Submenu Direct Show */}
                    {item.submenu && (
                      <ul className="flex flex-col mt-2 lg:hidden">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                ))}
                <li className='relative group py-3'>
                  <Link
                    href={"contact-us"}
                    className={cn(
                      'transition-all duration-300 text-md font-bold rounded-full p-4 cursor-pointer border-2 border-white text-white hover:text-primary hover:border-primary ',
                      isScrolled && 'border-black text-black'
                    )}>
                    Book A Consultation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:hidden sm:flex">
              <Sidebar isScrolled={isScrolled} />
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
