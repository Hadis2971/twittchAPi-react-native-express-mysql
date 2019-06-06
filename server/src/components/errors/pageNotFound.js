const pageNotFoundHandler = (req, res, next) => {
  res.send(`<h1>404 Error Page Not Found!!!</h1>`);
};

export default pageNotFoundHandler;
