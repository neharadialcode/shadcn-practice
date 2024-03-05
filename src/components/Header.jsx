"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { MainLogo, MenuIcon, SignUpPeople } from './Icons'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
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
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="bg-transparent p-0 m-0 text-white text-base font-normal h-0 hover:text-blue-600 duration-300">Categories</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="p-4">
                                                <li className='w-full'>
                                                    <NavigationMenuLink asChild className='w-full ' >
                                                        <Link
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <div className="mb-2 text-lg font-medium w-full">
                                                                shadcn/ui
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground w-full min-w-[300px]">
                                                                Beautifully designed components built with Radix UI and
                                                                Tailwind CSS.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>

                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
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



// "use client"

// import * as React from "react"
// import Link from "next/link"

// import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

// const components: { title: string; href: string; description: string }[] = [
//     {
//         title: "Alert Dialog",
//         href: "/docs/primitives/alert-dialog",
//         description:
//             "A modal dialog that interrupts the user with important content and expects a response.",
//     },
//     {
//         title: "Hover Card",
//         href: "/docs/primitives/hover-card",
//         description:
//             "For sighted users to preview content available behind a link.",
//     },
//     {
//         title: "Progress",
//         href: "/docs/primitives/progress",
//         description:
//             "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//     },
//     {
//         title: "Scroll-area",
//         href: "/docs/primitives/scroll-area",
//         description: "Visually or semantically separates content.",
//     },
//     {
//         title: "Tabs",
//         href: "/docs/primitives/tabs",
//         description:
//             "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//     },
//     {
//         title: "Tooltip",
//         href: "/docs/primitives/tooltip",
//         description:
//             "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//     },
// ]

// export function NavigationMenuDemo() {
//     return (
//         <NavigationMenu>
//             <NavigationMenuList>
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                             <li className="row-span-3">
//                                 <NavigationMenuLink asChild>
//                                     <a
//                                         className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                                         href="/"
//                                     >
//                                         <Icons.logo className="h-6 w-6" />
//                                         <div className="mb-2 mt-4 text-lg font-medium">
//                                             shadcn/ui
//                                         </div>
//                                         <p className="text-sm leading-tight text-muted-foreground">
//                                             Beautifully designed components built with Radix UI and
//                                             Tailwind CSS.
//                                         </p>
//                                     </a>
//                                 </NavigationMenuLink>
//                             </li>
//                             <ListItem href="/docs" title="Introduction">
//                                 Re-usable components built using Radix UI and Tailwind CSS.
//                             </ListItem>
//                             <ListItem href="/docs/installation" title="Installation">
//                                 How to install dependencies and structure your app.
//                             </ListItem>
//                             <ListItem href="/docs/primitives/typography" title="Typography">
//                                 Styles for headings, paragraphs, lists...etc
//                             </ListItem>
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//                             {components.map((component) => (
//                                 <ListItem
//                                     key={component.title}
//                                     title={component.title}
//                                     href={component.href}
//                                 >
//                                     {component.description}
//                                 </ListItem>
//                             ))}
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                     <Link href="/docs" legacyBehavior passHref>
//                         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                             Documentation
//                         </NavigationMenuLink>
//                     </Link>
//                 </NavigationMenuItem>
//             </NavigationMenuList>
//         </NavigationMenu>
//     )
// }

