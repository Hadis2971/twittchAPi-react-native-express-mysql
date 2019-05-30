import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('The First Name Field is Required'),
  lastName: yup.string().required('The Last Name Field is Required'),
  username: yup.string().required('The Username Field is Required'),
  email: yup.string().required('The Email Field is Required')
    .email('Please Enter a Valid Email Address'),
  password: yup.string().required('The Password Field is Required'),
  password2: yup.string().required('The Confirm Password Field is Required')
});

export default schema;
