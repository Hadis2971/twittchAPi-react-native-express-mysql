import axios from 'axios';
import { baseUrlForApis } from '../config';
const axiosInstance = axios.create();

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
