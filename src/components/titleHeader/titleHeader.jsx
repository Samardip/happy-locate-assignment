import { ArrowBackIos } from '@mui/icons-material'
import React from 'react'

export const TitleHeader = ({title,onClick}) => {
  return (
    <div className='flex justify-center items-center relative w-[100%]'>
    <div className='absolute left-[30px] cursor-pointer'  onClick={onClick}><ArrowBackIos fontSize='10px' className='font-bold'/></div>
    <div className='text-[16px] font-bold'>{title}</div>
  </div>
  )
}
