import { RequestHandler, Request } from 'express';

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

export interface ReqUser extends Request {
    user: {
        id: number,
        role: string,
    };
}