import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BlackSearch } from "./Icons";
import { RadioInputs } from "./InputAll";
import { useState } from "react";

const RoastLevel = ({selectedValues, handleChange}) => {
  const radioData = [
    { id: "RadioOne", label: "Radio 1" },
    { id: "RadioTwo", label: "Radio 2" },
    { id: "RadioThree", label: "Radio 3" },
    { id: "RadioFour", label: "Radio 4" },
  ];
  const [search, setSearch] = useState(radioData);
  const searchhandler = (val) => {
    const newArr = radioData.filter((obj) =>
      obj.label.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    );
    setSearch(newArr);
  };
  return (
    <AccordionItem value="1" defaultOpen="1" className="mb-8  border-b-0">
      <AccordionTrigger className="ps-6 pe-5 py-4 bg-[#f9fafa] rounded-2xl hover:no-underline font-medium text-lg text-[#090909]">
        Roast Level
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
          <RadioInputs search={search} selectedValues={selectedValues} handleChange={handleChange} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default RoastLevel;
