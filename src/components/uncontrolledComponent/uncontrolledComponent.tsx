import React, { FC } from 'react';
import styles from './uncontrolledComponent.module.css';
import LabelName from './labels/labelName/labelName';
import LabelAge from './labels/labelAge/labelAge';
import LabelEmail from './labels/LabelEmail/labelEmail';
import LabelsPassword from './labels/labelsPassword/labelsPassword';
import LabelGender from './labels/LabelGender/labelGender';
import LabelTc from './labels/labelTc/labelsTC';
import LabelUpload from './labels/LabelUpload/labelUpload';
import LabelCountry from './labels/labelCountry/labelCountry';

const UncontrolledComponent: FC = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
