import React from 'react'

export const TabsBar = ({ selectedTab, handleTabChange }) => {
    return (
        <div className='w-[90%] text-[12px] flex justify-center items-center bg-custom-grey-1 rounded-[12px] px-[8px] py-[4px]'>
            <div className={`w-1/2 flex justify-center items-center rounded-[10px] ${selectedTab == 'room' ? 'bg-custom-blue font-bold text-white' : ''}  h-[35px] cursor-pointer`}
                onClick={() => { handleTabChange('room') }}
            >
                Room Wise
            </div>
            <div className={`w-1/2 flex justify-center items-center rounded-[10px] h-[35px] cursor-pointer ${selectedTab == 'category' ? 'bg-custom-blue font-bold text-white' : ''}`}
                onClick={() => { handleTabChange('category') }}
            >
                Category Wise
            </div>
        </div>
    )
}
