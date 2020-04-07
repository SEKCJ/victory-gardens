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
        let [user] = await DB.Users.findOneByEmail(email);
        if (user.email && ComparePassword(password, user.password)) {
            delete user.password;
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (error) {
        done(error);
    }
}))