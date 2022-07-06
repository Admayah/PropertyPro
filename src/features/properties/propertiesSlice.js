import {createSlice} from '@reduxjs/toolkit';
import AllProperties from '../../components/allproperties/allproperties';

const initialState = {
    propertyItems : AllProperties,
    isLoading : true
}

export const propertySlice = createSlice({
    name: 'properties',
    initialState,
})

export default propertySlice.reducer