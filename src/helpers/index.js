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
  console.log(userData);
  for (let key in userData) {
    AsyncStorage.setItem(key, userData[key]);
  }
  const a = await AsyncStorage.getItem('refreshtoken');
  console.log(a);
  const b = await AsyncStorage.getItem('token');
  console.log(b);
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
  switch (type) {
    case 'streams': {
      return `streams?query=${searchTerm}`;
    }
  }
};
