import { Query } from '../index';
import { ITokens } from '../../Models/index';

const match = async (id: number, userid: number, token: string) => {
    return Query<ITokens[]>('SELECT * FROM tokens WHERE id = ? AND userid = ? AND token = ?; --', [id, userid, token]);
};

const post = async (userid: number) => {
    return Query('INSERT INTO tokens (userid) VALUES (?); --', [userid]);
};

const put = async (id: number, token: string) => {
    return Query('UPDATE tokens SET token = ? WHERE id = ?; --', [token, id]);
};

export default {
    match,
    post,
    put
}