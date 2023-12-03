import { FC, useRef } from 'react';
import styles from './labelsTC.module.css';

type Props = {
  error: string | undefined;
};

const LabelTc: FC<Props> = ({ error }) => {
  const inputTC = useRef<HTMLInputElement>(null);

  return (
    <>
      <label htmlFor="tc" className={styles.label}>
        Accept T&C:
        <input
          name="tc"
          type="checkbox"
          ref={inputTC}
          id="tc"
          defaultChecked={false}
        />
      </label>
      <span
        className={styles.error}
        style={{ visibility: error ? 'visible' : 'hidden' }}
      >
        {error}
      </span>
    </>
  );
};

export default LabelTc;
