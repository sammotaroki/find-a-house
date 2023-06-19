'use client'
import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const Search = () => {
    return (
        <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
            <div className='flex flex-row justify-between items-center'>
                <div className='text-sm font-medium px-6'>Anywhere</div>
                <div className='hidden sm:block text-sm font-medium px-6 border-x-[1px] flex-1 text-center'>Any week</div>
                <div className='text-sm pl-6 pr-2 text-gray-500 flex flex-row items-center gap-3'>
                    <div className='hidden sm:block'>Type</div>
                    <div className='p-2 bg-[#41644A] text-white rounded-full'>
                        <BiSearchAlt />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search