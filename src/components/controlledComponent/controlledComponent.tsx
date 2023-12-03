import styles from './controlledComponent.module.css';
import { FC } from 'react';
import {
  useForm,
  FormProvider,
  FieldErrors,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';
import LabelAge from './labels/labelAge/labelAge';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addSubmissionControlled } from '../../reducers/controlled/submissionsReducer';
import LabelEmail from './labels/LabelEmail/labelEmail';
import LabelName from './labels/labelName/labelName';
import LabelsPassword from './labels/labelsPassword/labelsPassword';
import LabelsGender from './labels/LabelGender/labelGender';

const ControlledComponent: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formMethods = useForm<FormInputs>();
  const { handleSubmit } = formMethods;

  interface FormInputs {
    name: string;
    age: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
  }

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    navigate('/');
    dispatch(addSubmissionControlled(data));
  };

  const onError: SubmitErrorHandler<FormInputs> = (
    errors: FieldErrors<FormInputs>
  ) => {
    console.log(errors);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={styles.form}
        noValidate
      >
        <LabelName />
        <LabelAge />
        <LabelEmail />
        <LabelsPassword />
        <LabelsGender />
        <input type="submit" value="Submit" className={styles.btn} />
      </form>
    </FormProvider>
  );
};

export default ControlledComponent;
