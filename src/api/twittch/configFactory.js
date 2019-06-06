import { twittchClientID } from '../../config';
import { getAuthToken } from '../../helpers';
const config = async (url) => {
  return {
    url,
    clientID: twittchClientID,
    token: await getAuthToken()
  };
};

export default config;
