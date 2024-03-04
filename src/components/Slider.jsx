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
import { sliderCard } from "./Helper"

export function Slider() {
    return (
        <div className=" overflow-hidden py-12 sm:py-16 md:py-20">
            <div className="w-full px-3 xl:px-0 max-w-[1140px] mx-auto">
                <h2 className="text-center capitalize font-medium px-4 pb-12 text-3xl sm:text-4xl md:text-[40px]">Best <span className="text-[#d3756b] font-extrabold">roasters</span> in the town</h2>
                <Carousel className="pt-0 w-full max-auto">
                    <CarouselContent>
                        {sliderCard.map((value, index) => (<>
                            <CarouselItem className="sm:basis-1/2 lg:basis-1/3 pt-0 lg:ps-6">
                                <Card className="p-0 bg-white">
                                    <CardContent className="flex flex-col pt-0">
                                        <Image width={357} className="rounded-2xl w-full max-h-[280px]" height={280} src={value.image} alt="image slider" />
                                        <h3 className="font-semibold text-xl pt-4">{value.title}</h3>
                                        <p className="font-normal text-sm pt-2">{value.description}</p>
                                        <button className="py-4 hover:bg-black hover:text-white duration-300 border-opacity-15 border rounded-3xl mt-4 text-base font-normal">More</button>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        </>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}


export default Slider