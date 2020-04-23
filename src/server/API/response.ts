import * as express from "express";
import DB from "../DB";
import { hasRole } from "../Auth/authCheckpoint";

const router = express.Router();

// creates a new response/comment on a forum post
router.post("/", hasRole, async (req, res) => {
  let token = req.body.Token;
  let postid = req.body.postid;
  let response = req.body.replyBody;
  try {
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let userid = parseInt(result.userid, 10);
    res.json(await DB.Response.postRes(postid, userid, response));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// edit an existing response/comment on a forum post
router.put("/:id", hasRole, async (req, res) => {
  let id = parseInt(req.params.id, 10);
  let response = req.body.response;
  try {
    let token = req.body.Token;
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let theuserid = parseInt(result.userid, 10);
    res.json(await DB.Response.putRes(id, response));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// delete a response/comment on a forum post
router.delete("/:id", hasRole, async (req, res) => {
  let id = parseInt(req.params.id, 10);
  try {
    res.json(await DB.Response.deleteRes(id));
  } catch (e) {
    res.sendStatus(500).json("delete failed");
  }
});

export default router;
