import React from 'react';
import { TitleHeader } from '../../components/titleHeader/titleHeader';
import { ProgressBar } from '../../common/progressBar/progressBar';
import { TabsBar } from '../../components/tabsBar/tabsBar';
import { Outlet } from 'react-router';
import ModalVariant from '../../common/modalVariant/modalVariant';
import { BottomInventoryModalData } from '../../components/ModalData/bottomInventoryModalData/bottomInventoryModalData';
import { Footer } from '../../components/footer/footer';
import { CompleteModalData } from '../../components/ModalData/compleModalData/completeModalData';
import { useLayoutContainer } from '../../useHooks/useLayoutContainerHooks/useLayoutContainer';

const LayoutContainer = () => {
    const {
        pathname,
        navigate,
        selectedTab,
        handleTabChange,
        value,
        loading,
        handleNext,
        handleInventoryChanges,
        open,
        setOpen,
        addedInventoryItemMap,
        isComplete,
        setIsComplete
    } = useLayoutContainer();
    return (
        <div className='w-[100%] flex justify-center items-center bg-gray-200 border-gray-200 min-h-[100vh]'>
            <div className='w-[100%] sm:w-[375px] flex flex-col justify-center items-center gap-4 bg-white'>
                <div className='w-[100%] flex flex-col gap-4 pt-[20px] sticky top-0 bg-white z-50'>
                    <TitleHeader title={`${pathname === '/inventory' ? 'Add ' : 'Select'} Inventory`} onClick={() => navigate('/')} />
                    <ProgressBar value={45} />
                    <div className='flex justify-center items-center w-[100%]'>
                        <TabsBar selectedTab={selectedTab} handleTabChange={handleTabChange} />
                    </div>
                </div>

                <div className={`flex-grow flex justify-center items-start w-[100%] ${value ? 'min-h-[calc(100vh-283px)]' : 'min-h-[calc(100vh-231px)]'}`}>
                    <Outlet />
                </div>
                <Footer
                    value={value}
                    setOpen={setOpen}
                    loading={loading}
                    onClick={() => { value === 0 ? handleNext() : handleInventoryChanges() }} />
            </div>
            <ModalVariant open={open} setOpen={setOpen} isCentered={false}>
                <BottomInventoryModalData inventoryItems={Array.from(addedInventoryItemMap).map((item) => {
                    return {
                        name: item[0],
                        count: item[1]
                    }
                })} />
            </ModalVariant>
            <ModalVariant open={isComplete} setOpen={setIsComplete} isCentered={true}>
                <CompleteModalData setIsComplete={setIsComplete} />
            </ModalVariant>
        </div>
    );
};

export default LayoutContainer;
