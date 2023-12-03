import { FC, useRef } from 'react';
import styles from './labelName.module.css';

type Props = {
  error: string | undefined;
};

const LabelName: FC<Props> = ({ error }) => {
  const inputName = useRef<HTMLInputElement>(null);
  console.log(error, inputName.current?.value);
  return (
    <label htmlFor="name" className={styles.label}>
      Name:
      <input name="name" type="text" ref={inputName} id="name" />
      <span
        className={styles.error}
        style={{ visibility: error ? 'visible' : 'hidden' }}
      >
        {error}
      </span>
    </label>
  );
};

export default LabelName;
