import { combineReducers } from 'redux';
import countriesReducer from '../reducers/countriesReduser';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
