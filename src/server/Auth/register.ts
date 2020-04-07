import * as express from 'express';

import DB from '../DB';
import { HashPassword } from '../Utils/Security/password';
import { CreateToken } from '../Utils/Security/tokens';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let email = req.body.email;
        let first = req.body.firstname;
        let last = req.body.lastname;
        let password = HashPassword(req.body.password);
        let result: any = await DB.Users.post(email, first, last, password);
        let token = await CreateToken({ userid: result.insertId })
        res.json({
            token,
            role: 'guest',
            userid: result.insertId
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;