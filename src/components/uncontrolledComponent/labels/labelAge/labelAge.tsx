import { FC, useRef } from 'react';
import styles from './labelAge.module.css';

type Props = {
  error: string | undefined;
};

const LabeAge: FC<Props> = ({ error }) => {
  const inputAge = useRef<HTMLInputElement>(null);
  return (
    <label htmlFor="age" className={styles.label}>
      Age:
      <input name="age" type="number" ref={inputAge} id="age" />
      <span
        className={styles.error}
        style={{ visibility: error ? 'visible' : 'hidden' }}
      >
        {error}
      </span>
    </label>
  );
};

export default LabeAge;
