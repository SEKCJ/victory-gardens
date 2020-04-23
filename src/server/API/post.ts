import * as express from "express";
import DB from "../DB";
import { hasRole, isAdmin } from "../Auth/authCheckpoint";

const router = express.Router();

// GET posts in Community Garden forum with their respective commments (aka responses) - if (id) GET one, else GET all posts
router.get("/:id?", async (req, res) => {
  let id: number = parseInt(req.params.id, 10);
  if (id) {
    try {
      let [post]: any = await DB.Post.onePost(id);
      let responses = await DB.Response.allResByPost(id);
      post["comments"] = responses;
      res.json(post);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    try {
      let posts = await DB.Post.allPosts();
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
    let posted: any = await DB.Post.postPost(userid, title, content)
    res.json(posted[1]);
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
  let token = req.body.Token;
  try {
    let [userResults]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let userid = parseInt(userResults.userid, 10);
    let [results] = await DB.Post.confirmUserPost(userid, id)
    if (results) {
      res.json(await DB.Post.deletePost(id));
    } else {
      res.sendStatus(400).json("nice try")
    }
  } catch (e) {
    res.sendStatus(500).json("delete failed");
  }
});

export default router;
