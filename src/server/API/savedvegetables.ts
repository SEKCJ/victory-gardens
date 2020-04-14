import * as express from "express";

import { hasRole, isAdmin } from '../Auth/authCheckpoint';
import DB from "../DB";

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
    res.sendStatus(500)
  }
});

// POST a new vegetable to Saved Veg
router.post("/", hasRole, async (req, res) => {
  let theuserid = parseInt(req.body.theuserid, 10);
  let vegetableid = parseInt(req.body.vegetableid, 10);
  try {
    res.json(await DB.SavedVegetables.postSavedVeg(theuserid, vegetableid));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", hasRole, async (req, res) => {
  let vegetableid = parseInt(req.body.vegetableid, 10);
  try {
    res.json(await DB.SavedVegetables.deleteSavedVeg(vegetableid));
  } catch (e) {
    console.log(e);
    res.sendStatus(500).json("delete failed");
  }
});

export default router;
