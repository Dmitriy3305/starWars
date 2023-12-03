import { combineReducers } from 'redux';
import submissionsReducer from './submissionsReducer';

const conrolledReducer = combineReducers({
  submissions: submissionsReducer,
});

export type RootState = ReturnType<typeof conrolledReducer>;
export default conrolledReducer;
