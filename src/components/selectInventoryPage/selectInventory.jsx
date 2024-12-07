import React from 'react'
import { ChangeValue } from '../../common/changeValue/changeValue';
import { useSelectInventoryHook } from '../../useHooks/useSelectInventoryPageHooks/useSelectInventoryHook';

const SelectInventory = () => {
    const {
        inventoryDetails,
        handleIncrement,
        handleDecrement,
        selectedTab
    } = useSelectInventoryHook();
    return (
        <>
            {
                selectedTab === 'room' ?
                    <>
                        <div className='flex flex-col justify-center items-center gap-3 w-[90%]'>
                            {
                                inventoryDetails['room']?.map((inventoryItems, index) => {
                                    return <div className='flex justify-between items-center w-[100%]' key={inventoryItems.id}>
                                        <div className=''>{inventoryItems.name}</div>
                                        <ChangeValue
                                            value={inventoryItems?.nodes?.length}
                                            handleIncrement={() => { handleIncrement(inventoryItems, index) }}
                                            handleDecrement={() => { handleDecrement(inventoryItems, index) }}
                                        />
                                    </div>
                                })
                            }
                        </div>
                    </>
                    :
                    <div className='text-[14px] font-semibold mt-[20px]'>
                        No Category available
                    </div>
            }
        </>
    )
}
export default SelectInventory;
