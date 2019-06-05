import validator from 'validator';

const registerNewUserInputSanitizer = (input) => {
  input.firstName = validator.escape(input.firstName).trim(input.firstName);
  input.lastName = validator.escape(input.lastName).trim(input.lastName);
  input.email = validator.normalizeEmail(input.email);
  input.email = validator.escape(input.email).trim(input.email);
  input.username = validator.escape(input.username).trim(input.username);
  input.password = validator.escape(input.password).trim(input.password);
  input.password2 = validator.escape(input.password2).trim(input.password2);
};

export default registerNewUserInputSanitizer;
