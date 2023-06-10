const { app, BrowserWindow } = require('electron');

const WIDTH = 800;
const HEIGHT = 600;

function createWindow() {
  const mainWindow = new BrowserWindow({ width: WIDTH, height: HEIGHT });

  mainWindow.webContents.openDevTools();
  mainWindow.loadFile('./public/index.html');
}

app.whenReady().then(() => createWindow());
