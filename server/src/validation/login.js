import validator from 'validator';
import isEmpaty from 'is-empty';

const loginValidator = (input) => {
  let errors = {};
  const email = isEmpaty(input.email) ? '' : input.email;
  const password = isEmpaty(input.password) ? '' : input.password;

  if (validator.isEmpty(email)) {
    errors.email = 'The Email Field is Required!!!';
  }

  if (validator.isEmpty(password)) {
    errors.password = 'The Password Field is Required!!!';
  }

  return {
    errors,
    isValid: isEmpaty(errors)
  };
};

export default loginValidator;
