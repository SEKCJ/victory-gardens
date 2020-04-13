import * as express from "express";
import DB from "../DB";

import { IVegetables } from "../Models/index";

const router = express.Router();

router.get('/id', async (req, res) => {
    let id: number = parseInt(req.params.id, 10);
    if (id) {
    try {
        let helpchoose = await DB.HelpChoose.allHelp(id);
        res.json(helpchoose);
        // res.json(await DB.HelpChoose.allHelp());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
} else {
    res.sendStatus(500)
}
})

export default router;