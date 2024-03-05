// import React from 'react'
// import { CrossIcon, SignUpPeople } from './Icons'
// import Link from 'next/link'
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
// import Signup from './Signup'

// const MobileHeader = ({ setNavigationOpen }) => {
//     return (
//         <>
//             <div onClick={() => setNavigationOpen(false)} className="absolute top-5 end-5 cursor-pointer">
//                 <CrossIcon />
//             </div>
//             <div className='flex flex-col justify-center items-center h-full gap-5'>
//                 <Link href="/" className='text-base text-white hover:opacity-80 duration-300'>Newly added</Link>
//                 <Link href="/" className='text-base text-white hover:opacity-80 duration-300'>Newsroom</Link>
//                 <Link href="/" className='text-base text-white hover:opacity-80 duration-300'>Sign in</Link>
//                 <Signup />
//             </div>
//         </>
//     )
// }
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "./Icons"
import Link from "next/link"
import Signup from "./Signup"
const MobileHeader = () => {
    return (
        <Sheet>
            <SheetTrigger className="flex items-center text-white" asChild>
                <Button className="h-0  bg-transparent p-0 border-none" variant="outline"><MenuIcon /></Button>
            </SheetTrigger>
            <SheetContent className="bg-black">
                <SheetHeader className="bg-black">
                    <div className='flex flex-col items-start h-full gap-5'>
                        <Link href="/" className='text-base text-white hover:opacity-80 duration-300'>Newly added</Link>
                        <Link href="/" className='text-base text-white hover:opacity-80 duration-300'>Newsroom</Link>
                        <Link href="/" className='text-base text-white hover:opacity-80 duration-300'>Sign in</Link>
                        <Signup />
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}


export default MobileHeader