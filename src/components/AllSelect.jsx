import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CategoryIcon } from './Icons'

const AllSelect = (props) => {
    return (
        <>
            <Select className="p-0 border-none focus:border-none">
                <SelectTrigger className={`p-0 bg-transparent group text-white hover:text-opacity-80 duration-300 border-none outline-none focus:outline-none ${props.className}`}>
                    <div className={`hidden ${props.className}`}>
                        <CategoryIcon />
                    </div>
                    <SelectValue className='p-0' placeholder="Categories" />
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
        </>
    )
}

export default AllSelect