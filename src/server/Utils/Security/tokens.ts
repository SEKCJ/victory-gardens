import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { IPayLoad } from '../../Models/index';

import Config from '../../Config';
import DB from '../../DB';

export const CreateToken = async (payload: IPayLoad) => {
    let result = await DB.Tokens.post(payload.userid);
    payload.accesstokenid = result.insertId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    console.log(Config.auth.secret);
    let token = await jwt.sign(payload, Config.auth.secret);
    await DB.Tokens.put(payload.accesstokenid, token);
    return token;
}

export const ValidToken = async (token: string) => {
    let payload: IPayLoad = <IPayLoad>jwt.decode(token);
    let [matched] = await DB.Tokens.match(payload.accesstokenid, payload.userid, token);
    if (!matched) {
        throw new Error("Invalid Token");
    } else {
        return payload;
    }
};


