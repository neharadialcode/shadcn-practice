import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { newSliderCard, sliderCard } from "./Helper"
import { ChocolateBadge } from "./AllBadges"

const NewCoffeeBeanSlider = () => {
    return (
        <>
            <div className=" overflow-hidden py-12 sm:py-16 md:py-20">
                <div className="w-full px-3 xl:px-0 max-w-[1140px] mx-auto">
                    <div className="flex justify-between">
                        <h3 className="text-2xl text-[#090909]">Newly added
                        </h3>
                    </div>
                    <Carousel className="pt-0 w-full max-auto">
                        <CarouselContent>
                            {newSliderCard.map((value, index) => (<>
                                <CarouselItem className="basis-7/12 sm:basis-5/12 md:basis-4/12 lg:basis-3/12 xl:basis-1/5 pt-0 lg:ps-6">
                                    <Card className="p-5 cursor-pointer group bg-white">
                                        <CardHeader>
                                            <div className="overflow-hidden rounded-2xl">
                                                <Image width={160} className="duration-300 group-hover:scale-105 w-full max-h-[160px] object-cover" height={124} src={value.image} alt="image slider" />
                                            </div>
                                            <CardTitle className="font-semibold text-[15px] !mt-0 pt-3 text-[#090909]">{value.title}</CardTitle>
                                            <CardDescription className="font-light text-sm !mt-0 text-[#090909]">{value.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="pt-3 h-full">
                                            <div className="flex gap-1 pb-4">
                                                <Image width={36} height={36} src="/assets/images/png/secure_badge.png" alt="image slider" />
                                                <Image width={36} height={36} src="/assets/images/png/money_back_badge.png" alt="image slider" />
                                                <Image width={36} height={36} src="/assets/images/png/satisfaction_badge.png" alt="image slider" />
                                                <Image width={36} height={36} src="/assets/images/png/easy_returns_badge.png" alt="image slider" />
                                            </div>
                                            <div className="flex flex-col justify-between h-[106px]">
                                                <div className="flex flex-wrap gap-2 ">
                                                    {value.badgeFirst}
                                                    {value.badgeSecond}
                                                    {value.badgeThird}
                                                    {value.badgeFourth}
                                                </div>
                                                <p className="flex items-center text-[#090909] font-semibold text-xl ">
                                                    $80
                                                    <span className="text-sm font-normal ms-[2px] text-[#c1c1c1] relative before:absolute before:w-full before:h-[1px] before:bg-[#c1c1c1] before:start-0 before:top-1/2 before:-translate-y-1/2"> $55.99</span>
                                                </p>
                                            </div>
                                        </CardContent>

                                    </Card>
                                </CarouselItem>
                            </>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className={"w-12 h-12 rounded-full !border !border-black hover:!border-opacity-100 !border-opacity-10 !px-4"} />
                        <CarouselNext className={"w-12 h-12 rounded-full !border !border-black hover:!border-opacity-100 !border-opacity-10 !px-4"} />
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default NewCoffeeBeanSlider