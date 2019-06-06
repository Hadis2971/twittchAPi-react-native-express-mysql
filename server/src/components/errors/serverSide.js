const serverSideErrorHandler = (error, req, res, next) => {
  if (error) {
    res.send(`<h1>Error 500 Internal Server Error Please Try Again Later!!!</h1>`);
  }
};

export default serverSideErrorHandler;
