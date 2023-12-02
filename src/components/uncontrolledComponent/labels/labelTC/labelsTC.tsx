import { ChangeEvent, FC, useRef } from 'react';
import styles from './labelsTC.module.css';
import { useDispatch } from 'react-redux';
import { setTcReducer } from '../../../../reducers/uncontrolled/tcReduser';

const LabelTc: FC = () => {
  const inputTC = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleTcChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTcReducer(event.target.checked));
  };
  return (
    <label htmlFor="tc" className={styles.label}>
      Accept T&C:
      <input type="checkbox" ref={inputTC} id="tc" onChange={handleTcChange} />
    </label>
  );
};

export default LabelTc;
