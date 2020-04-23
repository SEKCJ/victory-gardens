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

const post = async (email: string, firstname: string, lastname: string, password: string, user: string) => {
    let values = [email, firstname, lastname, password, user];
    return Query<IUsers>('SET @@auto_increment_increment = 1; INSERT INTO users(email, firstname, lastname, password, username) VALUES(?,?,?,?,?); --', values)
}

const selectAvatar = async (id: number, avatarid: number) => {
    let values = [avatarid, id];
    return Query<IUsers>('UPDATE users SET avatarid = ? WHERE id= ?', values)
};

const updatePassword = async (id: number, newPassword: string) => {
    let values = [newPassword, id];
    return Query<IUsers>('UPDATE users SET password = ? WHERE id = ?', values)
}

const getUserInfo = async (id: number) => {
    return Query<IUsers>(
        `SELECT avatar.url, users.email, users.firstname, users.lastname, users.username, users.id
        FROM avatar RIGHT JOIN users ON users.avatarid = avatar.id WHERE users.id = ?`
        , [id]);
}

const deleteUser = async (id: number) => {
    return Query<IUsers>("DELETE FROM users WHERE id = ?", [id])
}

export default {
    findOneByEmail,
    checkEmail,
    findOneById,
    post,
    selectAvatar,
    updatePassword,
    getUserInfo, 
    deleteUser
}