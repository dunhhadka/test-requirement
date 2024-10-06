import {configureStore} from '@reduxjs/toolkit'
import { authReducer, userReducer } from './authSlice';

const store = configureStore({
     reducer: {
          auth: authReducer,
          user: userReducer
     }
}) 

export default store;
export type AppDispatch = typeof store.dispatch;