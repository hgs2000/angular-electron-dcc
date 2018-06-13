import { Api } from './controllers/api';
import * as express from 'express';
import * as http from "http";
import * as path from 'path';
import * as bodyParser from "body-parser";
const app = express.default();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use('/api', Api);
app.get('*', (req, res) => {
    //res.sendFile(path.join(__dirname, 'app/index.html'))
    console.log(req.url)
    res.send('Work')
});

const port = 3000;
app.listen(port, 'localhost', () => { console.log('API carregada na porta 3000') })