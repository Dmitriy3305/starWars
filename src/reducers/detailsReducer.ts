import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchResult, SearchState } from '../types';

const initialState: SearchState = {
  results: [],
  isLoaging: false,
};

const detailsReducer = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<SearchResult[]>) => {
      state.results = action.payload;
      state.isLoaging = false;
    },
    startLoading: (state) => {
      state.isLoaging = true;
    },
    endLoading: (state) => {
      state.isLoaging = false;
    },
  },
});

export const { setSearchResults, startLoading, endLoading } =
  detailsReducer.actions;
export default detailsReducer.reducer;
