import { combineReducers } from 'redux';
import ageReduser from './ageReduser';
import emailReduser from './emailReduser';
import genderReduser from './genderReduser';
import nameReduser from './nameReduser';
import passwordReduser from './passwordReduser';
import tcReduser from './tcReduser';
import uploadReduser from './uploadReduser';
import countryReduser from './countryReduser';

const unconrolledReducer = combineReducers({
  age: ageReduser,
  email: emailReduser,
  gender: genderReduser,
  name: nameReduser,
  password: passwordReduser,
  tc: tcReduser,
  upload: uploadReduser,
  country: countryReduser,
});

export type RootState = ReturnType<typeof unconrolledReducer>;
export default unconrolledReducer;
