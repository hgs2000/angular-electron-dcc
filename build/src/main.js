"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({ minHeight: 600, minWidth: 800 });
    mainWindow.maximize();
    mainWindow.loadURL('https://www.google.com');
    mainWindow.on("closed", () => { mainWindow.destroy(); });
}
electron_1.app.on('ready', () => createWindow());
electron_1.app.on('window-all-closed', () => { if (process.platform !== 'darwin') {
    electron_1.app.quit();
} });
electron_1.app.on('activate', () => { if (mainWindow === null)
    createWindow(); });
