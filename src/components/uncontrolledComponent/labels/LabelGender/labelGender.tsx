import { FC, useRef } from 'react';
import styles from './labelGender.module.css';

type Props = {
  error: string | undefined;
};

const LabelGender: FC<Props> = ({ error }) => {
  const maleInputRef = useRef<HTMLInputElement>(null);
  const femaleInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.wrapperFlex}>
      <div className={styles.wrapper}>
        Gender:
        <label htmlFor="gender" className={styles.label}>
          <input
            type="radio"
            name="gender"
            value="male"
            ref={maleInputRef}
            className={styles.radioInput}
          />
          Male
        </label>
        <label htmlFor="gender" className={styles.label}>
          <input
            type="radio"
            name="gender"
            value="female"
            ref={femaleInputRef}
            className={styles.radioInput}
          />
          Female
        </label>
      </div>
      <span
        className={styles.error}
        style={{ visibility: error ? 'visible' : 'hidden' }}
      >
        {error}
      </span>
    </div>
  );
};

export default LabelGender;
