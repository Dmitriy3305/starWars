import { FC, useRef } from 'react';
import styles from './labelName.module.css';

const LabelName: FC = () => {
  const inputName = useRef<HTMLInputElement>(null);

  return (
    <label htmlFor="name" className={styles.label}>
      Name:
      <input name="name" type="text" ref={inputName} id="name" />
    </label>
  );
};

export default LabelName;
