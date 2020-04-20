import * as express from "express";

import DB from "../DB";
import { IVegetables } from "../Models/index";
import { hasRole, isAdmin } from "../Auth/authCheckpoint";

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

router.get("/name/:vgName", async (req, res) => {
  try {
    res.json(await DB.Vegetables.vegByName(req.params.vgName));
  } catch (error) {
    console.log(error);
    res.send(500).json("could not be found");
  }
});

// POST a new vegetable
router.post("/", isAdmin, async (req: { body: IVegetables }, res) => {
  let vegsObj = {
    name: req.body.name,
    sci_name: req.body.sci_name,
    soil: req.body.soil,
    position: req.body.position,
    frost_tolerant: req.body.frost_tolerant,
    feeding: req.body.feeding,
    companions: req.body.companions,
    bad_companions: req.body.bad_companions,
    spacing: req.body.spacing,
    sow_and_plant: req.body.sow_and_plant,
    planting_months: req.body.planting_months,
    harvest_months: req.body.harvest_months,
    notes: req.body.notes,
    harvesting: req.body.harvesting,
    troubleshooting: req.body.troubleshooting,
  };
  try {
    res.json(await DB.Vegetables.postVeg(vegsObj));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// PUT (edit) an existing vegetable
router.put(
  "/:id?",
  isAdmin,
  async (req: { body: IVegetables; params: any }, res) => {
    let id = parseInt(req.params.id, 10);
    let vegsObj = {
      name: req.body.name,
      sci_name: req.body.sci_name,
      soil: req.body.soil,
      position: req.body.position,
      frost_tolerant: req.body.frost_tolerant,
      feeding: req.body.feeding,
      companions: req.body.companions,
      bad_companions: req.body.bad_companions,
      spacing: req.body.spacing,
      sow_and_plant: req.body.sow_and_plant,
      planting_months: req.body.planting_months,
      harvest_months: req.body.harvest_months,
      notes: req.body.notes,
      harvesting: req.body.harvesting,
      troubleshooting: req.body.troubleshooting,
    };
    try {
      res.json(await DB.Vegetables.putVeg(vegsObj, id));
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
);

// DELETE an existing vegetable
router.delete("/:id", isAdmin, async (req, res) => {
  let id = parseInt(req.params.id, 10);
  try {
    res.json(await DB.Vegetables.deleteVeg(id));
  } catch (e) {
    console.log(e);
    res.sendStatus(500).json("delete failed");
  }
});

export default router;

// // before changing to if/else above
// // GET all vegetables
// router.get('/', async (req, res) => {
//     try {
//         let vegetables = await DB.Vegetables.all();
//         res.json(vegetables)
//         // res.json(await DB.Vegetables.all());
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

// // GET one vegetable based on its unique id
// router.get('/:id', async (req, res) => {
//     try {
//         let vegetables = await DB.Vegetables.one(parseInt(req.params.id, 10)); //base10 because the integer got converted to a string in the json
//         res.json(vegetables);
//         // res.json((await DB.Vegetables.one(req.params.id))[0]); // 0 index bc it comes first in the response
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });
