import { getAuthToken, getRefreshToken } from '../../helpers';

const config = async (url, data) => {
  return {
    url,
    token: await getAuthToken(),
    refreshtoken: await getRefreshToken(),
    data
  };
};

export default config;
