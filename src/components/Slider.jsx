import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function Slider() {
    return (
        <div className=" ">
            <h2 className="text-center capitalize font-medium px-4 pb-12 text-3xl sm:text-4xl md:text-[40px]">Best <span className="text-[#d3756b] font-extrabold">roasters</span> in the town</h2>
            <Carousel className="w-full px-6 max-w-[1140px] mx-auto">
                <CarouselContent>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <CarouselItem key={index} className="">
                            <Card className="max-w-[357px] p-0 bg-white">
                                <CardContent className="flex flex-col">
                                    <Image width={357} className="rounded-2xl" height={280} src="/assets/images/webp/slider_image_first.webp" alt="image slider" />
                                    <h3 className="font-semibold text-xl pt-4">Coffee Bean by Malerapaso</h3>
                                    <p className="font-normal text-sm pt-2">Plantilla de informe de resonancia magnética (RM) de articulación de Plantilla de informe de resonancia magnética (RM) de articulación de Plantilla de informe de resonancia magnética (RM) de articulación de</p>
                                    <button className="py-4 border-opacity-15 border rounded-3xl mt-4 text-base font-normal">More</button>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}


export default Slider