import { createSlice } from '@reduxjs/toolkit';

const countriesReducer = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {
    setCountriesReducer: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCountriesReducer } = countriesReducer.actions;
export default countriesReducer.reducer;
