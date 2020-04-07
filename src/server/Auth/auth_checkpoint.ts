import { RequestHandler} from 'express';
import {ReqUser} from '../Models/index';

export const isGuest: RequestHandler = (req: ReqUser, res, next) => {
    if (req.user && req.user.role === "guest") {
        return next();
    } else {
        return res.sendStatus(401);
    }
}

export const isAdmin: RequestHandler = (req: ReqUser, res, next) => {
    if (req.user && req.user.role === "admin") {
        return next();
    } else {
        return res.sendStatus(401);
    }
}

