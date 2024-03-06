import React from "react";
import { Button } from "./ui/button";
import { CrossIcon } from "./Icons";

const BeanCategory = () => {
  return (
    <div className="pt-[45px] md:pb-20 pb-[45px] max-w-[1120px] mx-auto xl:px-0 px-3">
      <div className="flex gap-6 items-center mb-10">
        <h2 className="font-semibold text-[32px] leading-[38.4px] text-[#090909]">
          Category Page
        </h2>
        <div className="flex gap-3 items-center">
          <Button className="flex items-center py-3 px-4 text-base font-normal text-[#090909] rounded-[24px] bg-[#F2F4F4] h-full">
            Coffee
            <span className="ms-1">
              <CrossIcon />
            </span>
          </Button>
          <Button className="flex items-center py-3 px-4 text-base font-normal text-[#090909] rounded-[24px] bg-[#F2F4F4] h-full">
            Dark
            <span className="ms-1">
              <CrossIcon />
            </span>
          </Button>
        </div>
      </div>
      <div className="max-w-[400px]"></div>
    </div>
  );
};

export default BeanCategory;
