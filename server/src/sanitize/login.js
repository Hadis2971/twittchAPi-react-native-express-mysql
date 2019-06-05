import validator from 'validator';

const loginUserInputSanitizer = (input) => {
  input.email = validator.normalizeEmail(input.email);
  input.email = validator.escape(input.email).trim(input.email);
  input.password = validator.escape(input.password).trim(input.password);
};

export default loginUserInputSanitizer;
