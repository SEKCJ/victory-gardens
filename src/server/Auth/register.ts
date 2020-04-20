import * as express from 'express';

import DB from '../DB';
import { HashPassword } from '../Utils/Security/password';
import { CreateToken } from '../Utils/Security/tokens';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let email = req.body.email;
        let first = req.body.firstName;
        let last = req.body.lastName;
        let user = req.body.userName;
        let password = HashPassword(req.body.password);
        let result: any = await DB.Users.post(email, first, last, password, user);
        let resultId = 0;
        Object.entries(result).forEach((element) => {
            let obj: any = element[1];
            if (obj.insertId !== 0) {
                resultId = obj.insertId
            }
        })
        let token = await CreateToken({ userid: resultId })
        res.json({
            token,
            role: 'guest',
            userid: resultId
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;