import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './features/properties/propertiesSlice'
import adminProperties from './features/properties/adminProperties';
import userReducer from './features/properties/userSlice';
import updateReducer from './features/properties/adminProperties';
// import userReducer from './features/auth/slice';

export const store = configureStore({
  reducer: {
    properties : propertyReducer,
    adminProperties : adminProperties,
    updateProperty : updateReducer,
    user : userReducer
  },
})