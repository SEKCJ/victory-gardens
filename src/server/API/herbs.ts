import * as express from "express";
import DB from "../DB";
import { IVegetables } from "../Models/index";
import { hasRole, isAdmin } from "../Auth/authCheckpoint";

const router = express.Router();

// GET herbs - if (id) GET one, else GET all
router.get("/:id?", async (req, res) => {
  let id: number = parseInt(req.params.id, 10); //base10 because the integer got converted to a string in the json
  if (id) {
    try {
      let herbs = await DB.Herbs.oneHerbById(id);
      res.json(herbs);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    try {
      let herbs = await DB.Herbs.allHerbs();
      res.json(herbs);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
});

router.get("/name/:herbName", async (req, res) => {
  try {
    res.json(await DB.Herbs.herbByName(req.params.herbName));
  } catch (error) {
    console.log(error);
    res.send(500).json("could not be found");
  }
});

// POST a new herb
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
    res.json(await DB.Herbs.postHerb(vegsObj));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// PUT (edit) an existing herb
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
      res.json(await DB.Herbs.putHerb(vegsObj, id));
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
);

// DELETE an existing herb
router.delete("/:id", isAdmin, async (req, res) => {
  let id = parseInt(req.params.id, 10);
  try {
    res.json(await DB.Herbs.deleteHerb(id));
  } catch (e) {
    console.log(e);
    res.sendStatus(500).json("delete failed");
  }
});

export default router;
