import { FC, useRef } from 'react';
import styles from './labelEmail.module.css';

type Props = {
  error: string | undefined;
};

const LabeEmail: FC<Props> = ({ error }) => {
  const inputEmail = useRef<HTMLInputElement>(null);
  return (
    <label htmlFor="email" className={styles.label}>
      Email:
      <input name="email" type="email" ref={inputEmail} id="email" />
      <span
        className={styles.error}
        style={{ visibility: error ? 'visible' : 'hidden' }}
      >
        {error}{' '}
      </span>
    </label>
  );
};

export default LabeEmail;
