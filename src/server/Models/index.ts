export interface IUsers {
    id: number,
    email: string,
    firstname: string,
    lastname: string,
    password: string
}

export interface ITokens {
    id: number,
    userid: number,
    token: string,
    expires: Date,
}

import {Request} from 'express';

export interface ReqUser extends Request {
    user: {
        id: number,
        role: string,
    };
}