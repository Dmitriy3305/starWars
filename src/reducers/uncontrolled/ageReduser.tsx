import { createSlice } from '@reduxjs/toolkit';

const ageReducer = createSlice({
  name: 'age',
  initialState: {
    value: null,
  },
  reducers: {
    setAgeReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAgeReducer } = ageReducer.actions;
export default ageReducer.reducer;
