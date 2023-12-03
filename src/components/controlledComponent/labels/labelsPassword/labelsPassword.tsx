import { ChangeEvent, FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './labelsPassword.module.css';

const LabelsPassword: FC = () => {
  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useFormContext();

  const passwordValue = watch('password');

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.name, event.target.value, { shouldValidate: true });
  };
  const handleChangeConfirmPassword = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.name, event.target.value, { shouldValidate: true });
  };

  return (
    <>
      <label htmlFor="password" className={styles.label}>
        Password:
        <input
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).{4,}$/,
              message: 'Must match the pattern 1Ff!',
            },
          })}
          type="password"
          id="password"
          onChange={handleChangePassword}
        />
        <span
          className={styles.error}
          style={{ visibility: errors.password ? 'visible' : 'hidden' }}
        >
          {errors.password?.message as string}
        </span>
      </label>
      <label htmlFor="confirm-password" className={styles.label}>
        Confirm Password:
        <input
          {...register('confirmPassword', {
            required: 'Confirm password is required',
            validate: (value) =>
              value === passwordValue || 'The passwords do not match',
          })}
          type="password"
          id="confirm-password"
          onChange={handleChangeConfirmPassword}
        />
        <span
          className={styles.error}
          style={{ visibility: errors.confirmPassword ? 'visible' : 'hidden' }}
        >
          {errors.confirmPassword?.message as string}
        </span>
      </label>
    </>
  );
};

export default LabelsPassword;
