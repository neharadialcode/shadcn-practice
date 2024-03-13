import React from "react";
 import Image from "next/image";
export const RadioInputs = ({ selectedValues, handleChange, search }) => {
  return (
    <>
      {search.map((obj, i) => (
        <label
          key={i}
          className="text-base text-[#090909] font-normal cursor-pointer flex items-center space-x-2 py-1 gap-1"
          htmlFor={obj.id}
        >
          <input
            type="radio"
            name="radioGroup"
            id={obj.id}
            checked={selectedValues.includes(obj.id)}
            onChange={handleChange}
          />
          {obj.label}
        </label>
      ))}
    </>
  );
};
export const CheckboxInputs = ({ selectedValues, handleChange, search }) => {
  return (
    <>
      {search.map((obj, i) => (
           <label key={i}  className="text-base text-[#090909] font-normal cursor-pointer flex items-center space-x-2 py-1 gap-1" htmlFor={obj.id}>
            <input
              type="checkbox"
              name={obj.id}
              id={obj.id}
              checked={selectedValues.includes(obj.id)}
              onChange={handleChange}
            />
            {obj.label}
          </label>  
       ))}
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
