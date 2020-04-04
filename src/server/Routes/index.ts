import * as express from 'express';

const router = express.Router();

router.get('/hello', (req, res, next) => {
    res.json('World');
});

export default router;