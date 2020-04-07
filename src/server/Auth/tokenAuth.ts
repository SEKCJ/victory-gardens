import * as express from 'express';

import {tokenCheckpoint, isGuest} from './authCheckpoint';;

const router = express.Router();

router.get('/validate', tokenCheckpoint, isGuest, async(req, res) => {
    const user = req.user;
    res.json({msg: "successful", user});
})

export default router;
