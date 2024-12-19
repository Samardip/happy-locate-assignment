import React from 'react';
import CardVariant from '../../common/cardVariant/cardVariant';
import HorizontalScrollBar from '../../common/horizontalScrollBar/horizontalScrollBar';
import InputVariant from '../../common/inputVariant/inputVariant';
import ModalVariant from '../../common/modalVariant/modalVariant';
import { RemoveModal } from '../ModalData/removeModal/removeModal';
import { useProductDetailPage } from '../../useHooks/useProductDetailPageHooks/useProductDetailPage';

const ProductDetailPage = React.memo(({ itemNodes, itemData, selectedTab, inventoryDetailsData }) => {
    const {
        searchValue,
        setSearchValue,
        tabData,
        furnitureArray,
        handleIncrement,
        handleDecrement,
        open,
        setOpen,
        cancel,
        filteredFurnitureArray,
        selectedScrollTab,
        handleDebounceSearch,
        setSelectedScrollTab,
        handleTabCount
    } = useProductDetailPage(itemNodes, itemData, selectedTab, inventoryDetailsData);
    return (
        <div className='w-[90%]'>
            <InputVariant
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    // handleDebounceSearch(e.target.value);
                }}
                placeholder="Search for items..."
            />

            <div className='my-[10px]'>
                <HorizontalScrollBar tabs={tabData} setTabName={setSelectedScrollTab} />
            </div>

            <div
                className='grid grid-cols-2 gap-4 mb-[20px] hide-scrollbar'
                style={{
                    maxHeight: 'calc(100vh - 180px)',
                    overflowY: 'scroll',
                }}
            >
                {furnitureArray.map((item, index) => (
                    <CardVariant
                        item={item}
                        key={index}
                        handleIncrement={() => handleIncrement(item, index)}
                        handleDecrement={() => handleDecrement(item, index)}
                    />
                ))}
            </div>

            <ModalVariant open={open} setOpen={setOpen} isCentered={true}>
                <RemoveModal cancel={cancel} setOpen={setOpen} handleDecrement={handleDecrement} />
            </ModalVariant>
        </div>
    );
});

export default ProductDetailPage;
