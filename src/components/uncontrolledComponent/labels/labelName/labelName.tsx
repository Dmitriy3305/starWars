import { ChangeEvent, FC, useRef } from 'react';
import styles from './labelName.module.css';
import { useDispatch } from 'react-redux';
import { setNameReducer } from '../../../../reducers/uncontrolled/nameReduser';

const LabelName: FC = () => {
  const inputName = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameReducer(event.target.value || null));
  };
  return (
    <label htmlFor="name" className={styles.label}>
      Name:
      <input
        type="text"
        ref={inputName}
        id="name"
        onChange={handleNameChange}
      />
    </label>
  );
};

export default LabelName;
