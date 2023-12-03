import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SubmissionState {
  submissions: FormSubmission[];
}

const initialState: SubmissionState = {
  submissions: [],
};

interface FormSubmission {
  name: FormDataEntryValue | null;
  age: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  gender: FormDataEntryValue | null;
}

const submissionsSlice = createSlice({
  name: 'submissions',
  initialState,
  reducers: {
    addSubmissionControlled: (state, action: PayloadAction<FormSubmission>) => {
      state.submissions.push(action.payload);
    },
  },
});

export const { addSubmissionControlled } = submissionsSlice.actions;

export default submissionsSlice.reducer;
