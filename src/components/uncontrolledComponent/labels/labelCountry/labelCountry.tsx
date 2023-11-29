import { FC, useRef } from 'react';
import styles from '../../uncontrolledComponent.module.css';

const LabeCountry: FC = () => {
  const inputCountry = useRef<HTMLInputElement>(null);
  return (
    <label htmlFor="country" className={styles.label}>
      Country:
      <input type="text" ref={inputCountry} id="country" />
    </label>
  );
};

export default LabeCountry;
