import { createSlice } from '@reduxjs/toolkit';

const tcReducer = createSlice({
  name: 'tc',
  initialState: {
    value: false,
  },
  reducers: {
    setTcReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTcReducer } = tcReducer.actions;
export default tcReducer.reducer;
