import * as express from "express";
import DB from "../DB";
import { hasRole, isAdmin } from "../Auth/authCheckpoint";

const router = express.Router();

// GET avatars - if (id) GET one, else GET all
router.get("/:id?", async (req, res) => {
  let id: number = parseInt(req.params.id, 10);
  if (id) {
    try {
      let avatar = await DB.Avatar.oneAvatar(id);
      res.json(avatar);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    try {
      let avatars = await DB.Avatar.allAvatars();
      res.json(avatars);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
});

router.get("/myavatar/:token", async (req, res) => {
  try {
    let token = req.params.token; // lowercase bc params/myavatar/:token is also lowercase (CM)
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let theuserid = parseInt(result.userid, 10);
    res.json(await DB.Users.getUserInfo(theuserid))
  } catch (e) {
      console.log(e);
      res.sendStatus(500);
  }
});

router.post("/", isAdmin, async (req, res) => {
  let url = req.body.url;
  try {
    res.json(await DB.Avatar.postAvatar(url));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// updates user's table for users to select an avatar
router.put("/select", hasRole, async (req, res) => {
  try {
    let avatarid = parseInt(req.body.avatarId, 10);
    let token = req.body.Token;
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let theuserid = parseInt(result.userid, 10);
    res.json(await DB.Users.selectAvatar(theuserid, avatarid));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// updates avatar table for admins
router.put("/:id?", isAdmin, async (req, res) => {
  let avatarObj = {
    id: parseInt(req.body.id, 10),
    url: req.body.url,
  };
  try {
    res.json(await DB.Avatar.postAvatar(avatarObj));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", isAdmin, async (req, res) => {
  let id = parseInt(req.params.id, 10);
  try {
    res.json(await DB.Avatar.deleteAvatar(id));
  } catch (e) {
    console.log(e);
    res.sendStatus(500).json("delete failed");
  }
});

export default router;
