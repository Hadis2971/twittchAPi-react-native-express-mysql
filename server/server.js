import express from 'express';
import passport from 'passport';
import { PORT } from './src/config';

import router from './src/router';
import errorHandler from './src/components/errors';
import authApis from './src/components/auth/authAPI';
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
authApis.loginConfig(passport);

router.forEach((route) => {
  app.use(route.path, route.handler);
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`));
