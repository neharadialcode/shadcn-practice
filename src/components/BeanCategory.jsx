import { Accordion } from "@/components/ui/accordion";
import CategoryProduct from "./CategoryProduct";
import { CrossIcon } from "./Icons";
import RoastLevel from "./RoastLevel";
import { Button } from "./ui/button";
import CoffeeLocation from "./CoffeeLocation";
import { useState } from "react";

const BeanCategory = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (event) => {
    const { type, id } = event.target;
    if (type === "radio") {
      if (!event.target.checked) {
        return; // Ignore unselecting radio buttons
      }
      setSelectedValues([
        id,
        ...selectedValues.filter((value) => value.startsWith("CheckBox")),
      ]);
    } else if (type === "checkbox") {
      if (event.target.checked) {
        setSelectedValues((prevValues) => [...prevValues, id]);
      } else {
        setSelectedValues((prevValues) =>
          prevValues.filter((value) => value !== id)
        );
      }
    } else if (type === "button") {
      // Toggle the value in the array
      if (selectedValues.includes(id)) {
        setSelectedValues((prevValues) =>
          prevValues.filter((value) => value !== id)
        );
      } else {
        setSelectedValues((prevValues) => [...prevValues, id]);
      }
    }
  };

  return (
    <div className="pt-[45px] md:pb-20 pb-[45px] max-w-[1120px] mx-auto xl:px-0 px-3">
      <div className="flex gap-6 sm:items-center sm:flex-row flex-col mb-10">
        <h2 className="font-semibold text-[32px] leading-[38.4px] text-[#090909] whitespace-nowrap">
          Category Page
        </h2>
        <div className="flex gap-3 items-center w-full overflow-auto">
          {selectedValues.map((selected) => (
            <Button
              key={selected}
              className="flex items-center py-3 px-4 text-base font-normal text-[#090909] rounded-[24px] bg-[#F2F4F4] h-full hover:opacity-80"
              onClick={() => handleChange({ target: { type: 'button', id: selected } })}
            >
              {selected}
              <span className="ms-1">
                <CrossIcon />
              </span>
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-10">
        <div className="lg:max-w-[400px] md:max-w-[300px] w-full">
          <Accordion type="single" collapsible className="w-full">
            <RoastLevel selectedValues={selectedValues} handleChange={handleChange} />
            <CoffeeLocation selectedValues={selectedValues} handleChange={handleChange} />
          </Accordion>
        </div>
        <CategoryProduct selectedValues={selectedValues} handleChange={handleChange}/>
      </div>
    </div>
  );
};

export default BeanCategory;
