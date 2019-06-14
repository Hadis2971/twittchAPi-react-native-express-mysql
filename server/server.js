import express from 'express';
import passport from 'passport';
import exphbs from 'express-handlebars';
import path from 'path';
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

const hbs = exphbs.create({ defaultLayout: null, extname: '.handlebars' });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.resolve('./src/public')));

app.use(passport.initialize());
authApis.loginConfig(passport);

router.forEach((route) => {
  app.use(route.path, route.handler);
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`));
