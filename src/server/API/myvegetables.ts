import * as express from "express";
import DB from "../DB";

import { IVegetables } from "../Models/index";

const router = express.Router();

// GET MyVegetables - if (id) GET one, else GET all
router.get("/:id?", async (req, res) => {
    let id: number = parseInt(req.params.id, 10); //base10 because the integer got converted to a string in the json
    if (id) {
      try {
        let MyVegetables = await DB.MyVegetables.oneMyVegByTheuserid(id);
        res.json(MyVegetables);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    } else {
      try {
        let MyVegetables = await DB.MyVegetables.allMyVegs();
        res.json(MyVegetables);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    }
  });

// POST a new vegetable to MyVeg
router.post("/", async (req, res) => {
    let theuserid = parseInt(req.params.theuserid, 10);
    let vegetableid = parseInt(req.params.vegetableid, 10);
    try {
      res.json(await DB.MyVegetables.postMyVeg(theuserid, vegetableid));
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  router.delete("/:id", async (req, res) => {
    let vegetableid = parseInt(req.params.vegetableid, 10);
    try {
      res.json(await DB.MyVegetables.deleteMyVeg(vegetableid));
    } catch (e) {
      console.log(e);
      res.sendStatus(500).json("delete failed");
    }
  });

  export default router;