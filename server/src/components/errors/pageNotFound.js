const pageNotFoundHandler = (req, res, next) => {
  res.status(404);
  res.json({ Error: '404 Error Page Not Found!!!' });
};

export default pageNotFoundHandler;
