import React from "react";
import { Button } from "./ui/button";
import { BlackSearch, CrossIcon } from "./Icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { beanCategories } from "./Helper";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const BeanCategory = () => {
  return (
    <div className="pt-[45px] md:pb-20 pb-[45px] max-w-[1120px] mx-auto xl:px-0 px-3">
      <div className="flex gap-6 items-center mb-10">
        <h2 className="font-semibold text-[32px] leading-[38.4px] text-[#090909]">
          Category Page
        </h2>
        <div className="flex gap-3 items-center">
          <Button className="flex items-center py-3 px-4 text-base font-normal text-[#090909] rounded-[24px] bg-[#F2F4F4] h-full hover:opacity-80">
            Coffee
            <span className="ms-1">
              <CrossIcon />
            </span>
          </Button>
          <Button className="flex items-center py-3 px-4 text-base font-normal text-[#090909] rounded-[24px] bg-[#F2F4F4] h-full hover:opacity-80">
            Dark
            <span className="ms-1">
              <CrossIcon />
            </span>
          </Button>
        </div>
      </div>
      <div className="max-w-[400px]">
        <Accordion type="single" collapsible className="w-full">
          {beanCategories.map((category, index) => {
            return (
              <AccordionItem
                // key={index}
                value={index}
                defaultOpen={index === 1}
                className="mb-8  border-b-0"
              >
                <AccordionTrigger className="ps-6 pe-5 py-4 bg-[#f9fafa] rounded-2xl">
                  {category.heading}
                </AccordionTrigger>
                <AccordionContent className="pt-5">
                  <div className="relative">
                    <Label htmlFor="icon" className="outline-none border-0">
                      <span className="opacity-40 absolute right-4 top-[50%] -translate-y-[50%]">
                        <BlackSearch />
                      </span>
                    </Label>
                    <Input
                      id="icon"
                      placeholder={category.placeholder}
                      className="border-0 outline-none pb-4 px-4 border-b rounded-none focus:outline-none"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
          {/* <AccordionItem value="item-1" className="  mb-8  border-b-0">
        <AccordionTrigger className="ps-6 pe-5 py-4 bg-[#f9fafa] rounded-2xl">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="pt-5 px-4">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem> */}
        </Accordion>
      </div>
    </div>
  );
};

export default BeanCategory;
