import validator from 'validator';

const forgotPasswordSanitize = (input) => {
  input.email = validator.normalizeEmail(input.email);
  input.email = validator.escape(input.email).trim(input.email);
};

export default forgotPasswordSanitize;
