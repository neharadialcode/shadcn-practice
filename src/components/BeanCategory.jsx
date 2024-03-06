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
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import CategoryProduct from "./CategoryProduct";

const BeanCategory = () => {
  return (
    <div className="pt-[45px] md:pb-20 pb-[45px] max-w-[1120px] mx-auto xl:px-0 px-3">
      <div className="flex gap-6 sm:items-center sm:flex-row flex-col mb-10">
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
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-10">
        <div className="lg:max-w-[400px] md:max-w-[300px] w-full">
          <Accordion type="single" collapsible className="w-full">
            {beanCategories.map((category, index) => {
              return (
                <AccordionItem
                  key={index}
                  value={category.id}
                  defaultOpen={category.id === 1}
                  className="mb-8  border-b-0"
                >
                  <AccordionTrigger className="ps-6 pe-5 py-4 bg-[#f9fafa] rounded-2xl hover:no-underline font-medium text-lg text-[#090909]">
                    {category.heading}
                  </AccordionTrigger>
                  <AccordionContent className="pt-5">
                    <div className="relative mb-[30px]">
                      <Label htmlFor="icon">
                        <span className="opacity-40 absolute right-4 top-[50%] -translate-y-[50%]">
                          <BlackSearch />
                        </span>
                      </Label>
                      <Input
                        id="icon"
                        placeholder={category.placeholder}
                        className="border-0 pb-4 px-4 border-b rounded-none focus-visible:outline-none focus-visible:ring-0"
                      />
                    </div>
                    <div className="px-4">{category.type}</div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        <CategoryProduct />
      </div>
    </div>
  );
};

export default BeanCategory;
