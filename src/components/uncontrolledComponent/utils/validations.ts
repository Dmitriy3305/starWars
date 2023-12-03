import * as Yup from 'yup';

const formSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .test(
      'uppercase',
      'Name must start with a capital letter',
      function (value) {
        if (value && value.length > 0) {
          const firstLetter = value[0];
          return (
            firstLetter === firstLetter.toUpperCase() ||
            firstLetter === firstLetter.toLocaleUpperCase('ru') ||
            firstLetter === firstLetter.toLocaleUpperCase('en-US')
          );
        }
        return true;
      }
    ),
  age: Yup.number()
    .typeError('Age must be a number')
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).{4,}$/,
      'Must match the pattern 1Ff!'
    ),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  gender: Yup.string()
    .required('Gender is required')
    .oneOf(['male', 'female', 'other'], 'Invalid gender'),
  upload: Yup.mixed().required('Image is required'),
  country: Yup.string().required('Country is required'),
});

export default formSchema;
