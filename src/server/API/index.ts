import * as express from 'express';
import veggiesRouter from './vegetables';

const router = express.Router();

router.use('/vegetables', veggiesRouter);


export default router;