import * as express from 'express';

import DB from '../DB';
import { tokenCheckpoint } from './authCheckpoint';

const router = express.Router();


router.use(tokenCheckpoint);

router.post('/', async (req, res) => {
    let email: string = req.body.email;
    try {
        res.json((await DB.Users.checkEmail(email))[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json("could not be completed")
    }
})




export default router;