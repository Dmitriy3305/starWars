import React, { forwardRef } from 'react';

interface InputFieldProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ onChange }, ref) => (
    <input type="text" ref={ref} onChange={onChange} autoComplete="off" />
  )
);

export default InputField;
