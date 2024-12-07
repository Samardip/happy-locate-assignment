import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { appActions } from '../../context/app-slice';

export const useProductDetailPage = (itemNodes, itemData, selectedTab, inventoryDetailsData) => {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();
    const tabData = [
        { label: "All", text: '20' },
        { label: "Electronic Applications", text: '20' },
        { label: "Small Applications", text: '20' },
        { label: "Notifications", text: '20' },
        { label: "Messages", text: '20' },
        { label: "Analytics", text: '20' },
        { label: "Reports", text: '20' },
        { label: "Help", text: '20' },
    ];
    const [open, setOpen] = useState(false);
    let detailArray = [
        { name: "Sofa", count: 0 },
        { name: "Chair", count: 0 },
        { name: "Fridge", count: 0 },
        { name: "Table", count: 0 },
        { name: "Bed", count: 0 },
        { name: "Cupboard", count: 0 },
        { name: "Stool", count: 0 },
        { name: "Bookshelf", count: 0 },
        { name: "Dining Table", count: 0 },
        { name: "Coffee Table", count: 0 }
    ];
    if (selectedTab === 'room') {
        console.log(inventoryDetailsData['room'][itemData?.id]?.nodes?.filter((curItemNode) => { return (curItemNode?.id === itemNodes?.id) })[0]['items'])
        let oldDataArray = inventoryDetailsData['room'][itemData?.id]?.nodes?.filter((curItemNode) => { return (curItemNode?.id === itemNodes?.id) })[0]['items'];
        let newDetailArray = !(oldDataArray?.length === 0) ? oldDataArray : detailArray;
        detailArray = newDetailArray;
    }
    else {
        let newDetailArray = !(inventoryDetailsData['category']?.length === 0) ? inventoryDetailsData['category'] : detailArray;
        detailArray = newDetailArray
    }
    const filteredFurnitureArray = detailArray.filter(item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    const [furnitureArray, setFurnitureArray] = useState(filteredFurnitureArray)
    const [cancel, setCancel] = useState({});
    
    const handleDataChanges = useCallback((newFurnitureArray, index) => {
        console.log(itemNodes)
        if (selectedTab === 'room') {
            const newInventoryDetailsData = {
                ...inventoryDetailsData,
                room: inventoryDetailsData.room?.map((curItemData) => {
                    return {
                        ...curItemData,
                        'nodes': curItemData.nodes?.map((curNodesData) => {
                            if (curNodesData?.id === itemNodes?.id) {
                                return {
                                    ...curNodesData,
                                    items: newFurnitureArray,
                                };
                            }
                            return curNodesData;
                        }),
                    };
                }),
            };
            // console.log(newInventoryDetailsData, 'newInventoryDetailsData');
            dispatch(appActions.updateInventoryDetails(newInventoryDetailsData));
        }
        else {
            let categoryArray = {
                ...inventoryDetailsData,
                room: [...inventoryDetailsData['room']],
                'category': newFurnitureArray
            }
            dispatch(appActions.updateInventoryDetails(categoryArray));
        }
        setFurnitureArray(newFurnitureArray);
    }, [dispatch, inventoryDetailsData, itemNodes, selectedTab]);
    const handleIncrement = (item, index) => {
        let newFurnitureArray = furnitureArray?.map((furItem, idx) => {
            if (index === idx) {

                return {
                    ...furItem,
                    count: furItem.count + 1
                }
            }
            else {
                return furItem
            }
        });
        handleDataChanges(newFurnitureArray, index);
    }
    const handleDecrement = (item, index) => {
        if (item?.count === 1) {
            setOpen(true);
            setCancel({
                ...item,
                index: index
            })
        }
        else {
            let newFurnitureArray = furnitureArray?.map((furItem, idx) => {
                if (index === idx) {
                    return {
                        ...furItem,
                        count: (furItem.count - 1)
                    }
                }
                else {
                    return furItem
                }
            });
            handleDataChanges(newFurnitureArray, index);
        }
    }
    return {
        searchValue,
        setSearchValue,
        tabData,
        furnitureArray,
        handleIncrement,
        handleDecrement,
        open,
        setOpen,
        cancel,
        filteredFurnitureArray
    }
}
