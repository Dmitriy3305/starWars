import { ChangeEvent, FC, useRef } from 'react';
import styles from './labelsPassword.module.css';
import { useDispatch } from 'react-redux';
import { setPasswordReducer } from '../../../../reducers/uncontrolled/passwordReduser';

const LabelsPasswords: FC = () => {
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputConfirmPassword = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPasswordReducer(event.target.value || null));
  };
  return (
    <>
      <label htmlFor="password" className={styles.label}>
        Password:
        <input
          type="password"
          ref={inputPassword}
          id="password"
          onChange={handlePasswordChange}
        />
      </label>
      <label htmlFor="confirm-password" className={styles.label}>
        Confirm password:
        <input
          type="password"
          ref={inputConfirmPassword}
          id="confirm-password"
          onChange={handlePasswordChange}
        />
      </label>
    </>
  );
};

export default LabelsPasswords;
