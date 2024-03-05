"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { MainLogo, MenuIcon, SignUpPeople } from './Icons'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'
import MobileHeader from './MobileHeader'


const Header = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    return (
        <>
            <div className="max-w-[1900px] relative mx-auto">
                <Image className='absolute top-0 start-0' height={400} width={250} src="/assets/images/webp/header_top_start_img_bean.webp" alt='image' />
                <Image className='absolute bottom-0 end-0' height={400} width={250} src="/assets/images/webp/header_bottom_end_img_bean.webp" alt='image' />
                <div className="max-w-[1120px] relative z-10 mx-auto px-3 xl:px-0">
                    <div className='mt-4 md:mt-6 py-3 md:py-5 px-4 md:px-6 bg-black rounded-[50px] md:rounded-[96px] flex justify-between items-center'>
                        <div className='flex gap-5 md:gap-10 items-center'>
                            <Link href="/" className='text-base text-white hover:text-blue-600 duration-300'>
                                <MainLogo />
                            </Link>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div className="hidden sm:flex gap-5 md:gap-10">
                                <Link href="/" className='text-base text-white hover:text-blue-600 duration-300'>Newly added</Link>
                                <Link href="/" className='text-base text-white hover:text-blue-600 duration-300'>Newsroom</Link>
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-5 md:gap-6">
                            <Link href="/" className='text-base text-white hover:text-blue-600 duration-300'>Sign in</Link>
                            <Link href="/" className='text-base bg-white flex items-center border border-transparent hover:border-blue-600 hover:bg-transparent hover:text-blue-600 group gap-2 duration-300 py-3 px-5 rounded-3xl'>
                                <span>  <SignUpPeople /></span>
                                Sign up
                            </Link>
                        </div>
                        <div onClick={() => { setNavigationOpen(true) }} className="sm:hidden">
                            <MenuIcon />
                        </div>
                        <div className={`${navigationOpen ? "left-0 top-0" : "-left-full top-0"} z-[100] fixed w-full h-full bg-black duration-300`}>
                            <MobileHeader setNavigationOpen={setNavigationOpen} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header