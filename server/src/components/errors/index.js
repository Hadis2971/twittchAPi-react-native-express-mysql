import pageNotFoundHandler from './pageNotFound';
import clientSideErrorHandler from './clientSide';
import serverSideErrorHandler from './serverSide';
const router = require('express').Router();

router.use(pageNotFoundHandler);
router.use(clientSideErrorHandler);
router.use(serverSideErrorHandler);

export default router;
