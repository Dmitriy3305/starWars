import { createSlice } from '@reduxjs/toolkit';

const countryReducer = createSlice({
  name: 'country',
  initialState: {
    value: ' ',
  },
  reducers: {
    setCountryReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCountryReducer } = countryReducer.actions;
export default countryReducer.reducer;
