import React from 'react'

export const SelectedInventoryCount = ({item,index}) => {
    return (
        <div className='flex justify-between items-center w-[100%]' key={index}>
            <div className='flex gap-2 items-center'>
                <div className='w-[21px] h-[21px] rounded-full'>
                    <img className='w-[100%] h-[100%] rounded-full' src="https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="inventoryLogo" />
                </div>
                <div className='text-[16px]'>{item?.name}</div>
            </div>
            <div className='text-gray-400'>
                {item?.count}
            </div>
        </div>
    )
}
