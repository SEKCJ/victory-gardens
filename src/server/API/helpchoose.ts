import * as express from "express";

import DB from "../DB";
import { IVegetables } from "../Models/index";
import { isAdmin } from '../Auth/authCheckpoint';

const router = express.Router();

router.get('/:id?', async (req, res) => {
    let id: number = parseInt(req.params.id, 10);
    if (id) {
        try {
            res.json(await DB.HelpChoose.oneHelpByCategory(id));
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await DB.HelpChoose.allHelp());
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
})

router.get('/vegetable/:vegId', async (req, res) => {
    let vegId: number = parseInt(req.params.vegId, 10);
    console.log(vegId)
    if (vegId) {
        try {
            res.json((await DB.HelpChoose.oneHelpByVegId(vegId))[0])
        } catch (error) {
            console.log(error);
            res.status(500).json('specify id')
        }
    } else {
        res.status(500).json('specify id')
    }
})

router.post('/', isAdmin, async (req, res) => {
    let vegId = req.body.vegetableid;
    let categoryId = req.body.categoryid;
    try {
        res.json(await DB.HelpChoose.postHelp(vegId, categoryId))
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})

router.put('/', isAdmin, async (req, res) => {
    let oldvegId = req.body.oldvegetableid;
    let oldcategoryId = req.body.oldcategoryid;
    let vegId = req.body.vegetableid;
    let categoryId = req.body.categoryid;
    try {
        res.json(await DB.HelpChoose.putHelp(oldvegId, oldcategoryId, vegId, categoryId));
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})

router.delete('/:vegId', isAdmin, async (req, res) => {
    let vegId: number = parseInt(req.params.vegid, 10);
    try {
        res.json(await DB.HelpChoose.deleteHelp(vegId))
    } catch (error) {
        console.log(error);
        res.status(500).json("id not specified")
    }
})

export default router;