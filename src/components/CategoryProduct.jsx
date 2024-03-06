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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

const CategoryProduct = () => {
    return (
        <Card className="max-w-[680px] w-full bg-red-700 flex gap-8">
            <CardHeader>
                <Image width={200} height={180} className="h-[180px] rounded-2xl" src="/assets/images/png/new_slider_bean.png" alt="coffee image" />
            </CardHeader>
            <div className="">
                <CardContent className="pt-0">
                    <p className="text-lg text-[#090909] font-semibold">Coffee Bean</p>
                    <p className="text-base text-[#090909] font-light">Malerapaso</p>
                    <p className="flex items-center text-[#090909] font-semibold text-xl">
                        $80
                        <span className="text-sm font-normal ms-1 text-[#c1c1c1] relative before:absolute before:w-full before:h-[1px] before:bg-[#c1c1c1] before:start-0 before:top-1/2 before:-translate-y-1/2"> $55.99</span>
                    </p>
                    <div className="flex gap-1 pb-4">
                        <Image width={36} height={36} src="/assets/images/png/secure_badge.png" alt="image slider" />
                        <Image width={36} height={36} src="/assets/images/png/money_back_badge.png" alt="image slider" />
                        <Image width={36} height={36} src="/assets/images/png/satisfaction_badge.png" alt="image slider" />
                        <Image width={36} height={36} src="/assets/images/png/easy_returns_badge.png" alt="image slider" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">

                </CardFooter>
            </div>
        </Card>
    )
}


export default CategoryProduct