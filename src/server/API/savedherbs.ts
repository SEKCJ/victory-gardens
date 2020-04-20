import * as express from "express";
import { hasRole, isAdmin } from '../Auth/authCheckpoint';
import DB from "../DB";
import { ITokens } from "../Models";
// import { IVegetables } from "../Models/index";

const router = express.Router();

// GET SavedHerbs - if (id) GET one, else GET all
router.get("/:token", hasRole, async (req, res) => {
  let token = req.params.token;
  if (token) {
    try {
      let SavedHerbs = await DB.SavedHerbs.oneSavedHerbByToken(token);
      res.json(SavedHerbs);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(500)
  }
});

router.post('/herbCheck', hasRole, async (req, res) => {
  let token = req.body.Token;
  let herbsid = parseInt(req.body.herbsId, 10);
  try {
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let theuserid = parseInt(result.userid, 10);
    res.json((await DB.SavedHerbs.herbCheck(theuserid, herbsid))[0])
  } catch (error) {
    console.log(error);
    res.status(500).json("check token and herb Id");
  }
})

// POST a new herb to SavedHerb
router.post("/", hasRole, async (req, res) => {
  let token = req.body.Token;
  let herbsid = parseInt(req.body.herbsId, 10);
  try {
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let theuserid = parseInt(result.userid, 10);
    res.json(await DB.SavedHerbs.postSavedHerb(theuserid, herbsid));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", hasRole, async (req, res) => {
  let token = req.body.Token;
  let herbsid = parseInt(req.params.id, 10);
  try {
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let theuserid = parseInt(result.userid, 10);
    res.json(await DB.SavedHerbs.deleteSavedHerb(theuserid, herbsid));
  } catch (e) {
    console.log(e);
    res.sendStatus(500).json("delete failed");
  }
});

export default router;