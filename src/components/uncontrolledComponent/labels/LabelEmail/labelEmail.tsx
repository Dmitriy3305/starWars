import { FC, useRef } from 'react';
import styles from './labelEmail.module.css';

const LabeEmail: FC = () => {
  const inputEmail = useRef<HTMLInputElement>(null);
  return (
    <label htmlFor="email" className={styles.label}>
      Email:
      <input name="email" type="email" ref={inputEmail} id="email" />
    </label>
  );
};

export default LabeEmail;
