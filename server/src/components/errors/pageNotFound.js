const pageNotFoundHandler = (req, res, next) => {
  res.json({
    Error: 'Content Not Available'
  });
};

export default pageNotFoundHandler;
