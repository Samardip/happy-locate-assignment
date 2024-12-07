import { CircularProgress } from '@mui/material'
import React from 'react'

export const ButtonVariant = ({ text, className, onClick, loading }) => {
  return (
    <button
      className={`bg-custom-blue flex justify-center items-center rounded-[10px] w-[100%] h-[44px] ${className} text-white font-bold`}
      onClick={onClick}>
      {
        loading ?
            <CircularProgress size={30} className='!text-white'/>
          :
          text
      }
    </button>
  )
}
