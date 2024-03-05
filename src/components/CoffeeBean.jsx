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
import { ButtonArrow, HeartIcon, RatingStar } from "./Icons";
import Image from "next/image";
import {
  ChocolateBadge,
  GreenBadge,
  OrangeBadge,
  RedeBadge,
} from "./AllBadges";
import { CoffeeBeanDetails, QualityData } from "./Helper";
import { Progress } from "@/components/ui/progress";

const CoffeeBean = () => {
  return (
    <div className="py-10">
      <div className="max-w-[1120px] mx-auto xl:px-0 px-3 flex min-[950px]:flex-row flex-col min-[950px]:gap-10 gap-6">
        <div className="min-[950px]:max-w-[320px] w-full flex min-[950px]:flex-col gap-5 sm:flex-row flex-col">
          <div className="min-[950px]:mb-8 mb-6 flex sm:justify-normal justify-center">
            <Image
              src="/assets/images/png/coffee_bean.png"
              alt="coffee_bean"
              height={320}
              width={320}
            />
          </div>
          <div className="flex flex-col gap-5 w-full">
            {QualityData.map((quality, index) => {
              return (
                <div key={index} className="flex gap-6 items-center">
                  <p className="max-w-20 w-full font-normal text-base text-[#090909]">
                    {quality.title} <span>{quality.span}</span>
                  </p>
                  <Progress
                    className="min-[950px]:max-w-[216px] !w-full"
                    value={quality.value}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Card className="min-[950px]:max-w-[760px] bg-white w-full p-0">
          <CardHeader>
            <div className="flex justify-between min-[500px]:flex-row flex-col mb-6 gap-6">
              <div>
                <h2 className="font-semibold text-[32px] leading-[38.4px] text-[#090909] mb-1">
                  Coffee Bean
                </h2>
                <p className="font-light text-lg text-[#090909] md:mb-4 mb-2">
                  Malerapaso
                </p>
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
              <div className="flex flex-col min-[500px]:items-end">
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
                <div className="flex gap-2">
                  <ChocolateBadge name={"Chocolate"} />
                  <GreenBadge name={"Bean"} />
                  <OrangeBadge name={"Honey"} />
                  <RedeBadge name={"caramel"} />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-[#f9fafa] p-6 rounded-[20px] mb-6">
              <p className="font-normal text-base text-[#090909]">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.{" "}
              </p>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <p className="text-[32px] leading-[48px] font-medium text-[#090909]">
                $231⁹⁹
              </p>
              <p className="font-bold text-lg text-[#776B5D]">
                <del>
                  $<span className="font-medium">350</span>
                  <span className="font-normal">⁹⁹</span>
                </del>
              </p>
              <span>
                <OrangeBadge
                  className={"py-1 px-2 bg-[#fffbe6]"}
                  name={"%35 OFF"}
                />
              </span>
            </div>
            <div className="flex items-center gap-4 mb-10">
              <Button className="bg-[#776B5D] h-full px-20 py-4 flex items-center text-white font-medium text-[20px] leading-[25px] rounded-[40px] w-full hover:opacity-80 hover:bg-[#776B5D] transition-all duration-300">
                buy now
                <span className="ms-2">
                  <ButtonArrow />
                </span>
              </Button>
              <div className="max-w-[56px] h-[56px] hover:opacity-80 cursor-pointer w-full rounded-full bg-[#fdfbf7] flex items-center justify-center">
                <HeartIcon />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="grid sm:grid-cols-2 gap-3 w-full">
              {CoffeeBeanDetails.map((details, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#F9FAFA] rounded-2xl px-5 py-4 flex justify-between items-center"
                  >
                    <p className="font-normal text-base text-[#090909]">
                      {details.tittle}
                    </p>
                    <p className="font-normal text-base text-[#090909] opacity-70">
                      {details.discription}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default CoffeeBean;
