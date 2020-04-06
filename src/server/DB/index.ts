import * as mysql from "mysql";
import config from "../config";

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
  // or: (query:string, values?: Array<string | number>)

  const sql = mysql.format(query, values);
  console.log(sql);

  return new Promise<T>((resolve, reject) => {
    // pool.query(query, values, (err, results) -- this is poor practice bc it allows the user to have access to the variables query and values in plain text. Updated version below.
    pool.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export default {};