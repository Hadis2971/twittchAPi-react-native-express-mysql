import authRouter from '../components/auth/routes';
import profileRouter from '../components/profile/routes';
const router =
[
  {
    path: '/auth',
    handler: authRouter
  },
  {
    path: '/profile',
    handler: profileRouter
  }
];

export default router;
