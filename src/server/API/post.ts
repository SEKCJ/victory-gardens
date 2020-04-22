import * as express from "express";
import DB from "../DB";
import { hasRole, isAdmin } from "../Auth/authCheckpoint";

const router = express.Router();

// GET posts in Community Garden forum with their respective commments (aka responses) - if (id) GET one, else GET all posts
router.get("/:id?", async (req, res) => {
  let id: number = parseInt(req.params.id, 10);
  if (id) {
    try {
      let post = await DB.Post.onePost(id);
      res.json(post);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    try {
      let posts = await DB.Post.allPosts();
      let forum = posts.map(async (element) => {
        // element gets an element in the array of posts
        let responses = await DB.Response.allResByPost(element.id);
        let mainPost: any = Object.assign(element);
        mainPost["comments"] = responses;
        return mainPost;
      });
      await Promise.all(forum);
      res.json(posts);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
});

// creates a new forum post
router.post("/", hasRole, async (req, res) => {
  let token = req.body.Token;
  let title = req.body.title;
  let content = req.body.content;
  try {
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let userid = parseInt(result.userid, 10);
    res.json(await DB.Post.postPost(userid, title, content));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// edit an existing forum post
router.put("/:id", hasRole, async (req, res) => {
  let id = parseInt(req.params.id, 10);
  let title = req.body.title;
  let content = req.body.content;
  try {
    let token = req.body.Token;
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let theuserid = parseInt(result.userid, 10);
    res.json(await DB.Post.putPost(id, title, content));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", hasRole, async (req, res) => {
  let id = parseInt(req.params.id, 10);
  try {
    res.json(await DB.Post.deletePost(id));
  } catch (e) {
    res.sendStatus(500).json("delete failed");
  }
});

export default router;
