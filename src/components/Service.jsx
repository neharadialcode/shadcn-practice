// import React from "react";
// import Image from "next/image";
// import { ServiceData } from "./Helper";

// const Services = () => {
//   return (
//     <div className="custom_container container mx-auto pt-12 lg:pt-14 px-4 lg:px-3 lg:pb-8">
//       <div className="flex flex-wrap justify-center">
//         {ServiceData.map((data, index) => (
//           <div
//             className={`lg:w-4/12 md:w-6/12 sm:w-9/12 w-11/12 flex flex-col items-center px-3 ${
//               index === 1 ? "pt-7 md:pt-0" : index === 2 ? "pt-7 lg:pt-0" : ""
//             }`}
//             key={index}
//           >
//             {/* <Image height={50} width={50} src={data.icon} alt="icon" /> */}
//             <h3 className="text-black font-semibold text-lg mb-2 mt-3 lg:mt-5 text-center leading-normal">
//               {data.title}
//             </h3>
//             <p className="text-lightBlack font-light text-sm text-center sm:leading-[19.6px]">
//               {data.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ServiceData } from "./Helper";
// import Image from "next/image";

export function Services() {
  return (
    <div className="max-w-[1140px] mx-auto px-3 xl:px-0">
      <div className="flex flex-wrap justify-center -mx-3 lg:-mx-5 py-12 sm:py-16 md:py-20">
        {ServiceData.map((value, index) => {
          return (
            <div className={`w-full sm:w-6/12 md:w-4/12 px-3 lg:px-5 ${value.cardPadding}`} key={index}>
              <Card className="p-0 bg-white">
                <CardHeader>
                  <span className="mx-auto">{value.icon}</span>
                  <CardTitle className="!mt-6 text-center text-lg font-semibold text-[#090909]">{value.title}</CardTitle>
                  <CardDescription className="!mt-2 text-center text-sm font-light text-[#090909] ">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default Services;
