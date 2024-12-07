import { LinearProgress } from '@mui/material'
import React from 'react'

export const ProgressBar = ({ value }) => {
    return (
        <div className='w-[100%]'>
            <LinearProgress
                className='!bg-custom-grey-2'
                sx={{
                    // background: 'lightgrey',
                    '& .MuiLinearProgress-bar': {
                        background: 'rgba(43, 128, 255, 1)'
                    },
                }}
                variant='determinate'
                value={value}
            />
        </div>
    )
}
