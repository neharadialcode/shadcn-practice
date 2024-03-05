import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { newSliderCard } from "./Helper"
import Link from "next/link"
import { RotateArrow } from "./Icons"
import { useEffect, useState } from "react"

const NewCoffeeBeanSlider = () => {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap() + 1);
        };

        api.on("select", handleSelect);

        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

    const handleIndicatorClick = (index) => {
        setCurrent(index + 1); // Index is zero-based, so we add 1 to match the slide number
        if (api && typeof api.scrollTo === "function") {
            api.scrollTo(index); // Assuming the API provides a method to scroll to a specific slide
        }
    };
    return (
        <>
            <div className=" overflow-hidden py-12">
                <div className="w-full px-3 xl:px-0 max-w-[1140px] mx-auto">
                    <div className="flex items-center justify-between pb-6">
                        <h3 className="text-2xl text-[#090909]">Newly added
                        </h3>
                        <Link href="/" className="text-black flex gap-1 items-center text-opacity-50 text-base font-normal hover:text-opacity-100 group duration-300">See all <span><RotateArrow /></span></Link>
                    </div>
                    <Carousel setApi={setApi} className="pt-0 w-full max-auto">
                        <CarouselContent>
                            {newSliderCard.map((value, index) => (<>
                                <CarouselItem className="basis-8/12 sm:basis-5/12 md:basis-4/12 lg:basis-3/12 xl:basis-1/5 pt-0 lg:ps-6">
                                    <Card className="p-3 sm:p-4 md:p-5 cursor-pointer group bg-white">
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
                                                    <span className="text-sm font-normal ms-1 text-[#c1c1c1] relative before:absolute before:w-full before:h-[1px] before:bg-[#c1c1c1] before:start-0 before:top-1/2 before:-translate-y-1/2"> $55.99</span>
                                                </p>
                                            </div>

                                        </CardContent>

                                    </Card>
                                </CarouselItem>
                            </>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className={"h-8 w-8 md:h-12 md:w-12 rounded-full !border !border-black hover:!border-opacity-100 !border-opacity-10 px-3 md:!pe-[18.5px] md:!ps-4"} />
                        <CarouselNext className={"h-8 w-8 md:h-12 md:w-12 rounded-full !border !border-black hover:!border-opacity-100 !border-opacity-10 px-3 md:!ps-[18.5px] md:!pe-4 "} />
                    </Carousel>
                    <div className="pt-8 sm:pt-10 md:pt-12 text-center text-sm text-muted-foreground">

                        <div className=" flex justify-center gap-1">
                            {Array.from({ length: count }, (_, i) => (
                                <span
                                    key={i}
                                    onClick={() => handleIndicatorClick(i)}
                                    className={`w-4 h-1 cursor-pointer rounded-2xl bg-[#090909] bg-opacity-15 ${current === i + 1 ? "!bg-[#776b5d]" : ""
                                        }`}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewCoffeeBeanSlider