"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
const router = express_1.Router();
const db = new better_sqlite3_1.default('../clientes.db');
router.get('/getTabela', (req, res) => {
    res.send('TODO implementar isso');
});
function getTabela() {
}
exports.Api = router;
