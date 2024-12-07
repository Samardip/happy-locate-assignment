import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import React from 'react'

export const ChangeValue = ({ value,handleIncrement,handleDecrement }) => {
    return (
        <div className='flex justify-center items-center gap-2 text-custom-blue font-normal'>
            <div className='cursor-pointer' onClick={()=>{handleDecrement()}}><RemoveCircleOutline /></div>
            <div>
                {value}
            </div>
            <div className='cursor-pointer' onClick={()=>{handleIncrement()}}><AddCircleOutline /></div>
        </div>
    )
}
