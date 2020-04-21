import * as express from 'express';
import * as path from 'path';
import * as passport from 'passport'
import * as morgan from 'morgan';
import * as dotenv from 'dotenv';


import './Middleware/localstrategy';
import './Middleware/bearerstrategy';
import mainRouter from './Routes';

const app = express();

app.use(passport.initialize());

app.use(express.static('public'));

app.use(express.json());

app.use(morgan('dev'));

app.use(mainRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

dotenv.config();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
