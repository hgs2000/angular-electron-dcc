import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ minHeight: 600, minWidth: 800 });
    mainWindow.maximize();

    mainWindow.loadURL('https://www.google.com');

    mainWindow.on("closed", () => { mainWindow.destroy() });

}

app.on('ready', () => createWindow());
app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit() } });
app.on('activate', () => { if (mainWindow === null) createWindow() });
