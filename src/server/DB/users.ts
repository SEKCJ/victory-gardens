import { Query } from './index';

const findOneByEmail = async (email: string) => {
    return Query('SELECT * FROM users WHERE email = ? LIMIT 1; --', [email]);
}

const findOneById = async (id: number) => {
    return Query('SELECT * FROM users WHERE id = ?; --', [id])
}

const post = async (email: string, firstname: string, lastname: string, password: string) => {
    let values = [email, firstname, lastname, password];
    return Query('INSERT INTO users(email, firstname, lastname, password) VALUES(?,?,?,?); --', values)
}

export default {
    findOneByEmail,
    findOneById,
    post
}