"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./controllers/api");
const express = __importStar(require("express"));
const path = __importStar(require("path"));
const bodyParser = __importStar(require("body-parser"));
const app = express.default();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use('/api', api_1.Api);
app.get('*', (req, res) => {
    //res.sendFile(path.join(__dirname, 'app/index.html'))
    console.log(req.url);
    res.send('Work');
});
const port = 3000;
app.listen(port, 'localhost', () => { console.log('API carregada na porta 3000'); });
