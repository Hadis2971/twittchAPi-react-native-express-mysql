import authRouter from '../components/auth/routes';
import profileRouter from '../components/profile/routes';
import twitchRouter from '../components/twitch/routes';
import forgotPasswordRouter from '../components/forgotPassword/routes';
const router =
[
  {
    path: '/auth',
    handler: authRouter
  },
  {
    path: '/profile',
    handler: profileRouter
  },
  {
    path: '/twitch',
    handler: twitchRouter
  },
  {
    path: '/forgotPassword',
    handler: forgotPasswordRouter
  }
];

export default router;
