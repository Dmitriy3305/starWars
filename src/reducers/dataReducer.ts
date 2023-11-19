import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchResult } from '../types';

interface SearchState {
  results: SearchResult[];
}

const initialState: SearchState = {
  results: [],
};

const dataReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<SearchResult[]>) => {
      state.results = action.payload;
    },
  },
});

export const { setSearchResults } = dataReducer.actions;
export default dataReducer.reducer;
