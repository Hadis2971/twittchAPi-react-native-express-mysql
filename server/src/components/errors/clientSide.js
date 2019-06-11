const clientSideErrorHandler = (req, res, next) => {
  if (req.xhr) {
    res.json({ Error: 'Bad Request!!!' });
  } else {
    next();
  }
};

export default clientSideErrorHandler;
