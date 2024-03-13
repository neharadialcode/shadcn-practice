import { Accordion } from "@/components/ui/accordion";
import CategoryProduct from "./CategoryProduct";
import { CrossIcon } from "./Icons";
import RoastLevel from "./RoastLevel";
import { Button } from "./ui/button";
import CoffeeLocation from "./CoffeeLocation";

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
            <RoastLevel />
            <CoffeeLocation />
          </Accordion>
        </div>
        <CategoryProduct />
      </div>
    </div>
  );
};

export default BeanCategory;
