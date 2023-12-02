import { FC, useRef } from 'react';
import styles from './labelsUpload.module.css';

const LabelUpload: FC = () => {
  const inputUpload = useRef<HTMLInputElement>(null);
  return (
    <label htmlFor="upload" className={styles.label}>
      Upload picture:
      <input type="file" ref={inputUpload} id="upload" />
    </label>
  );
};

export default LabelUpload;
