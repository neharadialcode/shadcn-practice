import React from "react";
import { Badge } from "./ui/badge";

export const ChocolateBadge = (props) => {
  return (
    <div>
      <Badge className="bg-[#776B5D] bg-opacity-10 rounded-[64px] uppercase px-[10px] py-[6px] text-[10px] font-semibold leading-[12.6px] text-[#776B5D]">
        {props.name}
      </Badge>
    </div>
  );
};
export const GreenBadge = (props) => {
  return (
    <div>
      <Badge className="bg-[#e7f3e3] rounded-[64px] uppercase px-[10px] py-[6px] text-[10px] font-semibold leading-[12.6px] text-[#60AF42]">
        {props.name}
      </Badge>
    </div>
  );
};
export const OrangeBadge = (props) => {
  return (
    <div>
      <Badge className="bg-[#fff5d4] rounded-[64px] uppercase px-[10px] py-[6px] text-[10px] font-semibold leading-[12.6px] text-[#d9bd2d]">
        {props.name}
      </Badge>
    </div>
  );
};
export const RedeBadge = (props) => {
  return (
    <div>
      <Badge className="bg-[#f9ebe9] rounded-[64px] uppercase px-[10px] py-[6px] text-[10px] font-semibold leading-[12.6px] text-[#C53526]">
        {props.name}
      </Badge>
    </div>
  );
};
