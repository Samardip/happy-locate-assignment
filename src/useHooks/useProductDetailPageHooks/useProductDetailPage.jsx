import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { appActions } from '../../context/app-slice';

export const useProductDetailPage = (itemNodes, itemData, selectedTab, inventoryDetailsData) => {
    const [searchValue, setSearchValue] = useState("");
    const [selectedScrollTab, setSelectedScrollTab] = useState('All');
    const dispatch = useDispatch();
    const tabData = [
        {
            tabName: "All",
            count: 33
        },
        {
            tabName: "Living Room",
            count: 8
        },
        {
            tabName: "Bedroom",
            count: 7
        },
        {
            tabName: "Dining",
            count: 5
        },
        {
            tabName: "Kitchen",
            count: 7
        },
        {
            tabName: "Office",
            count: 6
        },
    ]
    const [open, setOpen] = useState(false);
    let filterSelectedTabName = tabData?.filter((itemTab) => {
        return itemTab?.tabName === selectedScrollTab;
    });
    // console.log(filterSelectedTabName[0]?.items, 'items')
    let detailArray = [
        // Living Room Items
        { name: "Sofa", count: 0, type: "Living Room" },
        { name: "Chair", count: 0, type: "Living Room" },
        { name: "Stool", count: 0, type: "Living Room" },
        { name: "Bookshelf", count: 0, type: "Living Room" },
        { name: "Coffee Table", count: 0, type: "Living Room" },
        { name: "TV Stand", count: 0, type: "Living Room" },
        { name: "Floor Lamp", count: 0, type: "Living Room" },
        { name: "Recliner", count: 0, type: "Living Room" },

        // Bedroom Items
        { name: "Bed", count: 0, type: "Bedroom" },
        { name: "Cupboard", count: 0, type: "Bedroom" },
        { name: "Nightstand", count: 0, type: "Bedroom" },
        { name: "Dressing Table", count: 0, type: "Bedroom" },
        { name: "Wardrobe", count: 0, type: "Bedroom" },
        { name: "Mattress", count: 0, type: "Bedroom" },
        { name: "Pillow", count: 0, type: "Bedroom" },

        // Kitchen Items
        { name: "Fridge", count: 0, type: "Kitchen" },
        { name: "Table", count: 0, type: "Kitchen" },
        { name: "Microwave", count: 0, type: "Kitchen" },
        { name: "Toaster", count: 0, type: "Kitchen" },
        { name: "Blender", count: 0, type: "Kitchen" },
        { name: "Dish Rack", count: 0, type: "Kitchen" },
        { name: "Kitchen Cabinet", count: 0, type: "Kitchen" },

        // Dining Room Items
        { name: "Dining Table", count: 0, type: "Dining" },
        { name: "Dining Chair", count: 0, type: "Dining" },
        { name: "Sideboard", count: 0, type: "Dining" },
        { name: "Hutch", count: 0, type: "Dining" },
        { name: "Bar Stool", count: 0, type: "Dining" },

        // Office Items
        { name: "Office Chair", count: 0, type: "Office" },
        { name: "Desk", count: 0, type: "Office" },
        { name: "Bookshelf", count: 0, type: "Office" },
        { name: "Filing Cabinet", count: 0, type: "Office" },
        { name: "Table Lamp", count: 0, type: "Office" },
        { name: "Whiteboard", count: 0, type: "Office" }
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

    let filteredFurnitureArray = detailArray.filter((itemDiff) => {
        if (itemDiff.type === selectedScrollTab || selectedScrollTab === 'All') {
            return itemDiff;
        }
    }).filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    const [furnitureArray, setFurnitureArray] = useState(filteredFurnitureArray)

    const handleUpdateFilterData = () => {
        setFurnitureArray(filteredFurnitureArray)
    }
    const handleSearch = (fn, delay) => {
        let timer = null;
        return (...args) => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                fn.call(this, ...args);
            }, delay);
        };
    };

    const handleDebounceSearch = handleSearch(handleUpdateFilterData, 200);
    const [cancel, setCancel] = useState({});


    const handleIncrement = (item, index) => {
        let newFurnitureArray = furnitureArray?.map((furItem, idx) => {
            if (item?.name === furItem?.name) {

                return {
                    ...furItem,
                    count: furItem.count + 1
                }
            }
            else {
                return furItem
            }
        });
        handleDataChanges(newFurnitureArray, index, item);
    }
    const handleDecrement = (item, index) => {
        console.log(item)
        if (item?.count === 1) {
            setOpen(true);
            setCancel({
                ...item,
                name:item?.name,
                count:item?.count,
                index: index
            })
        }
        else {
            let newFurnitureArray = furnitureArray?.map((furItem, idx) => {
                if (item?.name === furItem?.name) {
                    return {
                        ...furItem,
                        count: (furItem.count - 1)
                    }
                }
                else {
                    return furItem
                }
            });
            handleDataChanges(newFurnitureArray, index, item);
        }
    }
    const handleDataChanges = useCallback((newFurnitureArray, index) => {
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
        filteredFurnitureArray,
        handleDebounceSearch,
        selectedScrollTab,
        setSelectedScrollTab
    }
}
