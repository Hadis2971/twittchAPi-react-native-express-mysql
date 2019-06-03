const ConfigFactory = (url, data) => {
  return {
    url,
    token: null,
    refreshtoken: null,
    data
  };
};

export default ConfigFactory;
