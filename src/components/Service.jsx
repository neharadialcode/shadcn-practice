import React from "react";
import { ServiceData } from "./common/Helper";
import Image from "next/image";

const Services = () => {
  return (
    <div className="custom_container container mx-auto pt-12 lg:pt-14 px-4 lg:px-3 lg:pb-8">
      <div className="flex flex-wrap justify-center">
        {ServiceData.map((data, index) => (
          <div
            className={`lg:w-4/12 md:w-6/12 sm:w-9/12 w-11/12 flex flex-col items-center px-3 ${
              index === 1 ? "pt-7 md:pt-0" : index === 2 ? "pt-7 lg:pt-0" : ""
            }`}
            key={index}
          >
            {/* <Image height={50} width={50} src={data.icon} alt="icon" /> */}
            <h3 className="text-black font-semibold text-lg mb-2 mt-3 lg:mt-5 text-center leading-normal">
              {data.title}
            </h3>
            <p className="text-lightBlack font-light text-sm text-center sm:leading-[19.6px]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
