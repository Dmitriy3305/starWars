import { ChangeEvent, FC, useRef } from 'react';
import styles from './labelsUpload.module.css';
import { useDispatch } from 'react-redux';
import { setUploadReducer } from '../../../../reducers/uncontrolled/uploadReduser';

const LabelUpload: FC = () => {
  const inputUpload = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = function () {
        const base64String = reader.result as string;
        dispatch(setUploadReducer(base64String));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <label htmlFor="upload" className={styles.label}>
      Upload picture:
      <input
        name="upload"
        type="file"
        ref={inputUpload}
        id="upload"
        onChange={handleUploadChange}
      />
    </label>
  );
};

export default LabelUpload;
