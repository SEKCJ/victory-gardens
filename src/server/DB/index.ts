import * as mysql from "mysql";

import config from "../config";
import Tokens from './accesstokens';
import Users from './users';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any> (query: string, values?: Array<string | number>) => {

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
};