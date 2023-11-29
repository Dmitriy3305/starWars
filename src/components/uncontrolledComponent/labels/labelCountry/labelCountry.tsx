import { FC, useEffect, useRef } from 'react';
import styles from '../../uncontrolledComponent.module.css';
import countries from '../../../countries.json';
import { useDispatch } from 'react-redux';
import { setCountriesReducer } from '../../../../reducers/countriesReduser';

const LabeCountry: FC = () => {
  const inputCountry = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCountriesReducer(countries));
  }, [dispatch]);
  return (
    <label htmlFor="country" className={styles.label}>
      Country:
      <input type="text" ref={inputCountry} id="country" />
    </label>
  );
};

export default LabeCountry;
