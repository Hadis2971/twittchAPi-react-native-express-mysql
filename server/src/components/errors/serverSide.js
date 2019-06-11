const serverSideErrorHandler = (error, req, res, next) => {
  if (error) {
    res.json({
      Error: 'Server Error Please Try Again Later'
    });
  }
};

export default serverSideErrorHandler;
