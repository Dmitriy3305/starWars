import { createSlice } from '@reduxjs/toolkit';

const passwordReducer = createSlice({
  name: 'password',
  initialState: {
    value: ' ',
  },
  reducers: {
    setPasswordReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPasswordReducer } = passwordReducer.actions;
export default passwordReducer.reducer;
