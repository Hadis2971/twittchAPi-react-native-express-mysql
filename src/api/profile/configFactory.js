import { getTokenFromAsyncStorage } from '../../helpers';

const config = async (url, data) => {
  return {
    url,
    token: await getTokenFromAsyncStorage(),
    refreshtoken: null,
    data
  };
};

export default config;
