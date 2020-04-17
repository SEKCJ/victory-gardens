import * as express from "express";
import DB from "../DB";
import { IVegetables } from "../Models/index";
import { hasRole, isAdmin } from '../Auth/authCheckpoint';

const router = express.Router();

// GET vegetables - if (id) GET one, else GET all
router.get("/:id?", async (req, res) => {
  let id: number = parseInt(req.params.id, 10); //base10 because the integer got converted to a string in the json
  if (id) {
    try {
      let vegetables = await DB.Vegetables.oneVegById(id);
      res.json(vegetables);
      // res.json((await DB.Vegetables.one(req.params.id))[0]); // 0 index bc it comes first in the response
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    try {
      let vegetables = await DB.Vegetables.allVegs();
      res.json(vegetables);
      // res.json(await DB.Vegetables.all());
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
});

export default router;