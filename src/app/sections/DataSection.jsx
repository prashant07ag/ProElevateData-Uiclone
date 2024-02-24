"use client"
import React from 'react'
import DataCard from '../components/DataCard'
import { dataDetails } from '../constants/page'
const DataSection = () => {
    return (
        <div className='infinite-scroll-component flex flex-col gap-6 !w-full no-scrollbar h-auto overflow-auto'>
            <div className='w-full flex justify-between items-start lg:justify-start'>
                <p className='text-lg font-medium'>
                    All Jobs(97)
                </p>
                <button className='flex lg:hidden px-4 py-2 rounded-3xl bg-gray-100 gap-2 items-center justify-center'>
                    <p className="text-sm text-gray-900 font-medium">Filters</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-4 h-4 stroke-gray-600 stroke-2"><path d="m2.755 3.733 3.904 4.6.008 3 2.666 2 .008-5 3.904-4.6a.666.666 0 0 0-.536-1.066H3.29a.667.667 0 0 0-.536 1.066"></path></svg>
                </button>
            </div>
            <div className='w-full grid 2xl:grid-cols-2 grid-cols-1 place-content-center gap-6 content-start h-auto pb-5'>
                {dataDetails.map((data) => (
                    <DataCard key={data.jobTitle} {...data} />
                ))}
            </div>
        </div>
    )
}

export default DataSection


