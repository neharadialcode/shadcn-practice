import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { blogData } from "./Helper";
import Image from "next/image";
import { CalenderIcon } from "./Icons";
import { Badge } from "./ui/badge";

export function Blog() {
  return (
    <>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 py-12 sm:py-16 md:py-20">
        <h2 className="text-center font-medium sm:text-3xl text-3xl md:text-4xxl text-DarkBlack mb-5 sm:mb-8 lg:mb-12">
          Latest <span className="font-extrabold text-[#d3756b]">Blog </span>
          posts
        </h2>
        <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10">
          <div className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12 xl:pe-3 flex gap-6 md:gap-10 flex-col ">
            {blogData.map((value, data) => {
              return (
                <>
                  <Card className={`flex flex-col sm:flex-row items-center p-0 gap-3 sm:gap-6 md:gap-3 lg:gap-6 bg-white ${value.blogclass}`}>
                    <CardHeader className="relative m-0 md:min-w-[150px] min-w-[120px] sm:min-w-[170px] lg:min-w-[170px]">
                      <Badge className="absolute py-2 px-4 text-xs left-2 top-2 font-semibold hover:bg-opacity-90 duration-300 hover:bg-white bg-white text-[#090909] uppercase">{value.badge}</Badge>
                      <Image className="w-[470px] h-[200px] object-cover sm:w-[170px] rounded-[20px] !m-0 sm:h-[134px]" height={134} width={170} src={value.image} alt="images blog" />
                    </CardHeader>
                    <CardContent className="flex flex-col p-0">
                      <p className="text-[#b5b5b5] text-sm justify-center sm:justify-start lg:leading-[18px] flex gap-[6px]">
                        <span>
                          <CalenderIcon />
                        </span>
                        {value.blogDate}
                      </p>
                      <CardTitle className="!mt-2 text-base font-semibold text-[#090909] text-center sm:text-start">{value.title}</CardTitle>
                      <CardDescription className="!mt-1 text-sm font-light text-[#090909] text-center sm:text-start">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </>
              )

            })}

          </div>
          <div className="md:w-5/12 lg:w-6/12 xl:w-7/12 hidden xl:-ms-3 md:flex">
            <Card className="p-0 bg-white">
              <CardHeader className="relative w-full">
                <Badge className="absolute py-2 px-4 text-xs left-4 top-4 font-semibold hover:bg-opacity-90 duration-300 hover:bg-white bg-white text-[#090909] uppercase">Coffee</Badge>
                <Image className="w-full rounded-[20px] !m-0" height={315} width={640} src="/assets/images/webp/blog_img_main.webp" alt="images blog" />
              </CardHeader>
              <CardContent className="flex flex-col mt-4 p-0">
                <p className="text-[#b5b5b5] text-sm pt-3 sm:pt-0 lg:leading-[18px] text-center sm:text-start flex gap-[6px] justify-center sm:justify-start">
                  <span>
                    <CalenderIcon />
                  </span>
                  September 18, 20230
                </p>
                <CardTitle className="!mt-4 text-base font-semibold text-[#090909]">How To Make Chemex Coffee</CardTitle>
                <CardDescription className="!mt-2 text-sm font-light text-[#090909] ">Pour over coffee sounds complicated, but this coffee brewing process is surprisingly simple and the results can be amazing with just a little practice. If you drink a single cup each morning, or want to try different types of coffee, making pour over coffee can be even easier than setting up your home coffee machine (bonus — cleanup takes seconds). And because you’re in control of factors like water temperature and brew time, you can expect amazing flavor in the finished cup.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}


export default Blog;
