const { app, BrowserWindow, session } = require('electron');
const path = require('path');

function createWindow() {
  // Create a new session for this window (isolated incognito session)
  const incognitoSession = session.fromPartition('persist:incognito-' + Date.now());

  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      session: incognitoSession,
      contextIsolation: true,
      nodeIntegration: false,
    }
  });

  // Load our browser UI
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});
