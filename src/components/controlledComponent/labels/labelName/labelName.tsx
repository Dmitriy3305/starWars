import { ChangeEvent, FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './labelName.module.css';

const LabelName: FC = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue('name', value, { shouldValidate: true });
  };

  return (
    <label htmlFor="name" className={styles.label}>
      Name:
      <input
        {...register('name', {
          required: 'Name is required',
          validate: {
            hasUpperCase: (value) =>
              /[A-Z]/.test(value) || 'Name must start with a capital letter',
          },
        })}
        type="text"
        id="name"
        onChange={handleChange}
      />
      <span
        className={styles.error}
        style={{ visibility: errors.name ? 'visible' : 'hidden' }}
      >
        {errors.name?.message as string}{' '}
      </span>
    </label>
  );
};

export default LabelName;
