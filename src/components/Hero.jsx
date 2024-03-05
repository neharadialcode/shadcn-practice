import React from 'react'
import AllSelect from './AllSelect'
import { BlackSearch, CategoryIcon, } from './Icons'

const Hero = () => {
    return (
        <>
            <div className="max-w-[1120px] mx-auto px-3 xl:px-0 pt-16">
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-normal capitalize text-center text-[#090909] !leading-[120%]'>
                    Unveiling the {" "}
                    <span className='font-extrabold sm:block'>world of
                        {" "}   <span className='text-[#d3756b]'>coffee</span>
                        {" "} varieties
                    </span>
                </h1>
                <p className="text-center !leading-[180%] text-sm font-light max-w-[592px] mx-auto text-[#090909] pt-6">
                    We seek to establish a comprehensive online platform dedicated to celebrating the diversity of coffee beans sourced from local roasters worldwide.
                </p>
                <div className='mt-6 max-w-[720px] mx-auto px-4 sm:px-6 md:px-8 py-[18px]'>
                    <div className="flex items-center">
                        <div className="border-e  sm:pe-4">
                            <AllSelect className={"text-[#090909] !flex me-2"} />
                        </div>
                        <div className="relative max-w-[600px] w-full  ms-3 sm:ms-6">
                            <div className="absolute end-0 top-1.5 z-0 cursor-pointer">
                                <BlackSearch />
                            </div>
                            <input className='focus:outline-none text-sm font-light w-full pe-5' type="text" placeholder='Enter coffee name...' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero