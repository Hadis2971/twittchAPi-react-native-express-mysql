import network from '../network';
import configFactory from './configFactory';
import configFactoryMyServer from './configFactoryMyServer';
import axios from 'axios';
const axiosInstance = axios.create();

class TwitchApis {
  constructor () {
    this.baseUrl = 'https://api.twitch.tv/kraken/search/';
  }

  _defaultHeaders (clientId, token) {
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

  async addChannelToFavorites (body) {
    const config = await configFactoryMyServer('twitch', body);
    try {
      const addChannelToFavoritesResult = await network.post(config);
      return addChannelToFavoritesResult;
    } catch (error) {
      console.log(`inside addChannelToFavorites error => ${error}`);
    }
  }

  async getAllFavChannels (id) {
    const config = await configFactoryMyServer(`twitch/${id}`, null);
    try {
      const getAllFavChannelsResult = await network.get(config);
      return getAllFavChannelsResult;
    } catch (error) {
      console.log(`inside getAllFavChannels error => ${error}`);
    }
  }

  _request (config) {
    return axiosInstance(config);
  }
}

export default new TwitchApis();
