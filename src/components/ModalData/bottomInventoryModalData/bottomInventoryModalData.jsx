import React from 'react'
import { SelectedInventoryCount } from './selectedInventoryCount'

export const BottomInventoryModalData = ({ inventoryItems }) => {
    return (
        <div className='flex flex-col justify-start items-center'>
            <div className='w-[87px] h-[4px] bg-custom-grey-2 rounded-[4px] mb-[10px]'></div>
            <div className='text-[16px] font-bold py-[10px] pb-[20px]'>Added Items</div>
            <div className='flex flex-col gap-6 w-full'>
                {
                    inventoryItems?.map((item, index) => {
                        if (item?.count) {
                            return <SelectedInventoryCount item={item} index={index} />
                        }
                    })
                }
            </div>
        </div>
    )
}
