import { ChangeEvent, FC, useRef } from 'react';
import styles from './labelGender.module.css';
import { useDispatch } from 'react-redux';
import { setGenderReducer } from '../../../../reducers/uncontrolled/genderReduser';

const LabelGender: FC = () => {
  const maleInputRef = useRef<HTMLInputElement>(null);
  const femaleInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setGenderReducer(event.target.value || null));
  };
  return (
    <div className={styles.wrapper}>
      Gender:
      <label htmlFor="gender" className={styles.label}>
        <input
          type="radio"
          name="gender"
          value="male"
          ref={maleInputRef}
          className={styles.radioInput}
          onChange={handleGenderChange}
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
          onChange={handleGenderChange}
        />
        Female
      </label>
    </div>
  );
};

export default LabelGender;
