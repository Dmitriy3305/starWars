import { FC, useEffect } from 'react';
import styles from './labelCountry.module.css';
import countries from '../../../countries.json';
import { useDispatch } from 'react-redux';
import { setCountriesReducer } from '../../../../reducers/countriesReduser';
import Autocomplete from './autocomplete/autocomplete';

type Props = {
  error: string | undefined;
};

const LabeCountry: FC<Props> = ({ error }) => {
  const dispatch = useDispatch();
  console.log(error);
  useEffect(() => {
    dispatch(setCountriesReducer(countries));
  }, [dispatch]);
  return (
    <label htmlFor="country" className={styles.label}>
      Country:
      <Autocomplete suggestions={countries.map((country) => country)} />
      <span
        className={styles.error}
        style={{ visibility: error ? 'visible' : 'hidden' }}
      >
        {error}
      </span>
    </label>
  );
};

export default LabeCountry;
