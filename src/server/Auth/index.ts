import * as express from 'express';

import loginRouter from './login';
import registerRouter from './register';
import validateRouter from './tokenAuth';

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/validate', validateRouter);

export default router;
