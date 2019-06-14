import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Please Enter an Email Address')
    .email('Please Enter a Valid Email Address')
});

export default schema;
