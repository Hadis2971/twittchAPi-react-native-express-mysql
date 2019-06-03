const clientSideErrorHandler = (req, res, next) => {
  if (req.xhr) {
    res.status(400);
    res.json({ Error: 'Bad Request!!!' });
  } else {
    next();
  }
};

export default clientSideErrorHandler;
