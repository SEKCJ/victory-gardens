import { Query } from '../index';

const allAvatars = async () => {
    return Query('SELECT * FROM avatar')
};

const oneAvatar = async (id: number) => {
    return Query('SELECT * FROM avatar where id = ?', [id])
};

const postAvatar = async (values: any) => {
    return Query('SET @@auto_increment_increment = 1; INSERT INTO avatar VALUES ?', values);
  };

const putAvatar = async (values: any, id: number) => {
    return Query('UPDATE avatar SET ? WHERE id = ?', values)
};

const deleteAvatar = async (id: number) => {
    return Query('DELETE FROM avatar WHERE id = ?', [id])
};

export default {
    allAvatars,
    oneAvatar,
    postAvatar,
    putAvatar,
    deleteAvatar
}