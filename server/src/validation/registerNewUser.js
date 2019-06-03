import validator from 'validator';
import isEmpaty from 'is-empty';

const registerNewUserInputValidator = (input) => {
  let errors = {};
  const firstName = isEmpaty(input.firstName) ? '' : input.firstName;
  const lastName = isEmpaty(input.lastName) ? '' : input.lastName;
  const email = isEmpaty(input.email) ? '' : input.email;
  const username = isEmpaty(input.username) ? '' : input.username;
  const password = isEmpaty(input.password) ? '' : input.password;
  const password2 = isEmpaty(input.password2) ? '' : input.password2;

  if (validator.isEmpty(firstName)) {
    errors.firstName = 'The First Name Field is Required!!!';
  }

  if (validator.isEmpty(lastName)) {
    errors.lastName = 'The Last Name Field is Required!!!';
  }

  if (validator.isEmpty(email)) {
    errors.email = 'The Email Field is Required!!!';
  } else if (!(validator.isEmail(email))) {
    errors.email = 'Please Enter a Valid Email Address!!!';
  }

  if (validator.isEmpty(username)) {
    errors.username = 'The Username Field is Required!!!';
  }

  if (validator.isEmpty(password)) {
    errors.password = 'The Password Field is Required!!!';
  } else if (!(validator.isLength(password, { min: 5 }))) {
    errors.password = 'The Password Must Be At Least 5 Characters Long!!!';
  }

  if (validator.isEmpty(password2)) {
    errors.password2 = 'The Confirm Password Field is Required!!!';
  } else if (!(validator.equals(password, password2))) {
    errors.password2 = 'The Two Passwords Must Match!!!';
  }

  return {
    errors,
    isValid: isEmpaty(errors)
  };
};

export default registerNewUserInputValidator;
