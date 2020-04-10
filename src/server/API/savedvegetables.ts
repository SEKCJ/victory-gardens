import * as express from "express";

import DB from "../DB";

// import { IVegetables } from "../Models/index";

const router = express.Router();

// GET SavedVegetables - if (id) GET one, else GET all
router.get("/:id?", async (req, res) => {
  let theuserid: number = parseInt(req.params.id, 10); //base10 because the integer got converted to a string in the json
  if (theuserid) {
    try {
      let SavedVegetables = await DB.SavedVegetables.oneSavedVegByTheuserid(theuserid);
      res.json(SavedVegetables);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    try {
      let SavedVegetables = await DB.SavedVegetables.allSavedVegs();
      res.json(SavedVegetables);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
});

// POST a new vegetable to Saved Veg
router.post("/", async (req, res) => {
  let theuserid = parseInt(req.body.theuserid, 10);
  let vegetableid = parseInt(req.body.vegetableid, 10);
  try {
    res.json(await DB.SavedVegetables.postSavedVeg(theuserid, vegetableid));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  let vegetableid = parseInt(req.body.vegetableid, 10);
  try {
    res.json(await DB.SavedVegetables.deleteSavedVeg(vegetableid));
  } catch (e) {
    console.log(e);
    res.sendStatus(500).json("delete failed");
  }
});

export default router;
