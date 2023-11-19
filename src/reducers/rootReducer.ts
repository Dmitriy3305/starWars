import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
