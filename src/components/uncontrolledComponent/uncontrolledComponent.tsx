import React, { FC } from 'react';
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

const UncontrolledComponent: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const img = useSelector((state: RootState) => state.unconrolled.upload);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate('/');
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      age: formData.get('age'),
      email: formData.get('email'),
      password: formData.get('password'),
      gender: formData.get('gender'),
      tc: formData.get('tc'),
      upload: img.value,
      country: formData.get('country'),
    };
    dispatch(addSubmission(data));
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.container}></div>
      <LabelName />
      <LabelAge />
      <LabelEmail />
      <LabelsPassword />
      <LabelGender />
      <LabelTc />
      <LabelUpload />
      <LabelCountry />
      <input className={styles.btn} type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledComponent;
