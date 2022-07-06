import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './features/properties/propertiesSlice'
import adminProperties from './features/properties/adminProperties';
import userReducer from './features/properties/userSlice'

export const store = configureStore({
  reducer: {
    properties : propertyReducer,
    adminProperties : adminProperties,
    user : userReducer
  },
})