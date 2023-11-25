import { createSlice } from '@reduxjs/toolkit';

const searchReducer = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchTerm } = searchReducer.actions;
export default searchReducer.reducer;
