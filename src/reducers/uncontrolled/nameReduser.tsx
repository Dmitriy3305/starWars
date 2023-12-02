import { createSlice } from '@reduxjs/toolkit';

const nameReducer = createSlice({
  name: 'name',
  initialState: {
    value: ' ',
  },
  reducers: {
    setNameReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNameReducer } = nameReducer.actions;
export default nameReducer.reducer;
