import { Query } from '../index';
import { IAvatar } from '../../Models/index';

const allAvatars = async () => {
    return Query<IAvatar[]>('SELECT * FROM avatar')
};

const oneAvatar = async (id: number) => {
    return Query<IAvatar[]>('SELECT * FROM avatar where id = ?', [id])
};

const postAvatar = async (values: any) => {
    return Query<IAvatar>('SET @@auto_increment_increment = 1; INSERT INTO avatar VALUES ?', values);
  };

const putAvatar = async (values: any, id: number) => {
    return Query<IAvatar>('UPDATE avatar SET ? WHERE id = ?', [values, id])
};

const deleteAvatar = async (id: number) => {
    return Query<IAvatar>('DELETE FROM avatar WHERE id = ?', [id])
};

export default {
    allAvatars,
    oneAvatar,
    postAvatar,
    putAvatar,
    deleteAvatar
}