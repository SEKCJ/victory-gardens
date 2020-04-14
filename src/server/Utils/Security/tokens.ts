import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { IPayLoad } from '../../Models/index';

import Config from '../../Config';
import DB from '../../DB';

export const CreateToken = async (payload: IPayLoad) => {
    let result = await DB.Tokens.post(payload.userid);
    let resultId = 0;
    Object.entries(result).forEach((element) => {
        let obj: any = element[1];
        if (obj.insertId !== 0) {
            resultId = obj.insertId
        }
    })
    payload.accesstokenid = resultId;
    payload.unique = crypto.randomBytes(32).toString('hex');
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


