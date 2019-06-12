import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';

export const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues);
};

export const turnObjectIntoArray = (obj) => {
  return Object.keys(obj).map(key => obj[key]);
};

export const getUserDataFromAuthToken = async (token) => {
  if (!token) return;
  const decodedAuthToken = await jwtDecode(token);
  return decodedAuthToken;
};

export const saveUserDataToAsyncStorage = async (userData) => {
  for (let key in userData) {
    AsyncStorage.setItem(key, userData[key]);
  }
};

export const removeUserDataFromAsyncStorage = async () => {
  await AsyncStorage.clear();
  console.log(`inside removeUserDataToAsyncStorage AsyncStorage => ${AsyncStorage}`);
};

export const getAuthToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

export const getRefreshToken = async () => {
  const refershtoken = await AsyncStorage.getItem('refreshtoken');
  return refershtoken;
};

export const createPorfileUpdateObject = (data) => {
  const resultObject = {};
  for (let key in data) {
    if (data[key]) {
      resultObject[key] = data[key];
    }
  }
  return resultObject;
};

export const createRequestUrl = (type, searchTerm) => {
  console.log(`inside createRequestUrl type => ${type} searchTerm => ${searchTerm}`);
  switch (type) {
    case 'streams': {
      return `streams?query=${searchTerm}`;
    }
    case 'games': {
      return `games?query=${searchTerm}`;
    }
    case 'channels': {
      return `channels?query=${searchTerm}`;
    }
    default: return `streams?query=${searchTerm}`;
  }
};

export const checkObjectForValues = (obj) => {
  for (let key in obj) {
    if (obj[key]) return true;
  }
  return false;
};

export const getUserDataFromStorage = async () => {
  const firstName = await AsyncStorage.getItem('firstName');
  const lastName = await AsyncStorage.getItem('lastName');
  const username = await AsyncStorage.getItem('username');
  const userEmail = await AsyncStorage.getItem('userEmail');
  return {
    firstName,
    lastName,
    username,
    userEmail
  };
};

export const updateStorageAfterProfileUpdate = async (data) => {
  for (let key in data) {
    await AsyncStorage.setItem(key, data[key]);
  }
};
