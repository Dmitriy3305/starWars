import { FC, useRef } from 'react';
import styles from '../../uncontrolledComponent.module.css';

const LabelGender: FC = () => {
  const inputGender = useRef<HTMLInputElement>(null);
  return (
    <label htmlFor="gender" className={styles.label}>
      Gender:
      <span>Male</span>
      <input type="checkbox" ref={inputGender} id="gender" />
      <span>Female</span>
    </label>
  );
};

export default LabelGender;
