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
