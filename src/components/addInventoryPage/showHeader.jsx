import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import React from 'react'

export const ShowHeader = ({listItem,handleToggle,isToggled}) => {
    const totalCount = listItem?.items?.reduce((acc, item) => acc + item.count, 0); 
    return (
        <div className="w-[100%] flex justify-between items-center min-h-[44px] bg-custom-grey-1 px-[20px]">
            <div className="flex justify-start items-center gap-2">
                <div className="text-[14px]">{listItem?.name}</div>
                <div className="text-[10px] text-custom-blue">Item Added {totalCount}</div>
            </div>
            <div onClick={handleToggle} className="p-0 cursor-pointer">
                {isToggled ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </div>
        </div>
    )
}
