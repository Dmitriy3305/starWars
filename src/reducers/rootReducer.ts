import { combineReducers } from 'redux';
import countriesReducer from '../reducers/countriesReduser';
import unconrolledReducer from './uncontrolled/uncotrolledReducer';
import controlledReducer from './controlled/controlledReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  unconrolled: unconrolledReducer,
  controlled: controlledReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
