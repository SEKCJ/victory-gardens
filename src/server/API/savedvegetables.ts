import * as express from "express";

import { hasRole, isAdmin } from "../Auth/authCheckpoint";
import DB from "../DB";
import { ITokens } from "../Models";

// import { IVegetables } from "../Models/index";

const router = express.Router();

// GET SavedVegetables - if (id) GET one, else GET all
router.get("/:token", hasRole, async (req, res) => {
  let token = req.params.token;
  if (token) {
    try {
      let SavedVegetables = await DB.SavedVegetables.oneSavedVegByToken(token);
      res.json(SavedVegetables);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(500);
  }
});

router.post("/vegetableCheck", hasRole, async (req, res) => {
  let token = req.body.Token;
  let vegetableid = parseInt(req.body.vegetableid, 10);
  try {
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let theuserid = parseInt(result.userid, 10);
    res.json((await DB.SavedVegetables.vegCheck(theuserid, vegetableid))[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json("check token and vegetable Id");
  }
});

// POST a new vegetable to Saved Veg
router.post("/", hasRole, async (req, res) => {
  let token = req.body.Token;
  let vegetableid = parseInt(req.body.vegetableid, 10);
  console.log(token, vegetableid);
  try {
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let theuserid = parseInt(result.userid, 10);
    res.json(await DB.SavedVegetables.postSavedVeg(theuserid, vegetableid));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", hasRole, async (req, res) => {
  let token = req.body.Token;
  let vegetableid = parseInt(req.params.id, 10);
  try {
    let [result]: any = (await DB.Tokens.findUserIdByToken(token))[0];
    let theuserid = parseInt(result.userid, 10);
    res.json(await DB.SavedVegetables.deleteSavedVeg(theuserid, vegetableid));
  } catch (e) {
    console.log(e);
    res.sendStatus(500).json("delete failed");
  }
});

export default router;
