import { Query } from "../index";
import { IResponse } from "../../Models";

const allResByPost = async (postid: number) => {
  return Query<IResponse[]>(
    `SELECT responses.* FROM responses
        JOIN posts ON posts.id = responses.postid
        WHERE posts.id = ?`,
    [postid]
  );
};

const postRes = async (postid: number, userid: number, response: string) => {
  return Query<IResponse>(
    `SET @@auto_increment_increment = 1; INSERT INTO responses (postid, userid, response) VALUES (?,?,?)`, [postid, userid, response]);
};

const putRes = async (id: number, response: string) => {
  return Query<IResponse>(`UPDATE responses SET responses = ? WHERE id =?`, [
    response,
    id
  ]);
};

const deleteRes = async (id: number) => {
  return Query<IResponse>(`DELETE FROM responses WHERE id = ?`, [id])
}

export default {
  allResByPost,
  postRes,
  putRes,
  deleteRes
};
