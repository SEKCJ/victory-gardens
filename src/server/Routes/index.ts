import * as express from 'express';

import apiRouter from '../API';
import authRouter from '../Auth';

const router = express.Router();

router.use('/api', apiRouter);
router.use('/auth', authRouter);

export default router;