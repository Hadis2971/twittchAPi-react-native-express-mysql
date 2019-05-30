import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('The Email Field is Required')
    .email('Please Enter a Valid Email Address'),
  password: yup.string().required('The Password Field is Required')
});

export default schema;
