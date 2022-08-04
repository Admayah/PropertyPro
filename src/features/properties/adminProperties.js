import { createSlice } from "@reduxjs/toolkit";
import Properties from "../../components/feed/properties";

const initialState = {
    adminProperties : Properties
}

console.log(initialState)
export const adminPropertySlice = createSlice({
    name : 'admin-properties',
    initialState,
    reducers: {
        addProperty : (state, action) => {
            state.adminProperties.push(action.payload)
        },
        editStateProperty: (state, action) => {
            const propertyId = action.payload
            state.adminProperties.filter((item) => item.id === propertyId);
            state.adminProperties.push(action.payload)

        },
        removeProperty: (state, action) => {
            const propertyId = action.payload
            state.adminProperties = state.adminProperties.filter((item)=> item.id !== propertyId);
        }
    }
})

export const { addProperty, editStateProperty, removeProperty } = adminPropertySlice.actions

export default adminPropertySlice.reducer;