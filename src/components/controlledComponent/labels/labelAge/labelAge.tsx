import { ChangeEvent, FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './labelAge.module.css';

const LabelAge: FC = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue('age', value === '' ? null : parseInt(value, 10), {
      shouldValidate: true,
    });
  };

  const ageValue = watch('age');

  return (
    <label htmlFor="age" className={styles.label}>
      Age:
      <input
        {...register('age', {
          required: 'Age is required',
          min: { value: 0, message: 'Age cannot be negative' },
          validate: (value) => !isNaN(value) || 'Age must be a number',
        })}
        type="number"
        id="age"
        value={ageValue || ''}
        onChange={handleChange}
      />
      <span
        className={styles.error}
        style={{ visibility: errors.age ? 'visible' : 'hidden' }}
      >
        {errors.age?.message as string}{' '}
      </span>
    </label>
  );
};

export default LabelAge;
