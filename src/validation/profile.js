import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Please Enter a Valid Email Address')
});

export default schema;
