import { ChangeEvent, FC, useRef } from 'react';
import styles from './labelsUpload.module.css';
import { useDispatch } from 'react-redux';
import { setUploadReducer } from '../../../../reducers/uncontrolled/uploadReduser';

const LabelUpload: FC = () => {
  const inputUpload = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    dispatch(setUploadReducer(file));
  };
  return (
    <label htmlFor="upload" className={styles.label}>
      Upload picture:
      <input
        type="file"
        ref={inputUpload}
        id="upload"
        onChange={handleUploadChange}
      />
    </label>
  );
};

export default LabelUpload;
