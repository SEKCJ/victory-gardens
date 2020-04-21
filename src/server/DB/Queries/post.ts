import { Query } from "../index";
import { IPost } from "../../Models";

const allPosts = async () => {
  return Query<IPost[]>(
    `SELECT posts.*, users.username, avatar.url FROM posts
    JOIN users ON posts.userid = users.id
    JOIN avatar ON users.avatarid = avatar.id`
  );
};

const onePost = async (id: number) => {
  return Query<IPost[]>(
    `SELECT posts.*, users.avatarid, avatar.url
        FROM posts JOIN users ON users.id = users.id
        JOIN avatar ON users.avatarid = avatar.id
        WHERE posts.id = ?`,
    [id]
  );
};

const postPost = async (userid: number, title: string, content: string) => {
  return Query<IPost>(
    `SET @@auto_increment_increment = 1; INSERT INTO posts (userid, title, content) VALUES (?,?,?)`,
    [userid, title, content]
  );
};

const putPost = async (id: number, title: string, content: string) => {
  return Query<IPost>(`UPDATE posts SET title = ?, content = ? WHERE id = ?`, [
    title,
    content,
    id
  ]);
};

const deletePost = async (id: number) => {
  return Query<IPost>(`DELETE FROM posts WHERE id = ?`, [id]);
};

export default {
  allPosts,
  onePost,
  postPost,
  putPost,
  deletePost,
};
