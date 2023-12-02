import { createSlice } from '@reduxjs/toolkit';

const genderReducer = createSlice({
  name: 'gender',
  initialState: {
    value: ' ',
  },
  reducers: {
    setGenderReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGenderReducer } = genderReducer.actions;
export default genderReducer.reducer;
