import configFactory from './configFactory';
import axios from 'axios';
const axiosInstance = axios.create();

class TwitchApis {
  constructor () {
    this.baseUrl = 'https://api.twitch.tv/kraken/search/';
  }

  _defaultHeaders (clientId, token, refreshtoken) {
    return {
      'Client-ID': clientId,
      'authorization': token
    };
  }

  async get (url) {
    const config = await configFactory(url);
    return this._request({
      url: config.url,
      baseURL: this.baseUrl,
      method: 'get',
      headers: Object.assign({}, this._defaultHeaders(config.clientID, config.token))
    });
  }

  _request (config) {
    return axiosInstance(config);
  }
}

export default new TwitchApis();
