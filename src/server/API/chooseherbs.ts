import * as express from "express";
import DB from "../DB";
import { IVegetables } from "../Models/index";
import { isAdmin } from '../Auth/authCheckpoint';

const router = express.Router();

router.get('/:id?', async (req, res) => {
    let id: number = parseInt(req.params.id, 10);
    if (id) {
        try {
            res.json(await DB.ChooseHerbs.oneHerbHelpByCategory(id));
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await DB.ChooseHerbs.allHerbsHelp());
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
});

router.get('/herbs/:herbsId', async (req, res) => {
    let herbsId: number = parseInt(req.params.herbsId, 10);
    console.log(herbsId)
    if (herbsId) {
        try {
            res.json((await DB.ChooseHerbs.oneHerbHelpByHerbsId(herbsId))[0])
        } catch (error) {
            console.log(error);
            res.status(500).json('specify id')
        }
    } else {
        res.status(500).json('specify id')
    }
});

router.post('/', isAdmin, async (req, res) => {
    let herbsId = req.body.herbsid;
    let categoryId = req.body.categoryid;
    try {
        res.json(await DB.ChooseHerbs.postHerbHelp(herbsId, categoryId))
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.put('/', isAdmin, async (req, res) => {
    let oldherbId = req.body.oldherbsid;
    let oldcategoryId = req.body.oldcategoryid;
    let herbsId = req.body.herbsid;
    let categoryId = req.body.categoryid;
    try {
        res.json(await DB.ChooseHerbs.putHerbHelp(oldherbId, oldcategoryId, herbsId, categoryId));
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});

router.delete('/:herbsId', isAdmin, async (req, res) => {
    let herbsId: number = parseInt(req.params.herbsid, 10);
    try {
        res.json(await DB.ChooseHerbs.deleteHerbHelp(herbsId))
    } catch (error) {
        console.log(error);
        res.status(500).json("id not specified")
    }
});

export default router;