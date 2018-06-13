import { Router } from 'express';
import Database from "better-sqlite3";

const router: Router = Router();
const db = new Database('../clientes.db');

router.get('/getTabela', (req, res) => {
    res.send('TODO implementar isso');
})

function getTabela() {

}

export const Api: Router = router;