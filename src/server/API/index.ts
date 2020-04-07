import * as express from 'express';

import veggiesRouter from './vegetables';
import { tokenCheckpoint } from '../Auth/authCheckpoint';

const router = express.Router();

router.use(tokenCheckpoint);
router.use('/vegetables', veggiesRouter);


export default router;