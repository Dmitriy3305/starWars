import { FC, useEffect } from 'react';
import styles from './labelCountry.module.css';
import countries from '../../../countries.json';
import { useDispatch } from 'react-redux';
import { setCountriesReducer } from '../../../../reducers/countriesReduser';
import Autocomplete from './autocomplete/autocomplete';

const LabeCountry: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCountriesReducer(countries));
  }, [dispatch]);
  return (
    <label htmlFor="country" className={styles.label}>
      Country:
      <Autocomplete suggestions={countries.map((country) => country)} />
    </label>
  );
};

export default LabeCountry;
