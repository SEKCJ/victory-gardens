import { Query } from '../index';
import { ITokens } from '../../Models/index';

const match = async (id: number, userid: number, token: string) => {
    return Query<ITokens[]>('SELECT * FROM tokens WHERE id = ? AND userid = ? AND token = ?; --', [id, userid, token]);
};

const findUserIdByToken = async(token:string) => {
    return Query<ITokens[]>('SELECT userid FROM tokens WHERE token = ? LIMIT 1;--', [token])
}

const post = async (userid: number) => {
    return Query('SET @@auto_increment_increment = 1; INSERT INTO tokens (userid) VALUES (?); --', [userid]);
};

const put = async (id: number, token: string) => {
    return Query('UPDATE tokens SET token = ? WHERE id = ?; --', [token, id]);
};

export default {
    match,
    post,
    put,
    findUserIdByToken
}