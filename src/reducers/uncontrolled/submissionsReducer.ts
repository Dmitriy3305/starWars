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
  tc: FormDataEntryValue | null;
  upload: string | null;
  country: FormDataEntryValue | null;
}

const submissionsSlice = createSlice({
  name: 'submissions',
  initialState,
  reducers: {
    addSubmission: (state, action: PayloadAction<FormSubmission>) => {
      state.submissions.push(action.payload);
    },
  },
});

export const { addSubmission } = submissionsSlice.actions;

export default submissionsSlice.reducer;
