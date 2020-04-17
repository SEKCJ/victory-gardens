import * as express from 'express';

import vegetablesRouter from './vegetables';
import savedvegetablesRouter from './savedvegetables';
import helpchooseRouter from './helpchoose';
import herbsRouter from './herbs';


import { tokenCheckpoint } from '../Auth/authCheckpoint';

const router = express.Router();

router.use(tokenCheckpoint);
router.use('/vegetables', vegetablesRouter);
router.use('/savedvegetables', savedvegetablesRouter);
router.use('/helpchoose', helpchooseRouter);
router.use('/herbs', herbsRouter);

export default router;