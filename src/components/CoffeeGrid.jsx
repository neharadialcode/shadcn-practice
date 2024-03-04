import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoffeeGrid = () => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 max-w-[1920px] mx-auto">
      <Link href="#" className="relative col-span-2">
        <Image
          className="w-full xl:h-[240px] h-full object-cover min-h-[100px]"
          src="/assets/images/png/arabica_coffee.png"
          alt="arabica_coffee"
          height={100}
          width={200}
        />
        <div className="absolute xl:left-[64px] left-3 xl:bottom-10 bottom-3">
          <h2 className="lg:text-[40px] md:text-3xl sm:text-2xl text-xl  lg:leading-[48px] leading-[100%] text-white font-extrabold">
            Arabica
          </h2>
          <p className="font-light lg:text-2xl sm:text-xl text-base lg:leading-[28.8px] leading-[100%] text-white">
            Coffee
          </p>
        </div>
      </Link>
      <Link href="#" className="relative row-span-2">
        <Image
          className="w-full xl:h-[480px] h-full object-cover"
          src="/assets/images/png/robusta_coffee.png"
          alt="robusta_coffee"
          height={100}
          width={200}
        />
        <div className="absolute xl:left-[64px] left-3 xl:bottom-10 bottom-3">
          <h2 className="lg:text-[40px] md:text-3xl sm:text-2xl text-xl  lg:leading-[48px] leading-[100%] text-white font-extrabold">
            Robusta
          </h2>
          <p className="font-light lg:text-2xl sm:text-xl text-base lg:leading-[28.8px] leading-[100%] text-white">
            Coffee
          </p>
        </div>
      </Link>
      <Link href="#" className="relative">
        <Image
          className="w-full xl:h-[240px] h-full object-cover min-h-[100px]"
          src="/assets/images/png/liberica_coffee.png"
          alt="liberica_coffee"
          height={100}
          width={200}
        />
        <div className="absolute xl:left-[64px] left-3 xl:bottom-10 bottom-3">
          <h2 className="lg:text-[40px] md:text-3xl sm:text-2xl text-xl  lg:leading-[48px] leading-[100%] text-white font-extrabold">
            Liberica
          </h2>
          <p className="font-light lg:text-2xl sm:text-xl text-base lg:leading-[28.8px] leading-[100%] text-white">
            Coffee
          </p>
        </div>
      </Link>
      <Link href="#" className="relative">
        <Image
          className="w-full xl:h-[240px] h-full object-cover min-h-[100px]"
          src="/assets/images/png/excelsa_coffee.png"
          alt="excelsa_coffee"
          height={100}
          width={200}
        />
        <div className="absolute xl:left-[64px] left-3 xl:bottom-10 bottom-3">
          <h2 className="lg:text-[40px] md:text-3xl sm:text-2xl text-xl  lg:leading-[48px] leading-[100%] text-white font-extrabold">
            Excelsa
          </h2>
          <p className="font-light lg:text-2xl sm:text-xl text-base lg:leading-[28.8px] leading-[100%] text-white">
            Coffee
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CoffeeGrid;
