import { createSlice } from '@reduxjs/toolkit';

const uploadReducer = createSlice({
  name: 'upload',
  initialState: {
    value: null,
  },
  reducers: {
    setUploadReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUploadReducer } = uploadReducer.actions;
export default uploadReducer.reducer;
