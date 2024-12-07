import React from 'react'
import { ButtonVariant } from '../../../common/buttonVariant/buttonVariant'
import { Check } from '@mui/icons-material'

export const CompleteModalData = ({ setIsComplete }) => {
    return (
        <div>
            <div className='flex gap-2'>
                <div className='w-[21px] h-[21px] rounded-full bg-custom-blue flex justify-center items-center'><Check className='rounded-full text-white text-[10px]' /></div>
                <div className='text-sm font-bold'>All inventory items Added Successfully !!!</div>
            </div>
            <div className='flex justify-end items-center gap-10 mt-[25px]'>
                <ButtonVariant
                    text={'Close'}
                    className={`w-[78px] h-[44px]`}
                    onClick={() => {
                        setIsComplete(false)
                    }} />
            </div>
        </div>
    )
}
