import React from "react";
import { Badge } from "./ui/badge";

export const ChocolateBadge = (props) => {
  const name = props;
  return (
    <div>
      <Badge className="bg-[#f1fdef] rounded-[64px] uppercase px-[10px] py-[6px] text-[10px] font-semibold leading-[12.6px] text-[#776B5D]">
        {name}
      </Badge>
    </div>
  );
};
export const GreenBadge = (props) => {
  const name = props;
  return (
    <div>
      <Badge className="bg-[#e7f3e3] rounded-[64px] uppercase px-[10px] py-[6px] text-[10px] font-semibold leading-[12.6px] text-[#60AF42]">
        {name}
      </Badge>
    </div>
  );
};
export const OrangeBadge = (props) => {
  const name = props;
  return (
    <div>
      <Badge className="bg-[#fff5d4] rounded-[64px] uppercase px-[10px] py-[6px] text-[10px] font-semibold leading-[12.6px] text-[#FFCF26]">
        {name}
      </Badge>
    </div>
  );
};
export const RedeBadge = (props) => {
  const name = props;
  return (
    <div>
      <Badge className="bg-[#f9ebe9] rounded-[64px] uppercase px-[10px] py-[6px] text-[10px] font-semibold leading-[12.6px] text-[#C53526]">
        {name}
      </Badge>
    </div>
  );
};
