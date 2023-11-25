import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchResult, SearchState } from '../types';

const initialState: SearchState = {
  results: [],
  isLoaging: false,
};

const dataReducer = createSlice({
  name: 'search',
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
  dataReducer.actions;
export default dataReducer.reducer;
