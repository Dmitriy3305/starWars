import { ChangeEvent, FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './labelEmail.module.css';

const LabelEmail: FC = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue('email', value, { shouldValidate: true });
  };

  return (
    <label htmlFor="email" className={styles.label}>
      Email:
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Enter valid email',
          },
        })}
        type="text"
        id="email"
        onChange={handleChange}
      />
      <span
        className={styles.error}
        style={{ visibility: errors.email ? 'visible' : 'hidden' }}
      >
        {errors.email?.message as string}{' '}
      </span>
    </label>
  );
};

export default LabelEmail;
