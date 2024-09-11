import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userDetails: null,
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: initialState,
  reducers: {
    setUserDetails(state, {payload}) {
      state.userDetails = payload;
    },
  },
});

export const {setUserDetails} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
