
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
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