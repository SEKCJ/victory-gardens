import * as express from 'express';
import * as path from 'path';
import mainRouter from './Routes';


const app = express();

// Requires express.json to parse body requests
app.use(express.json());

app.use(express.static('public'));
app.use(mainRouter);

// Add client side routes to array in strings separated by commas
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
