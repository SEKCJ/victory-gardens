import * as mysql from "mysql";
import config from "../Config";

import Tokens from './Queries/accesstokens';
import Users from './Queries/users';
import Avatar from './Queries/avatar';
import Vegetables from './Queries/vegetables';
import SavedVegetables from './Queries/savedvegetables';
import Herbs from './Queries/herbs';
import SavedHerbs from './Queries/savedherbs'
import HelpChoose from './Queries/helpchoose';
import ChooseHerbs from './Queries/chooseherbs'
import Post from './Queries/post';
import Response from './Queries/response'

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
  // or (query: string, values?: Array<string | number>)

  const sql = mysql.format(query, values);

  return new Promise<T>((resolve, reject) => {
    pool.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};



export default {
  Tokens,
  Users,
  Avatar,
  Vegetables,
  SavedVegetables,
  HelpChoose,
  Herbs,
  SavedHerbs,
  ChooseHerbs,
  Post,
  Response
};