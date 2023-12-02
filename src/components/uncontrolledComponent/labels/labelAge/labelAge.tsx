import { ChangeEvent, FC, useEffect, useRef } from 'react';
import styles from './labelAge.module.css';
import { useDispatch } from 'react-redux';
import { setAgeReducer } from '../../../../reducers/uncontrolled/ageReduser';

const LabeAge: FC = () => {
  const dispatch = useDispatch();
  const inputAge = useRef<HTMLInputElement>(null);
  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAgeReducer(event.target.valueAsNumber || null));
  };
  return (
    <label htmlFor="name" className={styles.label}>
      Age:
      <input type="number" ref={inputAge} id="age" onChange={handleAgeChange} />
    </label>
  );
};

export default LabeAge;
