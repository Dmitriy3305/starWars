import { combineReducers } from 'redux';
import uploadReduser from './uploadReduser';
import submissionsReducer from './submissionsReducer';

const unconrolledReducer = combineReducers({
  upload: uploadReduser,
  submissions: submissionsReducer,
});

export type RootState = ReturnType<typeof unconrolledReducer>;
export default unconrolledReducer;
