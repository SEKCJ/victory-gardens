import * as passport from 'passport';
import * as BearerStrategy from 'passport-http-bearer';

import { ValidToken } from '../Utils/Security/tokens';
import DB from '../DB';

passport.use(new BearerStrategy.Strategy(async (token, done) => {
    try {
        let payload = await ValidToken(token);
        let [user] = await DB.Users.findOneById(payload.userid);
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (error) {
        console.log(error);
        done(error);
    }
}))