import {createSlice} from '@reduxjs/toolkit';
// import AllProperties from '../../components/allproperties/allproperties';

const initialState = {
    propertyItems : [],
    isLoading : true
}

export const propertySlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        addProperty : (state, action) => {
            state.adminProperties.push(action.payload)
        }
    }
})

export default propertySlice.reducer