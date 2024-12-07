import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { appActions } from '../../context/app-slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const useLayoutContainer = () => {
    const [open, setOpen] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const location = useLocation();
    const inventoryDetailsData = useSelector((state) => state?.app?.inventoryDetails);
    const memoizedInventoryDetailsData = useMemo(() => inventoryDetailsData || {}, [inventoryDetailsData]);
    const [loading, setLoading] = useState(false);
    let currentSelectedTab = memoizedInventoryDetailsData['selectedTab'];
    const [selectedTab, setSelectedTab] = useState(currentSelectedTab);
    const [addedInventoryItemMap, setAddedInventoryItemMap] = useState(new Map());

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let pathname = location.pathname;
    const value = pathname === '/' ? 0 : Array.from(addedInventoryItemMap.values()).reduce((acc, value) => acc + value, 0);
    const handleTabChange = useCallback((tab) => {
        setSelectedTab(tab);
        let newInventoryDetails = {
            ...memoizedInventoryDetailsData,
            'selectedTab': tab
        }
        dispatch(appActions.updateInventoryDetails(newInventoryDetails));
    }, [dispatch, memoizedInventoryDetailsData]);

    useEffect(() => {
        let currAddedInventoryItemMap = new Map();

        if (selectedTab === 'room') {
            // Iterate over the data and calculate the total counts
            memoizedInventoryDetailsData['room']?.forEach((itemData) => {
                itemData?.nodes?.forEach((itemNodes) => {
                    itemNodes?.items?.forEach((item) => {
                        const itemName = item?.name;
                        const itemCount = item?.count || 0;

                        // Update the Map with the cumulative count
                        currAddedInventoryItemMap.set(
                            itemName,
                            (currAddedInventoryItemMap.get(itemName) || 0) + itemCount
                        );
                    });
                });
            });


        } else {
            memoizedInventoryDetailsData['category']?.forEach((item) => {
                const itemName = item?.name;
                const itemCount = item?.count || 0;

                // Update the Map with the cumulative count
                currAddedInventoryItemMap.set(
                    itemName,
                    (currAddedInventoryItemMap.get(itemName) || 0) + itemCount
                );
            });

        }
        // console.log(currAddedInventoryItemMap, 'addedInventoryItemMap');
        setAddedInventoryItemMap(currAddedInventoryItemMap);
    }, [memoizedInventoryDetailsData, selectedTab]);
    const handleNext = async () => {
        setLoading(true);
        try {
            const response = await fetch(process.env.REACT_APP_GET_INVENTORY_API, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log("Response from server:", result);
            setLoading(false);
            navigate('/inventory');
            return result;
        } catch (error) {
            console.error("Error occurred during POST request:", error);
            setLoading(false);
        }
    }
    const handleInventoryChanges = async () => {
        setLoading(true);
        try {
            const response = await fetch(process.env.REACT_APP_POST_INVENTORY_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(memoizedInventoryDetailsData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log("Response from server:", result);
            setLoading(false);
            setIsComplete(true);
            return result;
        } catch (error) {
            console.error("Error occurred during POST request:", error);
            setLoading(false);
        }
    }
    return {
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
    }
}
