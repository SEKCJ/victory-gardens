import * as express from 'express';

import { tokenCheckpoint, hasRole } from './authCheckpoint';
import DB from '../DB';

const router = express.Router();

router.get('/validate', tokenCheckpoint, hasRole, async (req, res) => {
    const user = req.user;
    res.json({ msg: "successful", user });
})

export default router;
