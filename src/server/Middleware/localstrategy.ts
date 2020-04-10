import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';

import { ComparePassword } from '../Utils/Security/password';
import DB from '../DB';

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy.Strategy({
    usernameField: "email"
}, async (email, password, done) => {
    try {
        let [result]:any = await DB.Users.findOneByEmail(email);
        let user = result[0];
        if (user && ComparePassword(password, user.password)) {
            delete user.password;
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (error) {
        done(error);
    }
}))