import React from 'react'
import { ButtonVariant } from '../../common/buttonVariant/buttonVariant'
import { InfoOutlined } from '@mui/icons-material'

export const Footer = ({ value, setOpen,onClick,loading }) => {
    return (
        <div className='sticky bottom-0 bg-white w-full'>
            {
                value !== 0 &&
                <div className='flex justify-center gap-4 bg-custom-green rounded-tl-[12px] rounded-tr-[12px] px-3 py-2'>
                    <InfoOutlined className='w-[16px] h-[16px] !text-[16px] mt-[2px] text-white' />
                    <div className='text-[12px] font-normal text-white'>Please ensure all inventory is added upfront. Any items added later during pickup will incur extra charges.</div>
                </div>
            }
            <div className='w-[100%] h-[76px] sm:w-[375px] border border-gray-200 flex justify-center items-center'>
                <div className='flex justify-between items-center w-[90%] h-[100%]'>
                    {
                        value !== 0 && <div className='w-[100%] sm:w-3/5 text-[14px] text-custom-blue cursor-pointer font-normal text-left pr-2' onClick={() => { setOpen && setOpen(true) }}>
                            View&nbsp;{value}&nbsp;items
                        </div>
                    }
                    <ButtonVariant text={'Continue'} className="!w-[100%] !sm:w-2/5" onClick={onClick} loading={loading}/>
                </div>
            </div>
        </div>
    )
}
