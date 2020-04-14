import { Query } from '../index';
import { IUsers } from '../../Models/index';

const findOneByEmail = async (email: string) => {
    return Query<IUsers[]>('SELECT * FROM users WHERE email = ? LIMIT 1; --', [email]);
}

const findOneById = async (id: number) => {
    return Query<IUsers[]>('SELECT * FROM users WHERE id = ?; --', [id])
}

const checkEmail = async (email: string) => {
    return Query<IUsers[]>('SELECT email FROM users WHERE email = ?; --', [email])
}

const post = async (email: string, firstname: string, lastname: string, password: string) => {
    let values = [email, firstname, lastname, password];
    return Query<IUsers>('SET @@auto_increment_increment = 1; INSERT INTO users(email, firstname, lastname, password) VALUES(?,?,?,?); --', values)
}

export default {
    findOneByEmail,
    checkEmail,
    findOneById,
    post
}