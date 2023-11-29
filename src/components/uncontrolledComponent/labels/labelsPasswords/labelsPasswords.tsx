import { FC, useRef } from 'react';
import styles from '../../uncontrolledComponent.module.css';

const LabelsPasswords: FC = () => {
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputConfirmPassword = useRef<HTMLInputElement>(null);
  return (
    <>
      <label htmlFor="password" className={styles.label}>
        Password:
        <input type="password" ref={inputPassword} id="password" />
      </label>
      <label htmlFor="confirm-password" className={styles.label}>
        Confirm password:
        <input
          type="password"
          ref={inputConfirmPassword}
          id="confirm-password"
        />
      </label>
    </>
  );
};

export default LabelsPasswords;
