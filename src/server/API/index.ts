import * as express from 'express';

import vegetablesRouter from './vegetables';
import myvegetablesRouter from './myvegetables';
import helpmechooseRouter from './helpmechoose';


import { tokenCheckpoint } from '../Auth/authCheckpoint';

const router = express.Router();

router.use(tokenCheckpoint);
router.use('/vegetables', vegetablesRouter);
router.use('/myvegetables', myvegetablesRouter);
router.use('/helpmechoose', helpmechooseRouter);

export default router;