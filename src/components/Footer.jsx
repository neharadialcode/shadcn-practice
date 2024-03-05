import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LocationIcon, MailIcon, PhoneIcon } from "./Icons";
let currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="mx-3">
      <div className="max-w-[1360px] mx-auto bg-[url('/assets/images/png/footer_bg.png')] bg-cover xl:bg-[length:100%_100%] bg-center bg-no-repeat rounded-[32px_32px_0px_0px]">
        <div className="max-w-[1232px] mx-auto md:pb-[55px] md:pt-12 py-12 xl:px-0 px-3">
          <div className="flex justify-between flex-wrap gap-4">
            <div className="w-full md:w-5/12">
              <div className="md:max-w-[378px]">
                <Link href="/">
                  <Image
                    width={203}
                    height={56}
                    className="w-[160px] lg:w-[204px]"
                    src="/assets/images/svg/footer_logo.svg"
                    alt="logo"
                  />
                </Link>
                <p className="text-white pt-4 text-xs sm:text-sm font-normal leading-[160%] opacity-70">
                  We seek to establish a comprehensive online platform dedicated
                  to celebrating the diversity of coffee beans sourced from
                  local roasters worldwide.
                </p>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-5/12">
              <div className="flex justify-between flex-wrap gap-5 sm:gap-0">
                <ul>
                  <li className="text-sm md:text-base font-semibold  text-white  transition-all ease-in-out duration-300">
                    Coffees
                  </li>
                  <li className="pt-3 md:pt-4 mb-2">
                    <Link
                      href="#excelsa"
                      className="text-xs md:text-sm font-normal hover:opacity-100 opacity-70 text-white  transition-all ease-in-out duration-300 "
                    >
                      Excelsa
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#liberica"
                      className="text-xs md:text-sm font-normal hover:opacity-100 opacity-70 text-white  transition-all ease-in-out duration-300 "
                    >
                      Liberica
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#arabica"
                      className="text-xs md:text-sm font-normal hover:opacity-100 opacity-70 text-white  transition-all ease-in-out duration-300 "
                    >
                      Arabica
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#robusta"
                      className="text-xs md:text-sm font-normal hover:opacity-100 opacity-70 text-white  transition-all ease-in-out duration-300 "
                    >
                      Robusta
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="text-sm md:text-base font-semibold text-white  transition-all ease-in-out duration-300">
                    Quick Links
                  </li>
                  <li className="pt-3 md:pt-4 mb-2">
                    <Link
                      href="#about-us"
                      className="text-xs md:text-sm font-normal hover:opacity-100 opacity-70 text-white  transition-all ease-in-out duration-300 "
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#appointment"
                      className="text-xs md:text-sm font-normal hover:opacity-100 opacity-70 text-white  transition-all ease-in-out duration-300 "
                    >
                      Appointment
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#contact"
                      className="text-xs md:text-sm font-normal hover:opacity-100 opacity-70 text-white  transition-all ease-in-out duration-300 "
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="text-sm md:text-base font-semibold  text-white  transition-all ease-in-out duration-300">
                    Contact us
                  </li>
                  <li className="pt-4">
                    <Link
                      target="_blank"
                      href="tel:+19992454563"
                      className="flex gap-2 lg:gap-3 xl:gap-4 hover:opacity-75 transition-all ease-in-out duration-300 items-center text-xs md:text-sm font-normal  text-white  "
                    >
                      <PhoneIcon />
                      +1 (999) 245 4563
                    </Link>
                  </li>
                  <li className="pt-5">
                    <Link
                      href="mailto:contact@CoffeeBean.com"
                      className="flex gap-2 lg:gap-3 xl:gap-4 items-center text-xs md:text-sm hover:opacity-75 transition-all ease-in-out duration-300 font-normal text-white  "
                    >
                      <MailIcon />
                      contact@CoffeeBean.com
                    </Link>
                  </li>
                  <li className="pt-5">
                    <Link
                      target="_blank"
                      href="#location"
                      className="flex gap-2 lg:gap-3 xl:gap-4 items-center text-xs md:text-sm font-normal hover:opacity-75 transition-all ease-in-out duration-300 text-white  "
                    >
                      <LocationIcon />
                      USA, Street 22
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#141414] py-4 rounded-[0px_0px_32px_32px] max-w-[1360px] mx-auto px-3">
        <p className="text-center text-white text-xs md:text-sm font-normal">
          Coffee Bean - Copyright © {currentYear}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
