import { FC, useRef } from 'react';
import styles from './labelsPassword.module.css';

type Props = {
  errorPassword: string | undefined;
  errorConfirmPassword: string | undefined;
};

const LabelsPasswords: FC<Props> = ({
  errorPassword,
  errorConfirmPassword,
}) => {
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputConfirmPassword = useRef<HTMLInputElement>(null);

  return (
    <>
      <label htmlFor="password" className={styles.label}>
        Password:
        <input
          type="password"
          ref={inputPassword}
          id="password"
          name="password"
        />
        <span
          className={styles.error}
          style={{ visibility: errorPassword ? 'visible' : 'hidden' }}
        >
          {errorPassword}
        </span>
      </label>
      <label htmlFor="confirm-password" className={styles.label}>
        Confirm password:
        <input
          name="confirm-password"
          type="password"
          ref={inputConfirmPassword}
          id="confirm-password"
        />
        <span
          className={styles.error}
          style={{ visibility: errorConfirmPassword ? 'visible' : 'hidden' }}
        >
          {errorConfirmPassword}
        </span>
      </label>
    </>
  );
};

export default LabelsPasswords;
