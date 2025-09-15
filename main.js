const win = new BrowserWindow({
  width: 1000,
  height: 800,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
    session: incognitoSession,
    contextIsolation: true,
    nodeIntegration: false,
    webviewTag: true,  // <<--- add this
  }
});
