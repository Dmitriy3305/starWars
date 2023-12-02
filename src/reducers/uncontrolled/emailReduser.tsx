import { createSlice } from '@reduxjs/toolkit';

const emailReducer = createSlice({
  name: 'email',
  initialState: {
    value: '',
  },
  reducers: {
    setEmailReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEmailReducer } = emailReducer.actions;
export default emailReducer.reducer;
