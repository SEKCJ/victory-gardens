import * as express from 'express';

import DB from '../DB';
import { tokenCheckpoint, hasRole } from './authCheckpoint';
import { ComparePassword, HashPassword } from '../Utils/Security/password';

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

router.post('/user', hasRole, async (req, res) => {
    let token = req.body.Token;
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0]
    let [user]: any = await DB.Users.getUserInfo(result.userid)
    res.json(user)
})


router.put('/', hasRole, async (req, res) => {
    let token = req.body.Token;
    let password = req.body.password;
    let newPassword = req.body.newPassword;
    try {
        let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
        let userid = parseInt(result.userid, 10);
        let [userResults]: any = await DB.Users.findOneById(userid)
        let user = userResults[0];
        if (user && ComparePassword(password, user.password)) {
            delete user.password;
            let hashed = HashPassword(newPassword);
            res.json(await DB.Users.updatePassword(userid, hashed));
        } else {
            res.sendStatus(400)
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.delete('/', hasRole, async (req, res) => {
    let token = req.body.Token;
    let password = req.body.password;
    try {
        let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
        let userid = parseInt(result.userid, 10);
        let [userResults]: any = await DB.Users.findOneById(userid)
        let user = userResults[0];
        if (user && ComparePassword(password, user.password)) {
            delete user.password;
            res.json(await DB.Users.deleteUser(userid))
        } else {
            res.sendStatus(400);
        }
    } catch (error) {

    }
})


export default router;