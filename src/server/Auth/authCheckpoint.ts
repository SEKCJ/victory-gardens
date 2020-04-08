import * as passport from 'passport';

import { RequestHandler, Request } from 'express';
import { ReqUser } from '../Models/index';

export const isGuest: RequestHandler = (req: ReqUser, res, next) => {
    if (req.user && req.user.role === "guest") {
        return next();
    } else {
        return res.status(401).json({ msg: "not authorized" });
    }
}

export const isAdmin: RequestHandler = (req: ReqUser, res, next) => {
    if (req.user && req.user.role === "admin") {
        return next();
    } else {
        return res.sendStatus(401);
    }
}

export const tokenCheckpoint: RequestHandler = (req, res, next) => {
    passport.authenticate('bearer', (err, user) => {
        if (user) {
            req.user = user;
        }
        next();
    })(req, res, next);
}

export const hasRole: RequestHandler = (req: ReqUser, res, next) => {
    if (req.user) {
        if (req.user.role === "admin" || req.user.role === "guest") {
            return next();
        }
    } else {
        return res.status(401).json({ msg: "not authorized" })
    }
}
