import validator from 'validator';
import isEmpty from 'is-empty';

const forgotPassValidator = (input) => {
  let errors = {};
  const email = isEmpty(input.email) ? '' : input.email;

  if (validator.isEmpty(email)) {
    errors.email = 'The Email Field is Required';
  } else if (!validator.isEmail(email)) {
    errors.email = 'Please Enter a Valid Email Address';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default forgotPassValidator;
