import React from 'react'
import { ButtonVariant } from '../../../common/buttonVariant/buttonVariant'
import { Check } from '@mui/icons-material'

export const RemoveModal = ({ setOpen, cancel,handleDecrement }) => {
    return (
        <div>
            <div className='flex gap-2'>
                <div className='w-[21px] h-[21px] rounded-full bg-custom-blue flex justify-center items-center'><Check className='rounded-full text-white text-[10px]' /></div>
                <div className='text-sm font-bold'>Are you sure you want to remove this item from inventory</div>
            </div>
            <div className='flex justify-end items-center gap-10 mt-[25px]'>
                <div className='font-bold text-custom-blue cursor-pointer' onClick={() => {
                    setOpen(false)
                    handleDecrement(cancel?.item,cancel?.index);
                }}>Remove</div>
                <ButtonVariant text={'Cancel'} className={`w-[78px] h-[44px]`} onClick={() => {
                    setOpen(false)
                }} />
            </div>
        </div>
    )
}
