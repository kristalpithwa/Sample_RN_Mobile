import {configureStore} from '@reduxjs/toolkit';
import userDetailsReducer from './UserDetailsSlice';

const store = configureStore({
  reducer: {
    userDetailsStore: userDetailsReducer,
  },
});

export default store;
