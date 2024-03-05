import React from 'react'
import { CrossIcon, SignUpPeople } from './Icons'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MobileHeader = ({ setNavigationOpen }) => {
    return (
        <>
            <div onClick={() => setNavigationOpen(false)} className="absolute top-5 end-5">
                <CrossIcon />
            </div>
            <div className='flex flex-col justify-center items-center h-full gap-5'>
                <Link href="/" className='text-base text-white hover:text-blue-600 duration-300'>Newly added</Link>
                <Link href="/" className='text-base text-white hover:text-blue-600 duration-300'>Newsroom</Link>
                <Link href="/" className='text-base text-white hover:text-blue-600 duration-300'>Sign in</Link>
                <Link href="/" className='text-base bg-white flex items-center border border-transparent hover:border-blue-600 hover:bg-transparent hover:text-blue-600 group gap-2 duration-300 py-3 px-5 rounded-3xl'>
                    <span>  <SignUpPeople /></span>
                    Sign up
                </Link>
            </div>
        </>
    )
}

export default MobileHeader