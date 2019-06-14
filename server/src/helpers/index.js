import bcrypt from 'bcryptjs';

export const createNewPayload = (data) => {
  const tokenPayload = {
    userID: data.userID,
    firstName: data.firstName,
    lastName: data.lastName,
    userEmail: data.userEmail,
    username: data.username
  };
  return tokenPayload;
};

export const hashSomething = async (something) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(something, salt);
  return hash;
};
