const serverSideErrorHandler = (error, req, res, next) => {
  if (error) {
    res.status(500);
    res.json({ Error: 'Error 500 Internal Server Error Please Try Again Later!!!' });
  }
};

export default serverSideErrorHandler;
