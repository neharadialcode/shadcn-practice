import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RatingStar } from "./Icons";
import Image from "next/image";


const CoffeeBean = () => {
  return (
    <Card className="w-[760px]">
      <CardHeader>
        <div>
          <h2 className="font-semibold text-[32px] leading-[38.4px] text-[#090909] mb-1">
            Coffee Bean
          </h2>
          <p className="font-light text-lg text-[#090909] mb-4">Malerapaso</p>
          <div className="flex items-center">
            <span>
              <RatingStar />
            </span>
            <span>
              <RatingStar />
            </span>
            <span>
              <RatingStar />
            </span>
            <span>
              <RatingStar />
            </span>
            <span>
              <RatingStar />
            </span>
            <p className="font-medium text-sm text-[#090909] ms-1 opacity-50">
              128
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center mb-[22px]">
            <Image
              src="/assets/images/png/secure_badge.png"
              alt="secure_badge"
              width={56}
              height={56}
            />
            <Image
              src="/assets/images/png/money_back_badge.png"
              alt="money_back_badge"
              width={56}
              height={56}
            />
            <Image
              src="/assets/images/png/satisfaction_badge.png"
              alt="satisfaction_badge"
              width={56}
              height={56}
            />
            <Image
              src="/assets/images/png/easy_returns_badge.png"
              alt="easy_returns_badge"
              width={56}
              height={56}
            />
          </div>
          <div>
           
          </div>
        </div>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};
export default CoffeeBean;
