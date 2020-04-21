import { Query } from "../index";
import { IPost, IResponse } from "../../Models";

const allResByPost = async (postid: number) => {
  return Query<IResponse[]>(
    `SELECT responses.* FROM responses
        JOIN posts ON posts.id = responses.postid
        WHERE posts.id = ?`,
    [postid]
  );
};

const oneResByPost = async (id: number) => {
  return Query<IResponse[]>(`SELECT responses.*`);
};

export default {
  allResByPost,
  oneResByPost,
};
