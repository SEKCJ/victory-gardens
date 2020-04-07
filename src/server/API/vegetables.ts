import * as express from 'express';
import DB from '../DB';

const router = express.Router();

// GET vegetables - if (id) GET one, else GET all
router.get('/:id?', async (req, res) => {
    let id: number = parseInt(req.params.id, 10); //base10 because the integer got converted to a string in the json
    if (id) {
        try {
            let vegetables = await DB.Vegetables.one(id)
            res.json(vegetables);
            // res.json((await DB.Vegetables.one(req.params.id))[0]); // 0 index bc it comes first in the response
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            let vegetables = await DB.Vegetables.all();
            res.json(vegetables)
            // res.json(await DB.Vegetables.all());
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
});

// POST a new vegetable
router.post('/', async (req, res) => {
    // let id = parseInt(req.params.id, 10);
    let name = req.body.name;
    let soil = req.body.soil;
    let position = req.body.position;
    let frost_tolerant = req.body.frost_tolerant;
    let feeding = req.body.feeding;
    let companions = req.body.companions;
    let spacing = req.body.spacing;
    let sow_and_plant = req.body.sow_and_plant;
    let notes = req.body.notes;
    let harvesting = req.body.harvesting;
    let troubleshooting = req.body.troubleshooting;
    // need to have a userid associated with who adds what vegetable
    try {
        res.json(await DB.Vegetables.post(name, soil, position, frost_tolerant, feeding, companions, spacing, sow_and_plant, notes, harvesting, troubleshooting))
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// PUT (edit) an existing vegetable
router.put('/:id?', async (req, res) => {
    let id = parseInt(req.params.id, 10);
    let name = req.body.name;
    let soil = req.body.soil;
    let position = req.body.position;
    let frost_tolerant = req.body.frost_tolerant;
    let feeding = req.body.feeding;
    let companions = req.body.companions;
    let spacing = req.body.spacing;
    let sow_and_plant = req.body.sow_and_plant;
    let notes = req.body.notes;
    let harvesting = req.body.harvesting;
    let troubleshooting = req.body.troubleshooting;
    try {
        res.json(await DB.Vegetables.put(id, name, soil, position, frost_tolerant, feeding, companions, spacing, sow_and_plant, notes, harvesting, troubleshooting))
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// DELETE an existing vegetable
router.delete('/:id', async (req, res) => {
    let id = parseInt(req.params.id, 10);
    try {
        res.json(await DB.Vegetables.del(id))
    } catch(e) {
        console.log(e);
        res.sendStatus(500).json('delete failed');
    }
});

 export default router


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