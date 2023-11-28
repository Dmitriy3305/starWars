import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import dataReducer from './dataReducer';
import detailsReduser from './detailsReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  data: dataReducer,
  details: detailsReduser,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
