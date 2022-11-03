import { createSlice, combineReducers } from "@reduxjs/toolkit";


export const initialState = {
    user : [],
    // profile: []
}
const userSlice = createSlice({
    name : 'userAdmin',
    initialState,
    reducers:{
        addUser : (state, action) => {
           state.user.push(action.payload)
        },

    }
})

const updateUserSlice = createSlice({
    name: "updateUser",
    initialState : {
        userInfo : {}
    },
    reducers: {
        updateProfile : (state, action) => {
            state.userInfo = action.payload
            // state.updateSlice.push(action.payload)
            console.log(action.payload)
            console.log(state, 'uuuuu')
            // state.user.profile.push(action.payload)
        }
    }
})

export const {addUser} = userSlice.actions;
export const { updateProfile } = updateUserSlice.actions;

export default combineReducers({
  userSlice: userSlice.reducer,
  updateSlice: updateUserSlice.reducer
});

// export default ;