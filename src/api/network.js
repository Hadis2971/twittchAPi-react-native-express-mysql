import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { baseUrlForApis } from '../config';
const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(async (response) => {
  if (response.data.newToken) {
    const rt = await AsyncStorage.getItem('refreshtoken');
    await AsyncStorage.setItem('token', response.data.newToken);
    const data = JSON.parse(response.config.data);
    return axios({
      url: response.config.url,
      method: response.config.method,
      baseURL: response.config.baseURL,
      data: data,
      headers: Object.assign({},
        { authorization: response.data.newToken, refreshtoken: rt })
    });
  }
  return response;
});

class Network {
  _defaultHeaders (token, refreshtoken) {
    return {
      'authorization': token,
      'refreshtoken': refreshtoken
    };
  }

  get (config) {
    return this._request({
      url: config.url,
      method: 'get',
      baseURL: baseUrlForApis,
      headers: Object.assign({}, this._defaultHeaders(config.token, config.refreshtoken), config.headers)
    });
  }

  post (config) {
    for (let key in config) {
      console.log(`key => ${key}  value => ${config[key]}`);
    }
    return this._request({
      url: config.url,
      method: 'post',
      data: config.data,
      baseURL: baseUrlForApis,
      headers: Object.assign({}, this._defaultHeaders(config.token, config.refreshtoken), config.headers)
    });
  }

  _request (config) {
    return axiosInstance(config);
  }
}

export default new Network();
