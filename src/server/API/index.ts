import * as express from 'express';

import vegetablesRouter from './vegetables';
import myvegetablesRouter from './myvegetables';

import { tokenCheckpoint } from '../Auth/authCheckpoint';

const router = express.Router();

router.use(tokenCheckpoint);
router.use('/vegetables', vegetablesRouter);
router.use('/myvegetables', myvegetablesRouter);

export default router;