import { combineReducers } from 'redux';
import countriesReducer from '../reducers/countriesReduser';
import unconrolledReducer from './uncontrolled/uncotrolledReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  unconrolled: unconrolledReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
