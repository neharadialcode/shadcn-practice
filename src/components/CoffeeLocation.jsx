import React, { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxInputs } from "./InputAll";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BlackSearch } from "./Icons";

const CoffeeLocation = ({selectedValues, handleChange}) => {
  const checkboxData = [
    { id: "CheckBoxOne", label: "CheckBox 1" },
    { id: "CheckBoxTwo", label: "CheckBox 2" },
    { id: "CheckBoxThree", label: "CheckBox 3" },
    { id: "CheckBoxFour", label: "CheckBox 4" },
  ];
  const [search, setSearch] = useState(checkboxData);
  const searchhandler = (val) => {
    const newArr = checkboxData.filter((obj) =>
      obj.label.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    );
    setSearch(newArr);
  };
  return (
    <AccordionItem value="2" className="mb-8  border-b-0">
      <AccordionTrigger className="ps-6 pe-5 py-4 bg-[#f9fafa] rounded-2xl hover:no-underline font-medium text-lg text-[#090909]">
        Coffee Location
      </AccordionTrigger>
      <AccordionContent className="pt-5">
        <div className={`relative mb-[30px]`}>
          <Label htmlFor="icon">
            <span className="opacity-40 absolute right-4 top-[50%] -translate-y-[50%]">
              <BlackSearch />
            </span>
          </Label>
          <Input
            onChange={(e) => searchhandler(e.target.value)}
            id="icon"
            placeholder="Search roast level....."
            className="border-0 pb-4 px-4 border-b rounded-none focus-visible:outline-none focus-visible:ring-0"
          />
        </div>
        <div className="px-4">
          <CheckboxInputs search={search} selectedValues={selectedValues} handleChange={handleChange}  />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CoffeeLocation;
