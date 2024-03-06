import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
export const RadioInputs = (props) => {
  return (
    <>
      <RadioGroup defaultValue="comfortable" className={`gap-0 ${props.flex}`}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label className="text-base text-[#090909] font-normal" htmlFor="r1">
            {props.firstName}
          </Label>
        </div>
        <div className={`flex items-center space-x-2 pt-4 ${props.padding} `}>
          <RadioGroupItem value="comfortable" id="r2" />
          <Label className="text-base text-[#090909] font-normal" htmlFor="r2">
            {props.secondName}
          </Label>
        </div>
        <div className={`flex items-center space-x-2 pt-4 ${props.className}`}>
          <RadioGroupItem value="compact" id="r3" />
          <Label className="text-base text-[#090909] font-normal" htmlFor="r3">
            {props.thirdName}
          </Label>
        </div>
      </RadioGroup>
    </>
  );
};
export const CheckboxInputs = (props) => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox id="first" />
        <label
          htmlFor="first"
          className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {props.firstName}
        </label>
      </div>
      <div className="flex items-center pt-4 space-x-2">
        <Checkbox id="second" />
        <label
          htmlFor="second"
          className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {props.secondName}
        </label>
      </div>
      <div className={`flex items-center pt-4 space-x-2 ${props.className}`}>
        <Checkbox id="third" />
        <label
          htmlFor="third"
          className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {props.thirdName}
        </label>
      </div>
    </>
  );
};

export const ImageInput = () => {
  return (
    <>
      <Image
        className="max-w-[400px] w-full"
        src="/assets/images/png/range_slide.png"
        alt="range_slide"
        height={43}
        width={400}
      />
    </>
  );
};
