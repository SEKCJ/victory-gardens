import * as express from 'express';

import loginRouter from './login';
import registerRouter from './register';
import tokensRouter from './tokenAuth';

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/tokens', tokensRouter);

export default router;
