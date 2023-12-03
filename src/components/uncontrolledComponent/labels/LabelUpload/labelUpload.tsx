import { ChangeEvent, FC, useRef } from 'react';
import styles from './labelsUpload.module.css';
import { useDispatch } from 'react-redux';
import { setUploadReducer } from '../../../../reducers/uncontrolled/uploadReduser';

type Props = {
  error: string | undefined;
};

const LabelUpload: FC<Props> = ({ error }) => {
  const inputUpload = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        alert('Допустимые расширения - JPEG и PNG');
        return;
      }
      const image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = function () {
        if (image.width !== 200 || image.height !== 200) {
          alert('Размер изображения должен быть 200x200 пикселей');
          return;
        } else {
          const reader = new FileReader();
          reader.onloadend = function () {
            const base64String = reader.result as string;
            dispatch(setUploadReducer(base64String));
          };
          reader.readAsDataURL(file);
        }
      };
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
      <span
        className={styles.error}
        style={{ visibility: error ? 'visible' : 'hidden' }}
      >
        {error}
      </span>
    </label>
  );
};

export default LabelUpload;
