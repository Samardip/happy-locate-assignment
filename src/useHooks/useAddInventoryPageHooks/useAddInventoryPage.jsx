import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export const useAddInventoryPage = () => {
    const [toggleStates, setToggleStates] = useState({});
    const inventoryDetailsData = useSelector((state) => state?.app?.inventoryDetails) || {};
    let selectedTab = inventoryDetailsData['selectedTab'];
    const handleToggle = (id) => {
        setToggleStates((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    let inventoryTabData = inventoryDetailsData[selectedTab];
    return {
        selectedTab,
        inventoryTabData,
        toggleStates,
        handleToggle,
        inventoryDetailsData,
    }
}
