import Image from "next/image";
import React from "react";
import { BlogData } from "./Helper";
import { CalenderIcon } from "./Icons";
const Blog = () => {
  return (
    <div className="container custom_container mx-auto py-12 px-4 lg:px-3">
      <h2 className="text-center font-medium sm:text-3xl text-3xl md:text-4xxl text-DarkBlack mb-5 sm:mb-8 lg:mb-12">
        Latest <span className="font-extrabold text-[#d3756b]">Blog </span>
        posts
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        <div className="xl:w-5/12 lg:w-9/12 flex flex-col gap-4 sm:gap-6 md:gap-8 xl:gap-10 lg:pe-5">
          {BlogData.map((data, index) => (
            <div
              className="flex  sm:gap-5 flex-col sm:flex-row items-center lg:gap-6 max-w-[400px] sm:max-w-[unset] mx-auto"
              key={index}
            >
              <div className="relative mt-4 w-7/12 sm:mt-0 sm:w-4/12 xl:w-8/12">
                <Image
                  className="w-full"
                  height={134}
                  width={170}
                  src={data.CupImage}
                  alt="coffee"
                />
                <button className="absolute bg-offWhite px-4 py-2 uppercase text-xs font-semibold text-DarkBlack rounded-[64px] sm:top-4 top-2 start-2 sm:start-4 hover: hover:bg-lightOrange transition-all duration-300">
                  Bean
                </button>
              </div>
              <div className="sm:w-8/12 md:w-full">
                <p className="text-lightGray text-sm pt-3 sm:pt-0 lg:leading-[18px] text-center sm:text-start flex gap-[6px] justify-center sm:justify-start">
                  <span>
                    <CalenderIcon />
                  </span>
                  {data.BlogDate}
                </p>
                <h3 className="mt-2 mb-1 font-semibold text-base text-DarkBlack text-center sm:text-start">
                  {data.title}
                </h3>
                <p className="text-DarkBlack opacity-75 text-sm font-light sm:leading-[19.6px] text-center sm:text-start px-3 sm:px-0 text_ellips_coffee">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="xl:w-7/12 lg:w-9/12 pt-8 xl:pt-0 xl:ps-5">
          <div className="relative">
            <Image
              className="w-full"
              height={320}
              width={640}
              src="/assets/chemex-coffee.png"
              alt="coffee"
            />
            <button className="absolute uppercase bg-offWhite px-4 py-2 text-xs font-semibold text-DarkBlack rounded-[64px] sm:top-4 top-2 start-2 sm:start-4 hover: hover:bg-lightOrange transition-all duration-300">
              Coffee
            </button>
          </div>
          <p className="text-lightGray text-sm mt-3 xl:mt-4 leading-[18px] flex gap-[6px] justify-center sm:justify-start">
            <span>
              <CalenderIcon />
            </span>
            September 18, 20230
          </p>
          <h3 className="xl:mt-4 mt-2 mb-2 font-semibold text-lg text-DarkBlack lg:leading-[27px] text-center sm:text-start">
            How To Make Chemex Coffee
          </h3>
          <p className="text-DarkBlack opacity-75 text-sm font-light sm:leading-[19.6px] text_ellips_chemex text-center sm:text-start">
            Pour over coffee sounds complicated, but this coffee brewing process
            is surprisingly simple and the results can be amazing with just a
            little practice. If you drink a single cup each morning, or want to
            try different types of coffee, making pour over coffee can be even
            easier than setting up your home coffee machine (bonus — cleanup
            takes seconds). And because you’re in control of factors like water
            temperature and brew time, you can expect amazing flavor in the
            finished cup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
