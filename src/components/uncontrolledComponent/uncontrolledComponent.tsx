import React, { FC, useState } from 'react';
import styles from './uncontrolledComponent.module.css';
import LabelName from './labels/labelName/labelName';
import LabelAge from './labels/labelAge/labelAge';
import LabelEmail from './labels/LabelEmail/labelEmail';
import LabelsPassword from './labels/labelsPassword/labelsPassword';
import LabelGender from './labels/LabelGender/labelGender';
import LabelTc from './labels/labelTc/labelsTc';
import LabelUpload from './labels/LabelUpload/labelUpload';
import LabelCountry from './labels/labelCountry/labelCountry';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addSubmission } from '../../reducers/uncontrolled/submissionsReducer';
import { RootState } from '../../reducers/rootReducer';
import formSchema from './utils/validations';
import { ValidationError } from 'yup';

interface Errors {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  tc?: string;
  upload?: string;
  country?: string;
}

const UncontrolledComponent: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const img = useSelector((state: RootState) => state.unconrolled.upload);
  const [errors, setErrors] = useState<Errors>({});
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      age: formData.get('age'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirm-password'),
      gender: formData.get('gender'),
      tc: formData.get('tc'),
      upload: img.value,
      country: formData.get('country'),
    };
    formSchema
      .validate(data, { abortEarly: false })
      .then(() => {
        navigate('/');
        dispatch(addSubmission(data));
      })
      .catch((validationErrors: ValidationError) => {
        const formattedErrors = validationErrors.inner.reduce(
          (errors, error) => ({
            ...errors,
            [error.path!]: error.message ?? '',
          }),
          {} as Errors
        );
        setErrors(formattedErrors);
      });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.container}></div>
      <LabelName error={errors.name} />
      <LabelAge error={errors.age} />
      <LabelEmail error={errors.email} />
      <LabelsPassword
        errorPassword={errors.password}
        errorConfirmPassword={errors.confirmPassword}
      />
      <LabelGender error={errors.gender} />
      <LabelTc error={errors.tc} />
      <LabelUpload error={errors.upload} />
      <LabelCountry error={errors.country} />
      <input className={styles.btn} type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledComponent;
