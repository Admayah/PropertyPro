import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    user : []
}
const userSlice = createSlice({
    name : 'userAdmin',
    initialState,
    reducers:{
        addUser : (state, action) => {
           state.user.push(action.payload)
        }
    }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer;