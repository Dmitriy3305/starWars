import React, { FC } from 'react';
import styles from './uncontrolledComponent.module.css';
import LabelName from './labels/labelName/labelName';
import LabelAge from './labels/labelAge/labelAge';
import LabelEmail from './labels/LabelEmail/labelEmail';
import LabelsPasswords from './labels/labelsPasswords/labelsPasswords';
import LabelGender from './labels/LabelGender/labelGender';
import LabelTC from './labels/labelTC/labelsTC';
import LabelUpload from './labels/LabelUpload/labelsUpload';
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
      <LabelsPasswords />
      <LabelGender />
      <LabelTC />
      <LabelUpload />
      <LabelCountry />
      <input className={styles.btn} type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledComponent;
