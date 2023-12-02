import { FC, useRef } from 'react';
import styles from './labelsTC.module.css';

const LabelTC: FC = () => {
  const inputTC = useRef<HTMLInputElement>(null);
  return (
    <label htmlFor="tc" className={styles.label}>
      Accept T&C:
      <input type="checkbox" ref={inputTC} id="tc" />
    </label>
  );
};

export default LabelTC;
