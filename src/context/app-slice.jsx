import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "happy-locate-app",
    initialState: {
        inventoryDetails: {
            'id':'inventory-0',
            'room': [
                {
                    name: 'Room',
                    id: 0,
                    value: 0,
                    nodes: []
                },
                {
                    name: 'Kitchen',
                    id: 1,
                    value: 0,
                    nodes: []
                },
                {
                    name: 'Drawing Hall',
                    id: 2,
                    value: 0,
                    nodes: []
                },
                {
                    name: 'Dining Hall',
                    id: 3,
                    value: 0,
                    nodes: []
                }
            ],
            'category': [],
            'selectedTab':'room'
        },
    },
    reducers: {
        updateInventoryDetails(state, action) {
            state.inventoryDetails = action.payload;
        },
    },
});

const appActions = appSlice.actions;

export { appActions };
export default appSlice;
