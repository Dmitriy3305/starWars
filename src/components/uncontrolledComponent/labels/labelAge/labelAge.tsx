import { FC, useRef } from 'react';
import styles from './labelAge.module.css';

const LabeAge: FC = () => {
  const inputAge = useRef<HTMLInputElement>(null);
  return (
    <label htmlFor="name" className={styles.label}>
      Age:
      <input type="number" ref={inputAge} id="age" />
    </label>
  );
};

export default LabeAge;
