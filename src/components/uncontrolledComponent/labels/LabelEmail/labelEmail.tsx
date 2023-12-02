import { ChangeEvent, FC, useRef } from 'react';
import styles from './labelEmail.module.css';
import { setEmailReducer } from '../../../../reducers/uncontrolled/emailReduser';
import { useDispatch } from 'react-redux';

const LabeEmail: FC = () => {
  const inputEmail = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmailReducer(event.target.value || null));
  };
  return (
    <label htmlFor="email" className={styles.label}>
      Email:
      <input
        type="email"
        ref={inputEmail}
        id="email"
        onChange={handleEmailChange}
      />
    </label>
  );
};

export default LabeEmail;
