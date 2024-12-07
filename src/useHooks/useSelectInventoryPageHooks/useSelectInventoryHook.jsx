import React, { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../context/app-slice';

export const useSelectInventoryHook = () => {
    const inventoryDetailsData = useSelector((state) => state?.app?.inventoryDetails);
    const memoizedInventoryDetailsData = useMemo(() => inventoryDetailsData || {}, [inventoryDetailsData]);
    let selectedTab = memoizedInventoryDetailsData['selectedTab']
    const [inventoryDetails, setInventoryDetails] = useState(memoizedInventoryDetailsData);
    const dispatch = useDispatch();
    const handleIncrement = useCallback((item, index) => {
        const newNode = {
            name: `${item?.name} ${item?.nodes?.length + 1}`,
            id: `${index}${item?.nodes?.length}`,
            items: []
        };

        const newInventoryDetails = {
            ...inventoryDetails,
            room: inventoryDetails.room?.map((roomItem, idx) => {
                if (idx === index) {
                    return {
                        ...roomItem,
                        nodes: [...roomItem.nodes, newNode] // Create a new array instead of mutating
                    };
                }
                return roomItem;
            })
        };

        setInventoryDetails(newInventoryDetails);
        dispatch(appActions.updateInventoryDetails(newInventoryDetails));
    }, [inventoryDetails, dispatch]);

    const handleDecrement = useCallback((item, index) => {
        const newInventoryDetails = {
            ...inventoryDetails,
            room: inventoryDetails.room?.map((roomItem, idx) => {
                if (idx === index) {
                    return {
                        ...roomItem,
                        nodes: roomItem.nodes.slice(0, -1) // Create a new array without the last element
                    };
                }
                return roomItem;
            })
        };

        setInventoryDetails(newInventoryDetails);
        dispatch(appActions.updateInventoryDetails(newInventoryDetails));
    }, [inventoryDetails, dispatch]);
    return {
        inventoryDetails,
        handleIncrement,
        handleDecrement,
        selectedTab
    }
}
