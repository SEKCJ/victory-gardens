import * as express from 'express';

import vegetablesRouter from './vegetables';
import savedvegetablesRouter from './savedvegetables';
import helpmechooseRouter from './helpchoose';


import { tokenCheckpoint } from '../Auth/authCheckpoint';

const router = express.Router();

router.use(tokenCheckpoint);
router.use('/vegetables', vegetablesRouter);
router.use('/savedvegetables', savedvegetablesRouter);
router.use('/helpmechoose', helpmechooseRouter);

export default router;