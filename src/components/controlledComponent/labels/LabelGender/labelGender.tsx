import { ChangeEvent, FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './labelGender.module.css';

const LabelsGender: FC = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue('gender', value, { shouldValidate: true });
  };

  return (
    <div className={styles.wrapperFlex}>
      <div className={styles.wrapper}>
        Gender:
        <label htmlFor="male" className={styles.label}>
          <input
            {...register('gender', {
              required: 'Gender is required',
            })}
            type="radio"
            id="male"
            value="male"
            onChange={handleChange}
          />
          Male
        </label>
        <label htmlFor="female" className={styles.label}>
          <input
            {...register('gender', {
              required: 'Gender is required',
            })}
            type="radio"
            id="female"
            value="female"
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      <span
        className={styles.error}
        style={{ visibility: errors.gender ? 'visible' : 'hidden' }}
      >
        {errors.gender?.message as string}
      </span>
    </div>
  );
};

export default LabelsGender;
