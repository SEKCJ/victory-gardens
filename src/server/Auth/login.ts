import * as express from 'express';
import * as passport from 'passport';

import { CreateToken } from '../Utils/Security/tokens';
import { ReqUser } from '../Models/index';

const router = express.Router();

router.post('/', passport.authenticate('local'), async (req: ReqUser, res, next) => {
    try {
        let token = await CreateToken({ userid: req.user.id });
        res.json({
            token,
            role: req.user.role,
            userid: req.user.id,
        })
    } catch (error) {
        if (error) throw error;
        res.sendStatus(500);
    }
});

export default router;