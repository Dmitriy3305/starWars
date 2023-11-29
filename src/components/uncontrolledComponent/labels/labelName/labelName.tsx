import { FC, useRef } from 'react';
import styles from '../../uncontrolledComponent.module.css';

const LabelName: FC = () => {
  const inputName = useRef<HTMLInputElement>(null);
  return (
    <label htmlFor="name" className={styles.label}>
      Name:
      <input type="text" ref={inputName} id="name" />
    </label>
  );
};

export default LabelName;
