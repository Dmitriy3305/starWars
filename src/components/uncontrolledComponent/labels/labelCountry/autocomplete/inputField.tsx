import React, { forwardRef } from 'react';
import styles from '../labelCountry.module.css';

interface InputFieldProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ onChange }, ref) => (
    <input
      name="country"
      type="text"
      ref={ref}
      onChange={onChange}
      autoComplete="off"
      className={styles.input}
    />
  )
);

export default InputField;
